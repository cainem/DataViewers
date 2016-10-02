import {GeneSetD3node} from './model/geneSetD3node'
import {DrawGeneSet} from './drawGeneSet';
import {DrawThreadMapNode} from './drawThreadMapNode';

export class DrawGeneSetNodes {

    static geneSetSpacing : number = 10;

    static drawGeneSets(geneSetNodes : GeneSetD3node[]) {

        geneSetNodes.forEach((node, i) => {
            node.id = i;
            node.sequence = i;
            node.x = (node.heightOfGeneSet(DrawThreadMapNode.threadMapNodeHeight,
                DrawThreadMapNode.threadMapNodeSpacingHeight) + DrawGeneSetNodes.geneSetSpacing) * i;
        })

        let geneSetg = d3.select("svg.threadViewContainer")
            .selectAll("g.geneSet")
            .data(geneSetNodes)
            .enter()
            .append("g")
            .attr("class", "geneSet")
            .attr("transform", (d : GeneSetD3node) => "translate(0," + d.x + ")");

        geneSetg.append("rect")
            .attr("x", 10)
            .attr("y", 0)
            .attr("width", 800)
            .attr("height", d => d.heightOfGeneSet(DrawThreadMapNode.threadMapNodeHeight, DrawThreadMapNode.threadMapNodeSpacingHeight))
            .attr("fill", "pink")

       geneSetg.append("text")
            .attr("x", 10)
            .attr("y", 10)
            .html(n =>
            { 
                return n.id.toString();
            });


        geneSetg.each(function(d : GeneSetD3node) {
            let site = d3.select(this);

            DrawGeneSet.drawGeneSet(d, site);

        });
    }

}