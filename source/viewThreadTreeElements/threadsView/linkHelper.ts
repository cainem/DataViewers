import {ThreadD3node} from '../services/threadD3node';

/*
    This class helps build the links for the threadsView component
*/
export class LinkHelper {

    // reverse x and y to give an "across the page" look
    static diagonal = d3.svg.diagonal<ThreadD3node>()
            .projection((d : ThreadD3node) => [d.y, d.x]);

    static drawLinks (selection : d3.Selection<d3.layout.tree.Link<ThreadD3node>> | d3.selection.Enter<d3.layout.tree.Link<ThreadD3node>>) :
        d3.Selection<d3.layout.tree.Link<ThreadD3node>> {

        // Enter the links, the links need to be drawn on first, the z-order is determined by the drawn order
        let linkSelection = selection.append("path")
            .attr("class", "link")
            .style("fill", "none").style("stroke", "#ccc").style("stroke-width", "5.5px")
            //.style("stroke", (d : d3.layout.tree.Link<ThreadD3node>) => { return d.target.depth; })
            .attr("d", this.diagonal)
            //.attr("fill", "black");

        return linkSelection;
    }     
}
