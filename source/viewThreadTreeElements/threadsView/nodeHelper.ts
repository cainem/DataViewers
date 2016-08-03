import {threadD3nodeInterface} from '../data/threadD3node.interface';

export class NodeHelper {
    static drawNodes (selection : d3.Selection<threadD3nodeInterface> | d3.selection.Enter<threadD3nodeInterface>) : d3.Selection<threadD3nodeInterface> {
        let nodeSelection : d3.Selection<threadD3nodeInterface> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : threadD3nodeInterface) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("circle")
            .attr("r", (d : threadD3nodeInterface) => 15)
            .style("stroke", (d: threadD3nodeInterface) => "red")
            .style("fill", (d: threadD3nodeInterface) => d.depth)
            .attr("onclick", (d: threadD3nodeInterface) => 
                "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")            

        // add text for the new nodes
        nodeSelection.append("text")
            .attr("x", (d : threadD3nodeInterface) => -20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : threadD3nodeInterface) => d.childThreads ? "end" : "start")
            .text((d : threadD3nodeInterface) => d.debugText)
            .style("fill-opacity", 1);        

        return nodeSelection;
    }
}