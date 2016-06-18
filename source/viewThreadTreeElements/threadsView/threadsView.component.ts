import {Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IThreadViewDataset} from '../data/IThreadViewDataset';
import {IThread} from '../data/IThread';
import {IMargin} from './IMargin';
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
    
    private margin : IMargin;
    private height: number;
    private width: number;
    private nodeIndexCounter: number;
    private tree: d3.layout.Tree<IThread>;
    private diagonal : d3.svg.Diagonal<d3.svg.diagonal.Link<IThread>, IThread>
    private svg : d3.Selection<any>

    constructor() {
        this.margin = {top: 20, right: 120, bottom: 20, left: 120};
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.width = 960 - this.margin.right - this.margin.left;
        this.nodeIndexCounter = 0;
        this.tree = d3.layout.tree<IThread>()
            .size([this.height, this.width]);

        // define a function to get a nodes children
        this.tree.children((d : IThread) => d.childThreads);

        // define a diagonal function in terms of "IThread"
        this.diagonal = d3.svg.diagonal<IThread>()
            .projection((d : IThread) => [d.y, d.x]);
    }

    ngOnInit() {
        // ngOnInit gets called after ngOnChanges!!
    };

    ngOnChanges(data : any) {
        this.svg = d3.select("#d3ThreadsContainer").append("svg")
                    .attr("width", this.width + this.margin.right + this.margin.left)
                    .attr("height", this.height + this.margin.top + this.margin.bottom)
                    .append("g")
                    .call(d3.behavior.zoom().scaleExtent([0.1, 8]).on("zoom", this.zoom))                    
                    .append("g")
                    //.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");        

        if (this.svg) {
            this.render(this.data);
        }
    };

    onClick() {
        // this event is called when a thread is clicked upon in the left pane
        alert("here");
    }

    public zoom = () => {
        let ev : any = d3.event;
        this.svg.attr("transform", "translate(" + ev.translate + ")scale(" + ev.scale + ")");
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

        // Normalize for fixed-depth.
        nodes.forEach((d : IThread) => d.y = d.depth * 180);

        // Declare the nodes…
        let selectedNodes : d3.selection.Update<IThread> = this.svg.selectAll("g.node")
            .data(nodes, (d : IThread) =>  
                // returns an id for a node;
                // if a node hasn't yet got an id then add one
                (d.id || (d.id = ++this.nodeIndexCounter)).toString());

        // Enter the nodes (add new nodes).
        // a new node is a "g" element presumably so that it can contain more than one element (circle and text)
        let nodeEnter : d3.Selection<IThread> = selectedNodes.enter().append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : IThread) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeEnter.append("circle")
            .attr("r", (d : IThread) => 15)
            // .attr("onclick", (d: IThread) => 
            //     "document.getElementById('localInput').value = " + 
            //      d.id + 
            //      "; document.getElementById('eventRaiser').click();")
            .style("stroke", (d: IThread) => "red")
            .style("fill", (d: IThread) => d.depth);

        // add text for the new nodes
        nodeEnter.append("text")
            .attr("x", (d : IThread) => d.childThreads ? 20 * -1 : 20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : IThread) => d.childThreads ? "end" : "start")
            .text((d : IThread) => d.debugText)
            .style("fill-opacity", 1);

        // Declare the links…
        let link : d3.selection.Update<d3.layout.tree.Link<IThread>> = this.svg.selectAll("path.link")
            .data(links, (d : d3.layout.tree.Link<IThread>) => 
            {
                // returns the key for the link 
                return d.target.id.toString(); 
            });

        // Enter the links.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .style("stroke", (d : d3.layout.tree.Link<IThread>) => { return d.target.depth; })
            .attr("d", this.diagonal);

    };
}