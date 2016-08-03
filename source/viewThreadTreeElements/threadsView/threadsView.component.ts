import {Component, OnChanges, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {ThreadViewDataset} from '../data/threadViewDataset';
import {ThreadD3nodeInterface} from '../data/threadD3node.interface';
import {MarginInterface} from '../d3Helpers/margin.interface';
import {NodeHelper} from './NodeHelper';
import {LinkHelper} from './LinkHelper';
import {SvgHelper} from '../d3Helpers/svgHelper';
import * as d3 from 'd3';

@Component({
    selector: 'threads-view',
    templateUrl: './app/viewThreadTreeElements/threadsView/threadsView.html',
    directives: [],
    styleUrls: ['./app/viewThreadTreeElements/threadsView/threadsView.css'],
})
export class ThreadsView implements OnInit, OnChanges {  
    @Input() data : ThreadViewDataset;
	@Output() selectDataObjectChanged : EventEmitter<number> = new EventEmitter<number>();
    
    public selectedIndex : string;

    private svgHelper : SvgHelper; 
    private nodeIndexCounter: number;
    private tree: d3.layout.Tree<ThreadD3nodeInterface>;
    private radius: number;

    constructor() {
        this.svgHelper = new SvgHelper();
        this.nodeIndexCounter = 0;
        this.tree = d3.layout.tree<ThreadD3nodeInterface>()
            .size([this.svgHelper.height, this.svgHelper.width]);

        // define a function to get a nodes children
        this.tree.children((d : ThreadD3nodeInterface) => d.childThreads);
    }

    ngOnInit() {
        // ngOnInit gets called after ngOnChanges!!
    };

    ngOnChanges(data : any) {
        let div = d3.select("#d3ThreadsContainer");

        if (div) {
            this.svgHelper.configureSvgWithZoom(div);
            this.render(this.data);
        }
    };

    onClick() {
        let element  = <HTMLInputElement>document.getElementById('localInput');
        // this event is called when a thread is clicked upon in the left pane
        this.selectDataObjectChanged.next(Number(element.value));
    }

    public render = (newValue : ThreadViewDataset) => {
        
        if (!newValue) {
            return;
        }
        
        // define root of tree
        let root : ThreadD3nodeInterface = newValue.rootThread;
        
        // Compute the new tree layout.
        let nodes : ThreadD3nodeInterface[] = this.tree.nodes(root).reverse()
        let links : d3.layout.tree.Link<ThreadD3nodeInterface>[] = this.tree.links(nodes);

        // Declare the nodes…
        let selectedNodes : d3.selection.Update<ThreadD3nodeInterface> = this.svgHelper.svg.selectAll("g.node")
            .data(nodes, (d : ThreadD3nodeInterface) =>  
                // returns an id for a node;
                // if a node hasn't yet got an id then add one
                (d.id || (d.id = ++this.nodeIndexCounter)).toString());

        // Declare the links…
        let link : d3.selection.Update<d3.layout.tree.Link<ThreadD3nodeInterface>> = this.svgHelper.svg.selectAll("path.link")
            .data(links, (d : d3.layout.tree.Link<ThreadD3nodeInterface>) => 
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