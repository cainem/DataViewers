import {ThreadMapNodeD3node} from '../services/threadMapNodeD3node';
import {DrawConnections} from './drawConnections';
import {SelectedAssetTrackerService} from '../services/assetTracker/selectedAssetTracker.service';


export class DrawThreadMapNode {
    
    /*
        For each thread map node there is the need to draw the input and output connections.
        Each connection needs to be assigned a key
    */
    static drawThreadMapNode(selectedAssetTracker : SelectedAssetTrackerService,
        threadMapNodeD3node : ThreadMapNodeD3node,
        selectContext : d3.Selection<any>) {


        DrawConnections.drawConnections(selectedAssetTracker, threadMapNodeD3node.inputConnections, selectContext, "inputConnections");
        DrawConnections.drawConnections(selectedAssetTracker, threadMapNodeD3node.outputConnections, selectContext, "outputConnections");
    }
}