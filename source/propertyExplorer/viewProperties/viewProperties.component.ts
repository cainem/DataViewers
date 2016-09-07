import {Component, provide, Input, OnChanges, Inject, SimpleChanges, ElementRef} from '@angular/core';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper';
import {TransformToCollapsibleIndentedNode} from '../model/transformToCollapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';
import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode'
import {LinkHelper} from './linkHelper';
import {NodeHelper} from './nodeHelper';
import {MarginInterface} from '../../utils/d3Helpers/margin.interface';

@Component({
    selector: 'view-properties',
    templateUrl: './app/propertyExplorer/viewProperties/viewProperties.html',
    directives: [],
    providers: [],
})
export class ViewProperties implements OnChanges {
    @Input() data: any;

    private tree: d3.layout.Tree<CollapsibleIndentedNode>;
    private svgSelection : d3.Selection<CollapsibleIndentedNode>;
    private diagonal : d3.svg.Diagonal<d3.svg.diagonal.Link<d3.svg.diagonal.Node>, d3.svg.diagonal.Node>;

    private duration: number = 400;
    private margin : MarginInterface
    private width: number;
    private barHeight: number;
    private barWidth: number;
    private root: CollapsibleIndentedNode;

    constructor(public transformToCollapsibleIndentedNode: TransformToCollapsibleIndentedNode) {

        this.tree = d3.layout.tree<CollapsibleIndentedNode>()
            // i think this is saying when you calculate the y position of the nodes
            // seperate them by 20; the x coordinate will always be zero
            .nodeSize([0, 20]); // not sure what this does

        // define the diagonal function
        this.diagonal = d3.svg.diagonal()
            .projection(d => { return [d.y, d.x]; });

        // define a function to get a nodes children
        this.tree.children((d: CollapsibleIndentedNode) => d.children);

        this.margin = { top: 30, right: 20, bottom: 30, left: 20 };
        this.width = 960 - this.margin.left - this.margin.right;
        this.barHeight = 30;
        this.barWidth = this.width * .4;
    }

    ngOnChanges(changes: SimpleChanges) {
        let divSelection = d3.select("#d3ProperyExplorer");

        let actual = <CollapsibleIndentedNode>changes["data"].currentValue;

        if (divSelection && actual) {

            // remove svg and re-add
            divSelection.select("svg").remove();

            // create
            this.svgSelection = divSelection.append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            actual.x0 = 0;
            actual.y0 = 0;
            this.root = actual;
            this.update(actual);
        }
    };

    color = (node : CollapsibleIndentedNode) => {
        let result = node._children ? "#3182bd" : node.children ? "#c6dbef" : "#fd8d3c";
        return result;
    }

    click = (data: CollapsibleIndentedNode) => {
        if (data.children) {
            data._children = data.children;
            data.children = null;
        } else {
            data.children = data._children;
            data._children = null;
        }
        this.update(data);
    }

    public update = (source: CollapsibleIndentedNode) => {

        if (!source) {
            return;
        }

        // compute relative x and y's'
        let nodes: CollapsibleIndentedNode[] = this.tree.nodes(this.root);

        let height = Math.max(500, nodes.length * this.barHeight + this.margin.top + this.margin.bottom);
        // recalculate the height of the required area (minimum 500)
        d3.select("svg")
            .transition()
            .duration(this.duration)
            .attr("height", height);

        // Compute the "layout". what?
        nodes.forEach((node, i) => {
            // this is how far down the page it will appear; x and y are flipped by the translate
            // function. y is therefore the left/right coordinate
            node.x = i * this.barHeight;
        });

        // select all of the nodes based on the data
        let selectedNodes: d3.selection.Update<CollapsibleIndentedNode> = this.svgSelection.selectAll("g.node")
            .data(nodes, (d: CollapsibleIndentedNode) =>
                // returns an id for a node;
                d.id.toString());

        // at this point selectedNodes contains the nodes that are not entering nor exiting
        // i.e the ones left unaltered by the any "children" changes                
        selectedNodes.select("div.inner").style("background-color", d => this.color(d));

        // select the new nodes        
        var nodeEnter = selectedNodes.enter();
        NodeHelper.add(this, nodeEnter, source, this.barHeight, this.barWidth);

        // Transition nodes to their new position.
        selectedNodes
            // .transition()
            // .duration(this.duration)
            .attr("transform", d => { return "translate(" + d.y + "," + d.x + ")"; })
            .style("opacity", 1)
            .select("rect")
            .style("fill", d => this.color(d));

        // selectedNodes.exit() contains the nodes that are about to be deleted    
        // Transition exiting nodes to the parent's new position whilst fading out and then remove.
        selectedNodes.exit()
            // .transition()
            // .duration(this.duration)
            // .attr("transform", d => { return "translate(" + source.y + "," + source.x + ")"; })
            // .style("opacity", 1e-6)
            .remove();

        // Update the links…
        // let links: d3.layout.tree.Link<CollapsibleIndentedNode>[] = this.tree.links(nodes);
        // let link: d3.selection.Update<d3.layout.tree.Link<CollapsibleIndentedNode>> = this.svgSelection.selectAll("path.link")
        //     .data(links, (d: d3.layout.tree.Link<CollapsibleIndentedNode>) => {
        //         return d.target.id.toString();
        //     });

        // // Enter any new links at the parent's previous position.
        // link.enter().insert("path", "g")
        //     .attr("class", "link")
        //     .attr("d", d => {
        //         var o = { x: source.x0, y: source.y0 };
        //         return this.diagonal({ source: o, target: o });
        //     })
        //     .transition()
        //     .duration(this.duration)
        //     .attr("d", this.diagonal);

        // // Transition links to their new position.
        // link.transition()
        //     .duration(this.duration)
        //     .attr("d", this.diagonal);

        // // Transition exiting nodes to the parent's new position.
        // link.exit()
        //     // .transition()
        //     // .duration(this.duration)
        //     // .attr("d", d => {
        //     //     var o = { x: source.x, y: source.y };
        //     //     return this.diagonal({ source: o, target: o });
        //     // })
        //     .remove();

        // Stash the old positions for transition.
        // nodes.forEach(d => {
        //     d.x0 = d.x;
        //     d.y0 = d.y;
        // });
    }
}

