import {IThread} from '../data/IThread';

export class LinkHelper {

    // reverse x and y to give an "across the page" look
    static diagonal = d3.svg.diagonal<IThread>()
            .projection((d : IThread) => [d.y, d.x]);

    static drawLinks (selection : d3.Selection<d3.layout.tree.Link<IThread>> | d3.selection.Enter<d3.layout.tree.Link<IThread>>) :
        d3.Selection<d3.layout.tree.Link<IThread>> {

        // Enter the links, the links need to be drawn on first, the z-order is determined by the drawn order
        let linkSelection = selection.append("path")
            .attr("class", "link")
            .style("stroke", (d : d3.layout.tree.Link<IThread>) => { return d.target.depth; })
            .attr("d", this.diagonal)
            .attr("fill", "black");

        return linkSelection;
    }     
}
