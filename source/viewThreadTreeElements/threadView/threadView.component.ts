import {Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IThreadViewDataset} from '../data/IThreadViewDataset';
import {IThread} from '../data/IThread';
import * as d3 from 'd3';

@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [],
    styleUrls: []
})
export class ThreadView implements OnChanges { 
    ngOnChanges(data : any) {

    } 
}