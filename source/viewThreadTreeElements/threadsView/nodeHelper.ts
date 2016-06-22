import {IThread} from '../data/IThread';

export class NodeHelper {
    static drawNodes (selection : d3.Selection<IThread> | d3.selection.Enter<IThread>) : d3.Selection<IThread> {
        let nodeSelection : d3.Selection<IThread> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : IThread) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("circle")
            .attr("r", (d : IThread) => 15)
            .style("stroke", (d: IThread) => "red")
            .style("fill", (d: IThread) => d.depth)
            .attr("onclick", (d: IThread) => 
                "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")            

        // add text for the new nodes
        nodeSelection.append("text")
            .attr("x", (d : IThread) => -20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : IThread) => d.childThreads ? "end" : "start")
            .text((d : IThread) => d.debugText)
            .style("fill-opacity", 1);        

        return nodeSelection;
    }
}