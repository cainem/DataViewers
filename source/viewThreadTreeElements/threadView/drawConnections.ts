import {GeneSetD3node} from './model/geneSetD3node';
import {ConnectionD3node} from './model/connectionD3node';
import {SelectedAssetTracker} from '../services/assetTracker/selectedAssetTracker';
import {SelectedAsset} from '../services/assetTracker/selectedAsset'

export class DrawConnections {

    static diagonal = d3.svg.diagonal<ConnectionD3node>()
            .projection((d : ConnectionD3node) => [d.y, d.x]);

    static drawConnections(selectedAssetTracker : SelectedAssetTracker,
        inputConnections : ConnectionD3node[],
        selectContext : d3.Selection<any>,
        className : string) {

        let radius = 10;
        let boundingHeight = 50;
        // the bounding height is defined further up the stack; could be passed down the calling chain
        let boundingWidth = 350;

        let force = d3.layout.force<ConnectionD3node>()
            .size([boundingWidth, boundingHeight])
            .nodes(inputConnections)
            .charge(-50) // push the circles apart
            .gravity(0.1) // but group round the middle, with no gravity they end up at the edge of the bounding box

        let connectiong = selectContext.select("g." + className)
            .selectAll("circle." + className)
            .data(inputConnections)
            .enter()
            .append("g")
            .attr("class", className)
            .attr("fill", "green");

        connectiong.append("circle")
            .attr("fill", "green")
            .on("click", function(d) {
                // unselect all
                // inputConnections.forEach((c, i) => {
                //     c.isSelected = false;
                // });

                //d.isSelected = true;
                //d3.select(this).attr("fill", "red");
                //connectiong.select("circle").attr("fill", d => d.isSelected ? "red" : "green");
                selectedAssetTracker.currentlySelectedAsset = new SelectedAsset(d3.select(this), d);
            });

        force.on('tick', () => {
            connectiong.select("circle")
                .attr("class", "circle." + className)
                //.attr("fill", "green")
                .attr('r', radius)
                .attr('cx', function(d) {
                        // this function (and the one below) keeps the connections inside the bounding box
                        return d.x = Math.max(radius + 5, Math.min(boundingWidth - radius - 5, d.x));
                 })
                .attr('cy', function(d) {
                        // this function (and the one above) keeps the connections inside the bounding box
                        return d.y = Math.max(radius + 5, Math.min(boundingHeight - radius - 5, d.y));; 
                 });
        })            

        force.start();
    }

}