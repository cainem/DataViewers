import * as d3 from 'd3';

export class SvgAssets {

    static addArrowHead(svgClassName: string) {
        let svg = d3.selectAll("svg." + svgClassName);
        d3.text("built/viewThreadTreeElements/threadView/arrow.html", d => {
            svg.insert('defs', ":first-child").html(d)
        });                    
    }
}