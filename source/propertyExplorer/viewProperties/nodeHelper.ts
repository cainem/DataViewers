import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode';
import {ViewProperties} from './viewProperties.component'

export class NodeHelper {

    // static color(node : CollapsibleIndentedNode) : string {
    //     return node._children ? "#3182bd" : node.children ? "#c6dbef" : "#fd8d3c";
    // }

    // static click(node : CollapsibleIndentedNode) : void {

    // }

    static drawNodes (
        caller : ViewProperties,
        selection : d3.Selection<CollapsibleIndentedNode> | d3.selection.Enter<CollapsibleIndentedNode>,
        source : CollapsibleIndentedNode,
        barHeight : number,
        barWidth: number) : d3.Selection<CollapsibleIndentedNode> {

            var result =  selection.append("g")
            .attr("class", "node")
            .attr("transform", d => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .style("opacity", 1e-6);

// var tooltip = d3.select("body")
//         .append("div")
//         .style("position", "absolute")
//         .style("z-index", "10")
//         .style("visibility", "hidden")
//         .text("a simple tooltip");


        result.append("rect")
            .attr("y", -barHeight / 2)
            .attr("height", barHeight)
            .attr("width", barWidth)
            .style("fill", caller.color)
            .on("click", caller.click)
    //         .on("mouseover", function(){return tooltip.style("visibility", "visible");})
	// .on("mousemove", function(){return tooltip.style("top", ((<MouseEvent>d3.event).pageY-10)+"px").style("left",((<MouseEvent>event).pageX+10)+"px");})
	// .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

        result.append("text")
            .attr("dy", 3.5)
            .attr("dx", 5.5)
            .text(d => NodeHelper.propertyText(d).slice(0,75))
            .attr("title", d => NodeHelper.propertyText(d))
             // pass events through the text to the rect
             .style("pointer-events", "none")

            return result;
    }

    static propertyText(data : CollapsibleIndentedNode) {
        if (data.value) {
            return (data.name + ' : ' + data.value).slice(0, 50);                    
        } 
        return data.name;
    }
}