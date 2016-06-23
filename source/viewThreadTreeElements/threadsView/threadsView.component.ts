import {Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IThreadViewDataset} from '../data/IThreadViewDataset';
import {IThread} from '../data/IThread';
import {IMargin} from './IMargin';
import {NodeHelper} from './NodeHelper';
import {LinkHelper} from './LinkHelper';
import {SvgHelper} from './svgHelper';
import * as d3 from 'd3';

@Component({
    selector: 'threads-view',
    templateUrl: './app/viewThreadTreeElements/threadsView/threadsView.html',
    directives: [],
    styleUrls: []
})
export class ThreadsView implements OnInit, OnChanges {  
    @Input() data : IThreadViewDataset;
	@Output() selectDataObjectChanged : EventEmitter<number> = new EventEmitter();
    
    public selectedIndex : string;

    private svgHelper : SvgHelper; 
    private nodeIndexCounter: number;
    private tree: d3.layout.Tree<IThread>;
    private radius: number;


    constructor() {

        this.svgHelper = new SvgHelper();
        this.nodeIndexCounter = 0;
        this.tree = d3.layout.tree<IThread>()
            .size([this.svgHelper.height, this.svgHelper.width]);

        // define a function to get a nodes children
        this.tree.children((d : IThread) => d.childThreads);
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

    public render = (newValue : IThreadViewDataset) => {
        
        if (!newValue) {
            return;
        }
        
        // define root of tree
        let root : IThread = newValue.rootThread;
        
        // Compute the new tree layout.
        let nodes : IThread[] = this.tree.nodes(root).reverse()
        let links : d3.layout.tree.Link<IThread>[] = this.tree.links(nodes);

        // Declare the nodes…
        let selectedNodes : d3.selection.Update<IThread> = this.svgHelper.svg.selectAll("g.node")
            .data(nodes, (d : IThread) =>  
                // returns an id for a node;
                // if a node hasn't yet got an id then add one
                (d.id || (d.id = ++this.nodeIndexCounter)).toString());

        // Declare the links…
        let link : d3.selection.Update<d3.layout.tree.Link<IThread>> = this.svgHelper.svg.selectAll("path.link")
            .data(links, (d : d3.layout.tree.Link<IThread>) => 
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