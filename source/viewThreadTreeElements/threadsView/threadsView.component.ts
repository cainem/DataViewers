import {Component, OnChanges, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {ThreadViewDataset} from '../model/threadViewDataset';
import {ThreadD3node} from '../model/threadD3node';
import {MarginInterface} from '../../utils/d3Helpers/margin.interface';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper';
import {NodeHelper} from './NodeHelper';
import {LinkHelper} from './LinkHelper';
import * as d3 from 'd3';

/*
    This component is responsible for displaying the (hierarchical) relationship between threads
*/
@Component({
    selector: 'threads-view',
    templateUrl: './app/viewThreadTreeElements/threadsView/threadsView.html',
    styleUrls: ['./app/viewThreadTreeElements/threadsView/threadsView.css'],
})
export class ThreadsViewComponent implements OnInit, OnChanges {  
    @Input() data : ThreadViewDataset;
	@Output() selectDataObjectChanged : EventEmitter<number> = new EventEmitter<number>();
    
    public selectedIndex : string;
    
    private svgHelper : SvgHelper; 
    private nodeIndexCounter: number;
    private tree: d3.layout.Tree<ThreadD3node>;
    private radius: number;
    private selectedRoot : ThreadD3node;
    private lastSelected : number;
    private nodes : ThreadD3node[];
    private links : d3.layout.tree.Link<ThreadD3node>[];

    constructor() {
        this.lastSelected = -1;
        this.svgHelper = new SvgHelper();
        this.nodeIndexCounter = 0;
        this.tree = d3.layout.tree<ThreadD3node>()
            .size([this.svgHelper.height, this.svgHelper.width]);

        // define a function to get a nodes children
        this.tree.children((d : ThreadD3node) => d.childThreads);
    }

    ngOnInit() {
        // ngOnInit gets called after ngOnChanges!!
    };

    ngOnChanges(changes : any) {
        let div = d3.select("#d3ThreadsContainer");

        if (div) {
            this.svgHelper.configureSvgWithZoom(div);
            if (this.data) {
                this.selectedRoot =  JSON.parse(JSON.stringify(this.data.rootThread));

                // Compute the new tree layout.
                this.nodes = this.tree.nodes(this.selectedRoot).reverse();
                this.links = this.tree.links(this.nodes);

                this.render();
            }
        }
    };

    onClick() {
        let element  = <HTMLInputElement>document.getElementById('localInput');

        let selected = Number(element.value);

        // this event is called when a thread is clicked upon in the left pane
        this.selectDataObjectChanged.next(selected);

        if (this.lastSelected !== -1) {
            this.data.findThreadById(this.lastSelected).isSelected = false;
        }

        // set isSelected on the selected node
        this.lastSelected = selected;
        this.nodes.forEach(n => {
            n.isSelected = n.id === selected;
        })

        this.render();
    }

    public render = () => {
        // Declare the nodes…
        let selectedNodes : d3.selection.Update<ThreadD3node> = this.svgHelper.svg.selectAll("g.threadNode")
            .data(this.nodes, (d : ThreadD3node) =>  
                // returns an id for a node;
                // if a node hasn't yet got an id then add one
                (d.id || (d.id = ++this.nodeIndexCounter)).toString());

        // Declare the links…
        let link : d3.selection.Update<d3.layout.tree.Link<ThreadD3node>> = this.svgHelper.svg.selectAll("path.link")
            .data(this.links, (d : d3.layout.tree.Link<ThreadD3node>) => 
            {
                // returns the key for the link 
                return d.target.id.toString(); 
            });


        LinkHelper.drawLinks(link.enter());

        // Enter the nodes (add new nodes).
        // a new node is a "g" element presumably so that it can contain more than one element (circle and text)
        NodeHelper.drawNodes(selectedNodes.enter());    

        // color the selected node
        selectedNodes.selectAll("circle.threadNode").style("fill", (d: ThreadD3node) =>
        { 
            return d.isSelected ? "cyan" : "black";
        });

    };
}