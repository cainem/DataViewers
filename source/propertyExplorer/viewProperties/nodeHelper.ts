import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode';
import {ViewProperties} from './viewProperties.component'

export class NodeHelper {

    static add(
        caller: ViewProperties,
        selection: d3.selection.Enter<CollapsibleIndentedNode>,
        source: CollapsibleIndentedNode,
        barHeight: number,
        barWidth: number): d3.Selection<CollapsibleIndentedNode> {

        let returnedSelection = selection.append("g")
            .attr("class", "node")
            .attr("transform", d => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .style("opacity", 1e-6)  // start off invisible, transistion to visible
            .append("foreignObject")
            .attr("y", -barHeight / 2)
            .attr("height", barHeight)
            .attr("width", barWidth)

        returnedSelection = returnedSelection.append("xhtml:div")
            .each(function (e) {

                var header = d3.select(this);

                if (e.children || e._children) {
                    header.append("div")
                        .style("background-color", caller.color)
                        .style("padding", "2")
                        //.style("height", 30)
                        .style("border-width", 1)
                        .style("border-style", "ridge")
                        .style("font-weight", "bold")
                        .attr("title", d => NodeHelper.propertyText(d))
                        .attr("class", "inner")
                        .text(d => NodeHelper.propertyText(d))
                        .on("click", caller.click)
                        //.style("pointer-events", "none");
                }
                else {

                    let inner = header.append("div")

                    inner.append("span")
                        .style("font-weight", "bold")
                        .style("background-color", "#c6dbef")
                        .text(d => d.name);
                        
                    inner.append("input")
                        .attr("type", "input")
                        .style("background-color", d => caller.color(d))
                        //.style("height", 30)
                        .style("width", 600)
                        .attr("title", d => d.name)
                        .attr("value", d => d.value);
                }

            });

        return returnedSelection;
    }

    static propertyText(data: CollapsibleIndentedNode) {
        if (data.value) {
            return (data.name + ' : ' + data.value);
        }
        return data.name;
    }
}