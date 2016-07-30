import {IThreadD3node} from '../data/IThreadD3node';

export class NodeHelper {
    static drawNodes (selection : d3.Selection<IThreadD3node> | d3.selection.Enter<IThreadD3node>) : d3.Selection<IThreadD3node> {
        let nodeSelection : d3.Selection<IThreadD3node> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : IThreadD3node) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("circle")
            .attr("r", (d : IThreadD3node) => 15)
            .style("stroke", (d: IThreadD3node) => "red")
            .style("fill", (d: IThreadD3node) => d.depth)
            .attr("onclick", (d: IThreadD3node) => 
                "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")            

        // add text for the new nodes
        nodeSelection.append("text")
            .attr("x", (d : IThreadD3node) => -20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : IThreadD3node) => d.childThreads ? "end" : "start")
            .text((d : IThreadD3node) => d.debugText)
            .style("fill-opacity", 1);        

        return nodeSelection;
    }
}