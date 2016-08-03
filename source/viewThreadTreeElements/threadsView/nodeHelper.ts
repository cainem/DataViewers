import {ThreadD3nodeInterface} from '../data/threadD3node.interface';

export class NodeHelper {
    static drawNodes (selection : d3.Selection<ThreadD3nodeInterface> | d3.selection.Enter<ThreadD3nodeInterface>) : d3.Selection<ThreadD3nodeInterface> {
        let nodeSelection : d3.Selection<ThreadD3nodeInterface> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : ThreadD3nodeInterface) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("circle")
            .attr("r", (d : ThreadD3nodeInterface) => 15)
            .style("stroke", (d: ThreadD3nodeInterface) => "red")
            .style("fill", (d: ThreadD3nodeInterface) => d.depth)
            .attr("onclick", (d: ThreadD3nodeInterface) => 
                "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")            

        // add text for the new nodes
        nodeSelection.append("text")
            .attr("x", (d : ThreadD3nodeInterface) => -20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : ThreadD3nodeInterface) => d.childThreads ? "end" : "start")
            .text((d : ThreadD3nodeInterface) => d.debugText)
            .style("fill-opacity", 1);        

        return nodeSelection;
    }
}