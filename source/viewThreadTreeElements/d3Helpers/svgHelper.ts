import {MarginInterface} from '../d3Helpers/margin.interface';

/*
    This class helps with the setting up of a zoomable svg container.

    Note that the height and the width aren't the "real" on page height and width
    Not sure I really understand but they are sort of the relative co-ordinates of
    the svg space. The svg itself will fill the space that it has.
*/
export class SvgHelper {

    public svg : d3.Selection<any>;
    public height: number;
    public width: number;

    private margin : MarginInterface;

    constructor() {
        this.margin = {top: 20, right: 120, bottom: 20, left: 120};
        this.height = 600 - this.margin.top - this.margin.bottom;
        this.width = 960 - this.margin.right - this.margin.left;
    }

    public zoom : () => void = () => {
            let ev : any = d3.event;
            this.svg.attr("transform", "translate(" + ev.translate + ")scale(" + ev.scale + ")");
    }

    public configureSvgWithZoom : (selection : d3.Selection<any>) => d3.Selection<any> = (selection : d3.Selection<any>) => {

        if (!this.svg) {

            this.svg = selection.append("svg")
                    .attr("style","vertical-align: top")
                    .attr("width", "100%")
                    .attr("height", "80%")     
                    .attr("viewBox", "0 0 " + (this.width + this.margin.left + this.margin.right) + " " + (this.height + this.margin.bottom + this.margin.top) + " ")               
                    .append("g")
                    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")        
        
                    //add zoom control
                    .append("g")
                    .call(d3.behavior.zoom().scaleExtent([0.1, 8]).on("zoom", this.zoom));

                    // why is this different from chaining all of the calls???
                    // it seems to be because call behaves differently
            this.svg.append("g")
                    .append("rect")
                    .attr("style", "fill: pink; pointer-events: all;") 
                    .attr("width", this.width)
                    .attr("height", this.height);
        }

        return this.svg;
    }
}