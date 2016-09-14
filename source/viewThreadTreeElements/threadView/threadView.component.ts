import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../model/threadViewDataset';
import {ThreadD3nodeInterface} from '../model/threadD3node.interface';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper'
import {ViewProperties} from '../../propertyExplorer/viewProperties/viewProperties.component';
import * as d3 from 'd3';

@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [ViewProperties],
    styleUrls: []
})
export class ThreadView implements OnChanges { 
    @Input() data : ThreadViewDataset;   
    @Input() selectedIndex : number;
    @Output() selectedThread : ThreadD3nodeInterface;
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
                this.render(this.selectedThread);
            }

        }
    } 

    public render = (newValue : ThreadD3nodeInterface) => {     
    }

}