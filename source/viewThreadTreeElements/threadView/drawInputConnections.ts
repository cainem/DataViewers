import {GeneSetD3node} from './model/geneSetD3node';
import {ConnectionD3node} from './model/connectionD3node';

export class DrawInputConnections {

    static drawInputConnections(inputConnections : ConnectionD3node[], selectContext : d3.Selection<any>) {

        let force = d3.layout.force()
            .size([50, 50])
            .nodes(inputConnections)

        let node = selectContext.select("g.outputConnections")
            .selectAll("circle.outputConnection")
            .data(inputConnections)
            .enter()
            .append("circle")
            .attr("class", "outputConnection")

        force.on('end', () => {
            node.attr('r', 10)
                .attr('cx', function(d) {
                     return d.x;
                 })
                .attr('cy', function(d) {
                     return d.y; 
                 });
        })            

        force.start();

    }

}