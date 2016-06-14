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
        
        var margin = {top: 20, right: 120, bottom: 20, left: 120},
            width = 2960 - margin.right - margin.left,
            height = 2500 - margin.top - margin.bottom;
            
        var i = 0;

        var tree : d3.layout.Tree<IThread> = d3.layout.tree<IThread>()
            .size([height, width]);

        tree.children(function(d) {
            return d.childThreads;
        })

        var diagonal = d3.svg.diagonal<IThread>()
            .projection(function(d) { return [d.y, d.x]; });

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let root = newValue.rootThread;
        
        let update = (source : IThread) => {

            // Compute the new tree layout.
            let nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            //let x : d3.layout.tree.Node = nodes[0];


            // Normalize for fixed-depth.
            nodes.forEach(function(d) { 
                d.y = d.depth * 280; 
            });

            // Declare the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function(d) { return (d.id || (d.id = ++i)).toString(); });

            // Enter the nodes.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { 
                    return "translate(" + d.y + "," + d.x + ")"; });

            nodeEnter.append("circle")
                .attr("r", function(d) { return 15; })
                .style("stroke", function(d) { return "red"; })
                .style("fill", function(d) { return d.depth; });

            nodeEnter.append("text")
                .attr("x", function(d) { 
                    return d.childThreads ? 
                    20 * -1 : 20 })
                .attr("dy", ".35em")
                .attr("text-anchor", function(d) { 
                    return d.childThreads ? "end" : "start"; })
                .text(function(d) { return d.debugText; })
                .style("fill-opacity", 1);

            // Declare the links…
            var link = svg.selectAll("path.link")
                .data(links, function(d) { return d.target.id.toString(); });

            // Enter the links.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .style("stroke", function(d) { return d.target.depth; })
                .attr("d", diagonal);

        }
        
        update(root);


    };
}