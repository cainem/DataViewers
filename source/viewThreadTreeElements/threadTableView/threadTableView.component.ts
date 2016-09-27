import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../rootComponent/model/threadViewDataset';
import {ThreadD3node} from '../threadsView/model/threadD3node';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper'
import * as d3 from 'd3';

@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [],
    styleUrls: []
})
export class ThreadTableView implements OnChanges { 
    @Input() selectedThread : ThreadD3node;
     
    constructor() {
    }

    ngOnChanges(data : {[key: string]: SimpleChange;}) {
    } 
}