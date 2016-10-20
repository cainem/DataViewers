import {GeneSetD3node} from './model/geneSetD3node';
import {DrawThreadMapNode} from './drawThreadMapNode';
import {ThreadMapNodeD3node} from './model/threadMapNodeD3node';

export class DrawGeneSet {

    /*
        This static function draws a single gene set.
        The y displacement of the thread map nodes is held by the data object
        The x displacement is a viewbox of 1000 units.

        It draws a circle for each node and two boxes either side containing the input and output connections

    */
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

        DrawGeneSet.drawConnectionBoundary(threadMapNodeg, 10, "inputConnections");
        DrawGeneSet.drawArrowedLine(threadMapNodeg, 360, 455);
        DrawGeneSet.drawConnectionBoundary(threadMapNodeg, 620, "outputConnections");
        DrawGeneSet.drawArrowedLine(threadMapNodeg, 620, 525);
        DrawGeneSet.drawNode(threadMapNodeg);

        threadMapNodeg.each(function (tmn) {
            let site = d3.select(this);
            DrawThreadMapNode.drawThreadMapNode(tmn, site);            
        });   
    }

    static drawConnectionBoundary(context : d3.Selection<ThreadMapNodeD3node>, xDisplacement : number, className : string) {
         context.append("g")   
            .attr("class", className)
            .attr("transform", d => "translate(" + xDisplacement + "," + d.displacementOfThreadMapNode() + ")")
            .attr("height", d => d.heightOfThreadMapNode)
            .append("path")
            .attr("stroke", "black")
            .attr("stroke-width", "1")
            .attr("fill", "transparent")
            // the height of the "connection box" is hardcoded to be 50; the width 350
            .attr("d", "M 0 0 L 350 0 L 350 50 L 0 50 L 0 0")
    }

    static drawNode(context : d3.Selection<ThreadMapNodeD3node>) {
        context.append("circle")
            .attr("cy", d => d.displacementOfThreadMapNode() + 25)
            .attr("cx", 490)
            .attr("r", 25)
            .attr("fill", "purple");
    }

    static drawArrowedLine(context : d3.Selection<ThreadMapNodeD3node>, X1: number, X2: number) {
        context.append("line")
            .attr("x1", X1)
            .attr("y1", d => d.displacementOfThreadMapNode() + 25)
            .attr("x2", X2)
            .attr("y2", d => d.displacementOfThreadMapNode() + 25)
            .attr("marker-end", "url(" + location.href + "#Triangle)")
            .style("stroke", "black")
            .style("stroke-width", "2")
    }

}