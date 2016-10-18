import {ThreadMapNodeD3node} from './model/threadMapNodeD3node';
import {DrawConnections} from './drawConnections';

export class DrawThreadMapNode {
    
    /*
        For each thread map node there is the need to draw the input and output connections.
        Each connection needs to be assigned a key
    */
    static drawThreadMapNode(threadMapNodeD3node : ThreadMapNodeD3node, selectContext : d3.Selection<any>) {


        threadMapNodeD3node.inputConnections.forEach((c, i) => {
            c.id = i;
        })

        threadMapNodeD3node.outputConnections.forEach((c,i) => {
            c.id = i;
        })

        DrawConnections.drawConnections(threadMapNodeD3node.inputConnections, selectContext, "inputConnections");
        DrawConnections.drawConnections(threadMapNodeD3node.outputConnections, selectContext, "outputConnections");
    }
}