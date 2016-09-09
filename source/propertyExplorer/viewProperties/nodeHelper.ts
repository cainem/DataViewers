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
            .append("foreignObject")
            .attr("y", -barHeight / 2)
            .attr("height", barHeight)
            .attr("width", barWidth)

        returnedSelection = returnedSelection.append("xhtml:div")
            .each(function (e) {

                var header : d3.Selection<CollapsibleIndentedNode> = d3.select(this);

                if (e.children || e.collapsedChildren) {
                    header.append("div")
                        .style("background-color", caller.color)
                        .style("padding", "0 10 0 4")
                        .style("display", "inline-block")
                        .style("white-space", "nowrap")
                        .style("overflow", "hidden")
                        .style("max-width", barWidth)
                        .style("border-width", 1)
                        .style("border-style", "ridge")
                        .style("font-weight", "bold")
                        .attr("title", d => NodeHelper.ancestoryText(d))
                        .attr("class", "inner")
                        .text(d => NodeHelper.propertyText(d))
                        .on("click", caller.click)
                }
                else {
                    let tableRow = header.append("table").
                        style("width", barWidth).
                        append("tbody").
                        append("tr");

                    tableRow.append("th")
                        .style("width", "0%")
                        .style("white-space", "nowrap")
                            .append("div")
                                .style("background-color", ViewProperties.ValueLabelColor)
                                .style("display", "inline-block")
                                .style("overflow", "hidden")
                                .style("max-width", barWidth * 0.8)
                                .style("text-align", "left")
                                .style("font-weight", "bold")
                                .style("font-size", "14")
                                .style("padding", "0 10 0 4")
                                .attr("title", d => NodeHelper.ancestoryText(d))
                                .text(d => d.name);

                    tableRow.append("td")
                        .style("width", "100%")
                            .append("input")
                            .attr("type", "input")
                            .style("background-color", ViewProperties.ValueColor) 
                            .style("padding","0 0 0 10")
                            .style("width", "100%")
                            .style("font-size", "14")
                            .style("border", "none")
                            .attr("title", d => NodeHelper.ancestoryText(d))
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

    static ancestoryText(data : CollapsibleIndentedNode) {

        if (data.parent === null) {
            return data.name;
        }

        let recurse : (d : CollapsibleIndentedNode, building : string) => string = (d : CollapsibleIndentedNode, building : string) => {           
            building = d.name + '->' + building;
            if (d.parent !== null) {
                return recurse(d.parent, building)
            }
            return building;
        }

        let building = data.name;
        let result = recurse(data.parent, building);
        return result;
    }
}