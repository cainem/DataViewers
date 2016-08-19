import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode';

export class NodeHelper {
    static drawNodes (selection : d3.Selection<CollapsibleIndentedNode> | d3.selection.Enter<CollapsibleIndentedNode>) : d3.Selection<CollapsibleIndentedNode> {
        let nodeSelection : d3.Selection<CollapsibleIndentedNode> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : CollapsibleIndentedNode) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("circle")
            .attr("r", (d : CollapsibleIndentedNode) => 15)
            .style("stroke", (d: CollapsibleIndentedNode) => "red")
            //.style("fill", (d: CollapsibleIndentedNode) => d.depth)
            .attr("onclick", (d: CollapsibleIndentedNode) => 
                "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")            

        // add text for the new nodes
        nodeSelection.append("text")
            .attr("x", (d : CollapsibleIndentedNode) => -20 )
            .attr("dy", ".35em")
            .attr("text-anchor", (d : CollapsibleIndentedNode) => d.children ? "end" : "start")
            .text((d : CollapsibleIndentedNode) => d.name)
            .style("fill-opacity", 1);        

        return nodeSelection;
    }
}