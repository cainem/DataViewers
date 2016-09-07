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
                        .style("padding", "2 20 2 2")
                        .style("display", "inline-block")
                        .style("white-space", "nowrap")
                        .style("overflow", "hidden")
                        .style("max-width", barWidth)
                        .style("border-width", 1)
                        .style("border-style", "ridge")
                        .style("font-weight", "bold")
                        .attr("title", d => NodeHelper.propertyText(d))
                        .attr("class", "inner")
                        .text(d => NodeHelper.propertyText(d))
                        .on("click", caller.click)
                }
                else {
                    let tableRow = header.append("table").
                        style("width", barWidth).
                        style("background-color", "#fd8d3c").
                        append("tbody").
                        append("tr");

                    tableRow.append("th")
                        .style("width", "0%")
                        .style("white-space", "nowrap")
                            .append("div")
                            .style("display", "inline-block")
                            .style("overflow", "hidden")
                            .style("max-width", barWidth * 0.8)
                            .style("text-align", "left")
                            .style("font-weight", "bold")
                            .style("padding", "2 10 2 2")
                            .text(d => d.name);

                    tableRow.append("td")
                        .style("width", "100%")
                            .append("input")
                            .attr("type", "input")
                            .style("background-color", "#fe9e4d") //"#fd8d3c"
                            .style("padding","0 0 0 10")
                            .style("width", "100%")
                            .style("height", "90%")
                            .style("border", "none")
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