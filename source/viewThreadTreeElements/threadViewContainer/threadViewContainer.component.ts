import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {IThreadViewDataset} from '../data/IThreadViewDataset';
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
        
        var c10 = d3.scale.category20();
        var svg = d3.select("#d3Container")
            .append("svg")
            .attr("width", 1200)
            .attr("height", 800);

//         var drag = d3.behavior.drag<Node>()
//             .on("drag", function(d, i) 
//             {
//                 d.x += (<d3.DragEvent>d3.event).dx
//                 d.y += (<d3.DragEvent>d3.event).dy
//                 d3.select(this).attr("cx", d.x).attr("cy", d.y);
//                 links.each(function(l : Link, li) {
//                     if (l.source == i) {
//                     d3.select(this).attr("x1", d.x).attr("y1", d.y);
//                     } 
//                     else if (l.target == i) {
//                         d3.select(this).attr("x2", d.x).attr("y2", d.y);
//                     }
//                 });
//             });

//             var links = svg.selectAll("link")
//             .data(newValue.links)
//             .enter()
//             .append("line")
//             .attr("class", "link")
//             .attr("x1", function(l) {
//                 var sourceNode = newValue.nodes.filter(function(d, i) {
//                 return i == l.source
//                 })[0];
//                 d3.select(this).attr("y1", sourceNode.y);
//                 return sourceNode.x
//             })
//    .attr("x2", function(l) {
//      var targetNode = newValue.nodes.filter(function(d, i) {
//        return i == l.target
//      })[0];
//      d3.select(this).attr("y2", targetNode.y);
//      return targetNode.x
//    })
//    .attr("fill", "none")
//    .attr("stroke", "white");

//     var nodes = svg.selectAll("node")
//     .data(newValue.nodes)
//     .enter()
//     .append("circle")
//     .attr("class", "node")
//     .attr("cx", function(d) {
//         return d.x
//     })
//     .attr("cy", function(d) {
//         return d.y
//     })
//     .attr("r", 15)
//     .attr("fill", function(d, i) {
//         return c10(i.toString());
//     })
//     .call(drag);    

    let button = svg.append("circle").        
        // attr("height", "100").
        // attr("width", "100").
        attr("cx", 100).
        attr("cy", 100).
        attr("r", 100).
        attr("fill", "purple");


    };



}