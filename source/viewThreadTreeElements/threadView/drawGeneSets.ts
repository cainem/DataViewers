import {GeneSetD3node} from './model/geneSetD3node'
import {DrawGeneSet} from './drawGeneSet';
import {DrawThreadMapNode} from './drawThreadMapNode';
import {SelectedAssetTrackerService} from '../services/assetTracker/selectedAssetTracker.service';

export class DrawGeneSetNodes {

    static drawGeneSets(selectedAssetTracker : SelectedAssetTrackerService,
        geneSetNodes : GeneSetD3node[]) {

        let edge = 10;
        let displacementRunningTotal = 10;
        geneSetNodes.forEach((node, i) => {
            node.id = i;
            node.index = i;
            displacementRunningTotal += node.spacingOfGeneSets;
            node.y = displacementRunningTotal;
            displacementRunningTotal += node.heightOfGeneSet();
        })

        let geneSetg = d3.select("svg.threadViewContainer")
            .selectAll("g.geneSet")
            .data(geneSetNodes)
            .enter()
            .append("g")
            .attr("class", "geneSet")
            .attr("transform", (d : GeneSetD3node) => "translate(" + d.spacingOfGeneSets + "," + d.y + ")");

        geneSetg.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 1000 - (2 * edge))
            .attr("height", d => d.heightOfGeneSet())
            .attr("fill", "palegoldenrod")

       geneSetg.append("text")
            .attr("x", 10)
            .attr("y", 10)
            .html(n =>
            { 
                return n.id.toString();
            });

        geneSetg.each(function(d : GeneSetD3node) {
            let site = d3.select(this);

            DrawGeneSet.drawGeneSet(selectedAssetTracker, d, site);
        });
    }

}