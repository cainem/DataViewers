import {GeneSetD3node} from './model/geneSetD3node';
import {ConnectionD3node} from './model/connectionD3node';

export class DrawInputConnections {

    static diagonal = d3.svg.diagonal<ConnectionD3node>()
            .projection((d : ConnectionD3node) => [d.y, d.x]);

    static drawInputConnections(inputConnections : ConnectionD3node[], selectContext : d3.Selection<any>) {

        let force = d3.layout.force()
            .size([50, 50])
            .nodes(inputConnections)

        let connectiong = selectContext.select("g.inputConnections")
            .selectAll("circle.outputConnection")
            .data(inputConnections)
            .enter()
            .append("g")
            .attr("class", "outputConnection")

        //connectiong.append("circle")

        force.on('tick', () => {
            // connectiong.select("circle")
            //     .attr('r', 10)
            //     .attr('cx', function(d) {
            //          return d.x;
            //      })
            //     .attr('cy', function(d) {
            //          return d.y; 
            //      });
        })            

        force.on("end", () => {

            connectiong.append("circle")
                .attr("stroke", "black")
                .attr("fill", "transparent")
                .attr('r', 10)
                .attr('cx', function(d) {
                     return d.x;
                 })
                .attr('cy', function(d) {
                     return d.y; 
                 });

            connectiong
                .append("path")
                .attr("class", "link")
                .style("fill", "none")
                .style("stroke", "#000")
                .style("stroke-width", "2px")
                .attr("d", d =>
                { 
                    var curveData = 
                            {
                                source : { x: d.x, y: d.y},
                                target : { x: 30, y: 310}
                            };

                    var edge = d3.select("svg").append('g');
                    var diagonal = d3.svg.diagonal()
                    // .source(function(d) {return {"x":d[0].y, "y":d[0].x}; })            
                    // .target(function(d) {return {"x":d[1].y, "y":d[1].x}; })
                    .projection(function(d) { return [d.y, d.x]; });

                    return diagonal(curveData);
                });


        });


        force.start();

    }

}