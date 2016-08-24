import {Component, provide, Input, OnChanges, Inject, SimpleChanges} from '@angular/core';
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

    //private svgHelper: SvgHelper;
    private tree: d3.layout.Tree<CollapsibleIndentedNode>;
    private svg : d3.Selection<CollapsibleIndentedNode>;

    private duration: number = 400;
    private margin : MarginInterface
    private width: number;
    private barHeight: number;
    private barWidth: number;
    private root: CollapsibleIndentedNode;
    private diagonal;

    constructor(public transformToCollapsibleIndentedNode: TransformToCollapsibleIndentedNode) {
        //this.svgHelper = new SvgHelper();

        this.tree = d3.layout.tree<CollapsibleIndentedNode>()
            //.size([this.svgHelper.height, this.svgHelper.width])
            .nodeSize([0, 20]); // not sure what this does

        this.diagonal = d3.svg.diagonal()
            .projection(d => { return [d.y, d.x]; });

        // define a function to get a nodes children
        this.tree.children((d: CollapsibleIndentedNode) => d.children);

        this.margin = { top: 30, right: 20, bottom: 30, left: 20 };
        this.width = 960 - this.margin.left - this.margin.right;
        this.barHeight = 20;
        this.barWidth = this.width * .8;
    }

    ngOnChanges(changes: SimpleChanges) {
        let div = d3.select("#d3ProperyExplorer");

        let actual = <CollapsibleIndentedNode>changes["data"].currentValue;

        if (div && actual) {

            this.svg = div.append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            // this.svgHelper.configureSvgWithZoom(div);
            actual.x0 = 0;
            actual.y0 = 0;
            this.root = actual;
            this.update(actual);
        }
    };

    color = (node: CollapsibleIndentedNode) => {
        return node._children ? "#3182bd" : node.children ? "#c6dbef" : "#fd8d3c";
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

        // Compute the flattened node list. TODO use d3.layout.hierarchy.
        let nodes: CollapsibleIndentedNode[] = this.tree.nodes(this.root);

        let height = Math.max(500, nodes.length * this.barHeight + this.margin.top + this.margin.bottom);

        d3.select("svg").transition()
            .duration(this.duration)
            .attr("height", height);

        d3.select(self.frameElement).transition()
            .duration(this.duration)
            .style("height", height + "px");

        // Compute the "layout".
        nodes.forEach((n, i) => {
            n.x = i * this.barHeight;
        });

        // Update the nodes…
        let node = this.svg.selectAll<CollapsibleIndentedNode>("g.node");

        let selectedNodes: d3.selection.Update<CollapsibleIndentedNode> = this.svg.selectAll("g.node")
            .data(nodes, (d: CollapsibleIndentedNode) =>
                // returns an id for a node;
                d.id.toString());


        var nodeEnter = selectedNodes.enter().append("g")
            .attr("class", "node")
            .attr("transform", d => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .style("opacity", 1e-6);

        // Enter any new nodes at the parent's previous position.
        nodeEnter.append("rect")
            .attr("y", -this.barHeight / 2)
            .attr("height", this.barHeight)
            .attr("width", this.barWidth)
            .style("fill", this.color)
            .on("click", this.click);

        nodeEnter.append("text")
            .attr("dy", 3.5)
            .attr("dx", 5.5)
            .text(d => { return d.name; });

        // Transition nodes to their new position.
        nodeEnter.transition()
            .duration(this.duration)
            .attr("transform", d => { return "translate(" + d.y + "," + d.x + ")"; })
            .style("opacity", 1);

        node.transition()
            .duration(this.duration)
            .attr("transform", d => { return "translate(" + d.y + "," + d.x + ")"; })
            .style("opacity", 1)
            .select("rect")
            .style("fill", this.color);

        // Transition exiting nodes to the parent's new position.
        selectedNodes.exit().transition()
            .duration(this.duration)
            .attr("transform", d => { return "translate(" + source.y + "," + source.x + ")"; })
            .style("opacity", 1e-6)
            .remove();

        // Update the links…
        let links: d3.layout.tree.Link<CollapsibleIndentedNode>[] = this.tree.links(nodes);
        let link: d3.selection.Update<d3.layout.tree.Link<CollapsibleIndentedNode>> = this.svg.selectAll("path.link")
            .data(links, (d: d3.layout.tree.Link<CollapsibleIndentedNode>) => {
                return d.target.id.toString();
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", d => {
                var o = { x: source.x0, y: source.y0 };
                return this.diagonal({ source: o, target: o });
            })
            .transition()
            .duration(this.duration)
            .attr("d", this.diagonal);

        // Transition links to their new position.
        link.transition()
            .duration(this.duration)
            .attr("d", this.diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(this.duration)
            .attr("d", d => {
                var o = { x: source.x, y: source.y };
                return this.diagonal({ source: o, target: o });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }
}

