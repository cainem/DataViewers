import {GeneSetD3node} from './model/geneSetD3node';
import {ConnectionD3node} from './model/connectionD3node';
import {SelectedAssetTrackerService} from '../services/assetTracker/selectedAssetTracker.service';
import {SelectedAsset} from '../services/assetTracker/selectedAsset'

export class DrawConnections {

    static diagonal = d3.svg.diagonal<ConnectionD3node>()
            .projection((d : ConnectionD3node) => [d.y, d.x]);

    static drawConnections(selectedAssetTracker : SelectedAssetTrackerService,
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
            //.attr("fill", "green")
            .on("click", function(d) {
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