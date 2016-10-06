import {GeneSetD3node} from './model/geneSetD3node';
import {ConnectionD3node} from './model/connectionD3node';

export class DrawInputConnections {

    static diagonal = d3.svg.diagonal<ConnectionD3node>()
            .projection((d : ConnectionD3node) => [d.y, d.x]);

    static drawInputConnections(inputConnections : ConnectionD3node[], selectContext : d3.Selection<any>) {

        let radius = 10;
        let boundingHeight = 50;
        let boundingWidth = 200;

        let force = d3.layout.force<ConnectionD3node>()
            .size([boundingWidth, boundingHeight])
            .nodes(inputConnections)
            .charge(-30)
            .gravity(0.1)

        let connectiong = selectContext.select("g.inputConnections")
            .selectAll("circle.outputConnection")
            .data(inputConnections)
            .enter()
            .append("g")
            .attr("class", "outputConnection");

        connectiong.append("circle");

        force.on('tick', () => {
            connectiong.select("circle")
                .attr("fill", "green")
                .attr('r', radius)
                .attr('cx', function(d) {
                        return d.x = Math.max(radius, Math.min(boundingWidth - radius, d.x));
                 })
                .attr('cy', function(d) {
                        return d.y = Math.max(radius, Math.min(boundingHeight - radius, d.y));; 
                 });
        })            

        force.start();

    }

}