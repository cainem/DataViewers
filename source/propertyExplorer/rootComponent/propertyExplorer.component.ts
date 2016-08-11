import {Component, provide, Input, OnChanges, Inject} from '@angular/core';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper';
import {TransformToCollapsibleIndentedNode} from '../model/transformToCollapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';

@Component({
    selector: 'property-explorer',
    templateUrl: './app/propertyExplorer/rootComponent/propertyExplorer.html',
    directives: [],
    providers: [TransformToCollapsibleIndentedNode, KeyGenerator],
})
export class PropertyExplorer implements OnChanges {      
    @Input() data : any;

    private svgHelper : SvgHelper; 


    constructor(public transformToCollapsibleIndentedNode : TransformToCollapsibleIndentedNode ) {
        this.svgHelper = new SvgHelper();
    }

    ngOnChanges(data : any) {
        let div = d3.select("#d3ProperyExplorer");

        if (div) {
            this.svgHelper.configureSvgWithZoom(div);
            this.render(this.data);
        }
    };

    public render = (newData : any) => {
        
        // if (!newValue) {
        //     return;
        // }
        
        // // define root of tree
        // let root : ThreadD3nodeInterface = newValue.rootThread;
        
        // // Compute the new tree layout.
        // let nodes : ThreadD3nodeInterface[] = this.tree.nodes(root).reverse()
        // let links : d3.layout.tree.Link<ThreadD3nodeInterface>[] = this.tree.links(nodes);

        // // Declare the nodes…
        // let selectedNodes : d3.selection.Update<ThreadD3nodeInterface> = this.svgHelper.svg.selectAll("g.node")
        //     .data(nodes, (d : ThreadD3nodeInterface) =>  
        //         // returns an id for a node;
        //         // if a node hasn't yet got an id then add one
        //         (d.id || (d.id = ++this.nodeIndexCounter)).toString());

        // // Declare the links…
        // let link : d3.selection.Update<d3.layout.tree.Link<ThreadD3nodeInterface>> = this.svgHelper.svg.selectAll("path.link")
        //     .data(links, (d : d3.layout.tree.Link<ThreadD3nodeInterface>) => 
        //     {
        //         // returns the key for the link 
        //         return d.target.id.toString(); 
        //     });


        // LinkHelper.drawLinks(link.enter());

        // // Enter the nodes (add new nodes).
        // // a new node is a "g" element presumably so that it can contain more than one element (circle and text)
        // NodeHelper.drawNodes(selectedNodes.enter());    
    };


}
