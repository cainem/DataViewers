import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../data/threadViewDataset';
import {ThreadD3node} from '../data/threadD3node';
import {SvgHelper} from '../d3Helpers/svgHelper'
import * as d3 from 'd3';

@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [],
    styleUrls: []
})
export class ThreadView implements OnChanges { 
    @Input() data : ThreadViewDataset;   
    @Input() selectedIndex : number;
    private selectedThread : ThreadD3node;
    private svgHelper : SvgHelper; 
     
    constructor() {
        this.svgHelper = new SvgHelper();
    }

    ngOnChanges(data : {[key: string]: SimpleChange;}) {

        if (this.selectedIndex) {
            let div = d3.select("#d3ThreadContainer");

            //find the thread that has been selected
            this.selectedThread = this.data.findThreadById(this.selectedIndex);

            //draw the selected threads nodes and connections
            if (div && this.selectedThread) {
                this.svgHelper.configureSvgWithZoom(div);
                this.render(this.data);
            }

        }
    } 

    public render = (newValue : ThreadViewDataset) => {


        
    }


}