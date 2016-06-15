import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {IThreadViewDataset} from '../data/IThreadViewDataset';
import {IThread} from '../data/IThread';
import * as d3 from 'd3';

@Component({
    selector: 'thread-view-container',
    templateUrl: './app/viewThreadTreeElements/threadViewContainer/threadViewContainer.html',
    directives: [],
    styleUrls: []
})
export class ThreadViewContainer implements OnInit, OnChanges {
    @Input() data : IThreadViewDataset;
    
    ngOnInit () {                
        // var graph:any = d3.select('#d3Container');
        // this.divs = graph.
        // selectAll('div');             
        // this.render(this.data);   
    }
    
    ngOnChanges (changes) {
        this.render(this.data);
    };
    
    public render = (newValue : IThreadViewDataset) => {
        if (!newValue) return;
        
        // define a square
        let margin = {top: 20, right: 120, bottom: 20, left: 120},
            width = 960 - margin.right - margin.left,
            height = 500 - margin.top - margin.bottom;

        // a global counter to id the nodes            
        let i = 0;

        //define the extent of the tree
        let tree : d3.layout.Tree<IThread> = d3.layout.tree<IThread>()
            .size([height, width]);

        // define a function to get a nodes children
        tree.children(function(d : IThread) {
            return d.childThreads;
        })

        // define a diagonal function in terms of "IThread"
        let diagonal : d3.svg.Diagonal<d3.svg.diagonal.Link<IThread>, IThread> = d3.svg.diagonal<IThread>()
            .projection((d : IThread) => { return [d.y, d.x]; });

        // define an svg canvas    
        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // define root of tree
        let root : IThread = newValue.rootThread;
        
        let update = (source : IThread) => {

            // Compute the new tree layout.
            let nodes : IThread[] = tree.nodes(root).reverse()
            let links : d3.layout.tree.Link<IThread>[] = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function(d : IThread) { 
                d.y = d.depth * 180; 
            });

            // Declare the nodes…
            let node : d3.selection.Update<IThread> = svg.selectAll("g.node")
                .data(nodes, (d : IThread) => { 
                    // returns an id for a node;
                    // if a node hasn't yet got an id then add one
                    return (d.id || (d.id = ++i)).toString(); 
                });

            // Enter the nodes (add new nodes).
            // a new node is a "g" element presumably so that it can contain more than one element (circle and text)
            var nodeEnter = node.enter().append("g")
                // add the class node; this will identify the nodes for selection with the selectAll
                .attr("class", "node")
                // move the g to the correct position on screen
                .attr("transform", (d : IThread) => { 
                    return "translate(" + d.y + "," + d.x + ")"; 
                });

            // add a circle for the new nodes
            nodeEnter.append("circle")
                .attr("r", (d : IThread) => { return 15; })
                .style("stroke", (d: IThread) => { return "red"; })
                .style("fill", (d: IThread) => { return d.depth; });

            // add text for the new nodes
            nodeEnter.append("text")
                .attr("x", (d : IThread) => { 
                    return d.childThreads ? 20 * -1 : 20 })
                .attr("dy", ".35em")
                .attr("text-anchor", (d : IThread) => { 
                    return d.childThreads ? "end" : "start"; })
                .text((d : IThread) => { return d.debugText; })
                .style("fill-opacity", 1);

            // Declare the links…
            var link = svg.selectAll("path.link")
                .data(links, (d) => { return d.target.id.toString(); });

            // Enter the links.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .style("stroke", (d : d3.layout.tree.Link<IThread>) => { return d.target.depth; })
                .attr("d", diagonal);

        }
        
        update(root);


    };
}