import {Component, Input, OnChanges, Inject, SimpleChanges, ElementRef} from '@angular/core';
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
    providers: [TransformToCollapsibleIndentedNode],
})
export class ViewPropertiesComponent implements OnChanges {
    @Input() data: any;

    public static get CollapsedColor() : string { return "tan"; }
    public static get ExpandedColor() : string { return "blanchedalmond"; }
    public static get ValueLabelColor() : string { return "beige"; }
    public static get ValueColor() : string { return "beige"; }

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
        this.tree.children((d: CollapsibleIndentedNode) =>  d.children ? d.children : new Array<CollapsibleIndentedNode>());

        this.margin = { top: 30, right: 20, bottom: 30, left: 20 };
        this.width = 960 - this.margin.left - this.margin.right;
        this.barHeight = 30;
        this.barWidth = this.width * .4;
    }

    ngOnChanges(changes: SimpleChanges) {
        let divSelection = d3.select("#d3ProperyExplorer");

        let actual = <CollapsibleIndentedNode>changes["data"].currentValue;

        if (divSelection && actual) {

            // perform transformation of data
            actual = this.transformToCollapsibleIndentedNode.transformJson(actual);

            // remove svg and re-add to provide a complete refresh
            divSelection.select("svg").remove();

            // create
            this.svgSelection = divSelection.append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            this.root = actual;

            // normally would call update be expand the first level with click
            this.click(actual);
        }
    };

    color = (node : CollapsibleIndentedNode) => {
        let result = node.collapsedChildren && node.collapsedChildren.length > 0 ? ViewPropertiesComponent.CollapsedColor :
            node.children ? ViewPropertiesComponent.ExpandedColor : ViewPropertiesComponent.ValueLabelColor;
        return result;
    }

    click = (data: CollapsibleIndentedNode) => {
        if (data.children) {
            data.collapsedChildren = data.children;
            data.children = undefined;
        } else {
            data.children = data.collapsedChildren;
            data.collapsedChildren = new Array<CollapsibleIndentedNode>();
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
        d3.select("#d3ProperyExplorer").select("svg")
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

        // It appears that once enter has been called selectNodes now contains all additions and updates
        // i.e. all of the nodes that are not exiting
        selectedNodes
            .attr("transform", d => { return "translate(" + d.y + "," + d.x + ")"; })

        // selectedNodes.exit() contains the nodes that are about to be deleted    
        // Transition exiting nodes to the parent's new position whilst fading out and then remove.
        selectedNodes.exit()
            .remove();

    }
}

