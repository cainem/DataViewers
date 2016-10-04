import {GeneSetD3node} from './model/geneSetD3node';
import {DrawThreadMapNode} from './drawThreadMapNode'

export class DrawGeneSet {

    static drawGeneSet(geneSetD3node : GeneSetD3node, selectContext : d3.Selection<any>) {

        geneSetD3node.threadMapNodeD3nodes.forEach((threadMapNode, i) =>
        {
            threadMapNode.id = i;
            threadMapNode.index = i;
        });

        let threadMapNodeg = selectContext
            .selectAll("g.threadMapNode")
            .data(geneSetD3node.threadMapNodeD3nodes)
            .enter()
            .append("g")
            .attr("class", "threadMapNode");

         threadMapNodeg.append("g")   
            .attr("class", "inputConnections")
            .attr("transform", d => {
                 return "translate(10," + d.displacementOfThreadMapNode() + ")"
            })
            .attr("width", 50)
            .attr("height", d => d.heightOfThreadMapNode)
            .attr("fill", "green");

         threadMapNodeg.append("g")   
            .attr("class", "outputConnections")
            .attr("transform", d => "translate(610," + d.displacementOfThreadMapNode() + ")")
            .attr("width", 50)
            .attr("height", d => d.heightOfThreadMapNode)
            .attr("fill", "orange");

        threadMapNodeg.append("rect")
            .attr("y", d => d.displacementOfThreadMapNode())
            .attr("x", 310)
            .attr("width", 50)
            .attr("height", d => d.heightOfThreadMapNode)
            .attr("fill", "purple");

        threadMapNodeg.each(function (tmn) {

            let site = d3.select(this);

            DrawThreadMapNode.drawThreadMapNode(tmn, site);            

        });   


    }
}