import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {LinksAndNodesData, Node, Link} from './linksAndNodesData';
import * as d3 from 'd3';

@Component({
    selector: 'nodes-and-connections',
    templateUrl: './app/viewMachineElements/nodesAndConnections/nodesAndConnections.html',
    directives: [],
    styleUrls: []
})
export class NodesAndConnections implements OnInit, OnChanges {
    @Input() data : LinksAndNodesData;
    
    ngOnInit () {                
        // var graph:any = d3.select('#d3Container');
        // this.divs = graph.
        // selectAll('div');             
        // this.render(this.data);   
    }
    
    ngOnChanges (changes) {
        this.render(this.data);
    };
    
    public render = (newValue : LinksAndNodesData) => {        
        if (!newValue) return;
        
        var c10 = d3.scale.category10();
        var svg = d3.select("#d3Container")
            .append("svg")
            .attr("width", 1200)
            .attr("height", 800);

        var drag = d3.behavior.drag<Node>()
            .on("drag", function(d, i) 
            {
                d.x += (<d3.DragEvent>d3.event).dx
                d.y += (<d3.DragEvent>d3.event).dy
                d3.select(this).attr("cx", d.x).attr("cy", d.y);
                links.each(function(l : Link, li) {
                    if (l.source == i) {
                    d3.select(this).attr("x1", d.x).attr("y1", d.y);
                    } 
                    else if (l.target == i) {
                        d3.select(this).attr("x2", d.x).attr("y2", d.y);
                    }
                });
            });

            var links = svg.selectAll("link")
            .data(newValue.links)
            .enter()
            .append("line")
            .attr("class", "link")
            .attr("x1", function(l) {
                var sourceNode = newValue.nodes.filter(function(d, i) {
                return i == l.source
                })[0];
                d3.select(this).attr("y1", sourceNode.y);
                return sourceNode.x
            })
   .attr("x2", function(l) {
     var targetNode = newValue.nodes.filter(function(d, i) {
       return i == l.target
     })[0];
     d3.select(this).attr("y2", targetNode.y);
     return targetNode.x
   })
   .attr("fill", "none")
   .attr("stroke", "white");

    var nodes = svg.selectAll("node")
    .data(newValue.nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", function(d) {
        return d.x
    })
    .attr("cy", function(d) {
        return d.y
    })
    .attr("r", 15)
    .attr("fill", function(d, i) {
        return c10(i.toString());
    })
    .call(drag);    
    };

}