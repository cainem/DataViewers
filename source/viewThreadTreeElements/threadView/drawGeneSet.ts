import {GeneSetD3node} from './model/geneSetD3node';

export class DrawGeneSet {

    static drawGeneSet(geneSetD3node : GeneSetD3node, selectContext : d3.Selection<any>) {

        geneSetD3node.threadMapNodeD3nodes.forEach((threadMapNode, i) =>
        {
            threadMapNode.id = i;
        });

        let threadMapNodeg = selectContext
            .selectAll("g.threadMapNode")
            .data(geneSetD3node.threadMapNodeD3nodes)
            .enter()
            .append("g")
            .attr("class", "threadMapNode");

         threadMapNodeg.append("rect")   
            .attr("y", d => d.id * 100)
            .attr("x", 50)
            .attr("width", 500)
            .attr("height", 90)
            .attr("fill", "purple")

    }
}