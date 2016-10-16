import {ThreadD3node} from './model/threadD3node';

export class NodeHelper {
    static drawNodes (selection : d3.Selection<ThreadD3node> | d3.selection.Enter<ThreadD3node>) : d3.Selection<ThreadD3node> {
        let nodeSelection : d3.Selection<ThreadD3node> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "threadNode")
            // move the g to the correct position on screen
            .attr("transform", (d : ThreadD3node) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("circle")
            .attr("class", "threadNode")
            .attr("r", (d : ThreadD3node) => 15)
            .style("stroke", (d: ThreadD3node) => "green")
            .style("stroke-width", "5px")
            .attr("onclick", (d: ThreadD3node) => 
                "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")            

        // add text for the new nodes
        nodeSelection.append("text")
            .attr("x", (d : ThreadD3node) => -20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : ThreadD3node) => d.childThreads ? "end" : "start")
            .text((d : ThreadD3node) => d.threadMapThread.key.shortForm)
            .style("fill-opacity", 1);        

        return nodeSelection;
    }
}