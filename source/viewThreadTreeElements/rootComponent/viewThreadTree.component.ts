import { Component, OnInit, ViewEncapsulation, Inject, provide, Input } from '@angular/core';
import { ThreadViewDataset  } from './model/threadViewDataset';
import { ThreadsView } from '../../viewThreadTreeElements/threadsView/threadsView.component';
import { ThreadView } from '../../viewThreadTreeElements/threadView/threadView.component'
import * as d3 from 'd3';
import {JsInputComponent} from '../../jsInput/jsInput.component';
import {JsonTransformationToken, JsonTransformationInterface} from '../../service/JsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {TransformJsonToThreadViewDataset} from './model/transformJsonToThreadViewDataset';
import {MapCreator} from './model/mapCreator';
import {TransformToThreadD3node} from './model/TransformToThreadD3node';
import {ThreadViewDatasetCreator, ThreadViewDatasetCreatorToken} from './model/threadviewDatasetCreator';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';

@Component({
    templateUrl: './app/viewThreadTreeElements/rootComponent/viewThreadTree.html',
    directives: [ JsInputComponent, ThreadsView, ThreadView ],
    styleUrls: ['./app/viewThreadTreeElements/rootComponent/viewThreadTree.css'],
    providers: [ 
        provide(JsonTransformationToken, { useClass: TransformJsonToThreadViewDataset }),
        provide ("ThreadViewDatasetCreatorToken", { useClass : ThreadViewDatasetCreator }),
        provide("TransformToThreadD3node", { useClass : TransformToThreadD3node}),
        KeyGenerator,
        MapCreator   
    ]
})
export class ViewThreadTree {
    
    @Input() data : ThreadViewDataset;
    public selectedIndex : number;

    public onJsonChanged : (value : any) => void = (value: any) => {
        this.data = this.transformationService.transformJson(value);
    }

    constructor(@Inject(JsonTransformationToken) private transformationService :  JsonTransformationInterface) {
        this.transformationService = transformationService;        
    }         

    public selectionChanged(event : number) {
        this.selectedIndex = event;
    }
      
}
