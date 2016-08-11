import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../model/threadViewDataset';
import {ThreadD3nodeInterface} from '../model/threadD3node.interface';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper'
import * as d3 from 'd3';

@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [],
    styleUrls: []
})
export class ThreadTableView implements OnChanges { 
    @Input() selectedThread : ThreadD3nodeInterface;
     
    constructor() {
    }

    ngOnChanges(data : {[key: string]: SimpleChange;}) {
    } 
}