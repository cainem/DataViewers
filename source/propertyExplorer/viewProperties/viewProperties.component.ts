import {Component, provide, Input, OnChanges, Inject} from '@angular/core';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper';
import {TransformToCollapsibleIndentedNode} from '../model/transformToCollapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';
import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode'
import {LinkHelper} from './linkHelper';
import {NodeHelper} from './nodeHelper';

@Component({
    selector: 'view-properties',
    templateUrl: './app/propertyExplorer/viewProperties/viewProperties.html',
    directives: [],
    providers: [],
})
export class ViewProperties implements OnChanges {      
    @Input() data : any;

    private svgHelper : SvgHelper; 
    private tree: d3.layout.Tree<CollapsibleIndentedNode>;

    constructor(public transformToCollapsibleIndentedNode : TransformToCollapsibleIndentedNode ) {
        this.svgHelper = new SvgHelper();

        this.tree = d3.layout.tree<CollapsibleIndentedNode>()
            .size([this.svgHelper.height, this.svgHelper.width]);

        // define a function to get a nodes children
        this.tree.children((d : CollapsibleIndentedNode) => d.children);
    }

    ngOnChanges(data : any) {
        let div = d3.select("#d3ProperyExplorer");

        if (div) {
            this.svgHelper.configureSvgWithZoom(div);
            this.render(this.data);
        }
    };

    public render = (root : CollapsibleIndentedNode) => {
        
        if (!root) {
            return;
        }
        
        // // define root of tree
        // let root : ThreadD3nodeInterface = newValue.rootThread;
        
        // Compute the new tree layout.
        let nodes : CollapsibleIndentedNode[] = this.tree.nodes(root).reverse()
        let links : d3.layout.tree.Link<CollapsibleIndentedNode>[] = this.tree.links(nodes);

        // Declare the nodes…
        let selectedNodes : d3.selection.Update<CollapsibleIndentedNode> = this.svgHelper.svg.selectAll("g.node")
            .data(nodes, (d : CollapsibleIndentedNode) =>  
                // returns an id for a node;
                // if a node hasn't yet got an id then add one
                d.id.toString());

        // Declare the links…
        let link : d3.selection.Update<d3.layout.tree.Link<CollapsibleIndentedNode>> = this.svgHelper.svg.selectAll("path.link")
            .data(links, (d : d3.layout.tree.Link<CollapsibleIndentedNode>) => 
            {
                // returns the key for the link 
                return d.target.id.toString(); 
            });


        LinkHelper.drawLinks(link.enter());

        // Enter the nodes (add new nodes).
        // a new node is a "g" element presumably so that it can contain more than one element (circle and text)
        NodeHelper.drawNodes(selectedNodes.enter());    
    };


}
