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
            .attr("height", d => d.heightOfThreadMapNode)
            .append("path")
            .attr("stroke", "black")
            .attr("stroke-width", "1")
            .attr("fill", "transparent")
            .attr("d", "M 0 0 L 200 0 L 200 50 L 0 50 L 0 0")

         threadMapNodeg.append("g")   
            .attr("class", "outputConnections")
            .attr("transform", d => "translate(460," + d.displacementOfThreadMapNode() + ")")
            .attr("height", d => d.heightOfThreadMapNode)
            .append("path")
            .attr("stroke", "black")
            .attr("stroke-width", "1")
            .attr("fill", "transparent")
            .attr("d", "M 0 0 L 200 0 L 200 50 L 0 50 L 0 0")

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