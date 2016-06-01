import {Component, OnChanges, ElementRef, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
    templateUrl: './app/viewMachine/viewMachine.html',
    directives: [],
    styleUrls: ['./app/viewMachine/viewMachine.css']
})
export class ViewMachine implements OnInit, OnChanges {
    public message = "hello";
    public data: Array<number> = [10, 20, 30, 40, 50]
    public divs: any;
    public width : number = 500;
    public height: number = 500;
    public el : any;
    
    public constructor(elementRef : ElementRef) {
        this.el    = elementRef.nativeElement;
    }
        
    ngOnInit () {                
        var graph:any = d3.select('#d3Container');

        this.divs = graph.
        // append('div').
        // attr({
        //     'class': 'chart'
        // }).
        // style({
        //     'width':  this.width  + 'px',
        //     'height': this.height + 'px',
        // }).
        selectAll('div');             
        this.render(this.data);   
    }
    
    ngOnChanges (changes) {
        this.render(this.data);
    };
    
    public render = (newValue) => {        
        if (!newValue) return;
        // this.divs.data(newValue).enter().append('div')
        this.divs.data(this.data).enter().append('div')
        .transition().ease('elastic')
        .style('width', d => d + '%')
        .text(d => d + '%');
    };

}
