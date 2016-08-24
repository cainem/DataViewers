import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode';

export class NodeHelper {

    static color(node : CollapsibleIndentedNode) : string {
        return node.children ? "#3182bd" : node.children ? "#c6dbef" : "#fd8d3c";
    }

    static click(node : CollapsibleIndentedNode) : void {

    }

    static drawNodes (selection : d3.Selection<CollapsibleIndentedNode> | d3.selection.Enter<CollapsibleIndentedNode>) : d3.Selection<CollapsibleIndentedNode> {

        let barHeight = 20;
        let barWidth = 100 * 0.8;


        let nodeSelection : d3.Selection<CollapsibleIndentedNode> = selection.append("g")
            // add the class node; this will identify the nodes for selection with the selectAll
            .attr("class", "node")
            // move the g to the correct position on screen
            .attr("transform", (d : CollapsibleIndentedNode) => "translate(" + d.y + "," + d.x + ")");

        // add a circle for the new nodes
        nodeSelection.append("rect")
              .attr("y", -barHeight / 2)
      .attr("height", barHeight)
      .attr("width", barWidth)
      .style("fill", this.color)
        //.on("click", click);
            // .attr("r", (d : CollapsibleIndentedNode) => 15)
            // .style("stroke", (d: CollapsibleIndentedNode) => "red")
            // //.style("fill", (d: CollapsibleIndentedNode) => d.depth)
            // .attr("onclick", (d: CollapsibleIndentedNode) => 
            //     "document.getElementById('localInput').value = " + d.id + "; document.getElementById('eventRaiser').click();")


        // add text for the new nodes
        nodeSelection.append("text")
            .attr("dy", 3.5)
            .attr("dx", 5.5)
            .text(function(d) { return d.name; });




        return nodeSelection;
    }
}