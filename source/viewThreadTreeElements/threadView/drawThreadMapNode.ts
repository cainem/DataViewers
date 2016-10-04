import {ThreadMapNodeD3node} from './model/threadMapNodeD3node';
import {DrawInputConnections} from './drawInputConnections';

export class DrawThreadMapNode {
    
    static drawThreadMapNode(threadMapNodeD3node : ThreadMapNodeD3node, selectContext : d3.Selection<any>) {

        threadMapNodeD3node.inputConnections.forEach((c, i) => {
            c.id = i;
        })

        threadMapNodeD3node.outputConnections.forEach((c,i) => {
            c.id = i;
        })

        // TODO - draw the detail of the thread map node

        DrawInputConnections.drawInputConnections(threadMapNodeD3node.inputConnections, selectContext)
    }
}