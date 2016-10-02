import {GeneSetD3node} from './model/geneSetD3node';
import {DrawThreadMapNode} from './drawThreadMapNode'

export class DrawGeneSet {

    static drawGeneSet(geneSetD3node : GeneSetD3node, selectContext : d3.Selection<any>) {

        geneSetD3node.threadMapNodeD3nodes.forEach((threadMapNode, i) =>
        {
            threadMapNode.id = i;
        });

        let heightOfGeneSet = geneSetD3node.threadMapNodeD3nodes.length *
            geneSetD3node.heightOfGeneSet(DrawThreadMapNode.threadMapNodeHeight, DrawThreadMapNode.threadMapNodeSpacingHeight)

        let threadMapNodeg = selectContext
            .selectAll("g.threadMapNode")
            .data(geneSetD3node.threadMapNodeD3nodes)
            .enter()
            .append("g")
            .attr("class", "threadMapNode");

         threadMapNodeg.append("g")   
            .attr("class", "inputConnections")
            .attr("transform", d => "translate(10," + (d.id * (DrawThreadMapNode.threadMapNodeHeight + DrawThreadMapNode.threadMapNodeSpacingHeight)) + ")")
            .attr("width", 50)
            .attr("height", DrawThreadMapNode.threadMapNodeHeight)
            .attr("fill", "green")
            .append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("height", 10)
            .attr("width", 10);

         threadMapNodeg.append("g")   
            .attr("class", "outputConnections")
            .attr("transform", d => "translate(390," + (d.id * (DrawThreadMapNode.threadMapNodeHeight + DrawThreadMapNode.threadMapNodeSpacingHeight)) + ")")
            .attr("width", 50)
            .attr("height", DrawThreadMapNode.threadMapNodeHeight)
            .attr("fill", "orange")
            .append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("height", 10)
            .attr("width", 10);

        threadMapNodeg.append("rect")
            .attr("y", d => d.id * (DrawThreadMapNode.threadMapNodeHeight + DrawThreadMapNode.threadMapNodeSpacingHeight))
            .attr("x", 200)
            .attr("width", 50)
            .attr("height", DrawThreadMapNode.threadMapNodeHeight)
            .attr("fill", "purple");

        threadMapNodeg.each(function (tmn) {

            let site = d3.select(this);

            DrawThreadMapNode.drawThreadMapNode(tmn, site);            

        });   


    }
}