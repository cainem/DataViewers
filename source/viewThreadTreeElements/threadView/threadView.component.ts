import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../rootComponent/model/threadViewDataset';
import {ThreadD3node} from '../threadsView/model/threadD3node';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper'
import {ViewProperties} from '../../propertyExplorer/viewProperties/viewProperties.component';
import * as d3 from 'd3';

/*
    This component will be responsible drawing a linear representation of the nodes within a geneset
*/
@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [ViewProperties],
    styleUrls: []
})
export class ThreadView implements OnChanges { 
    @Input() data : ThreadViewDataset;   
    @Input() selectedIndex : number;
    @Output() selectedThread : ThreadD3node;
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

    public render = (newValue : ThreadD3node) => {     
    }

}