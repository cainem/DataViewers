import { Component, OnInit, ViewEncapsulation, Inject, provide } from '@angular/core';
import { ThreadViewDataset  } from '../../viewThreadTreeElements/model/threadViewDataset';
import { ThreadsView } from '../../viewThreadTreeElements/threadsView/threadsView.component';
import { ThreadView } from '../../viewThreadTreeElements/threadView/threadView.component'
import * as d3 from 'd3';
import {JsInputComponent} from '../../jsInput/jsInput.component';
import {JsonTransformationService} from '../../service/JsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {TransformJsonToThreadViewDataset} from '../model/transformJsonToThreadViewDataset';
import {MapCreator} from '../model/mapCreator';
import {TransformToThreadD3node} from '../model/TransformToThreadD3node';
import {ThreadViewDatasetFactory} from '../model/threadviewDatasetFactory';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';

@Component({
    templateUrl: './app/viewThreadTreeElements/rootComponent/viewThreadTree.html',
    directives: [ JsInputComponent, ThreadsView, ThreadView ],
    styleUrls: ['./app/viewThreadTreeElements/rootComponent/viewThreadTree.css'],
    providers: [
          provide("JsonTransformationService", { useClass: TransformJsonToThreadViewDataset }),
          provide("TransformToThreadD3nodeInterface", { useClass: TransformToThreadD3node }),
          provide("MapCreatorInterface", { useClass: MapCreator }),
          provide("ThreadViewDatasetFactoryInterface", { useClass: ThreadViewDatasetFactory }),  
          provide("KeyGenerator", { useClass: KeyGenerator})        
    ]
})
export class ViewThreadTree {
    
    public data : ThreadViewDataset;
    public selectedIndex : number;

    private _transformationService : JsonTransformationService;
    public onJsonChanged : (value : any) => void = (value: any) => {
        this.data = this._transformationService.transformJson(value);
    }

    constructor(@Inject("JsonTransformationService") transformationService :  JsonTransformationService) {
        this._transformationService = transformationService;        
    }         

    public selectionChanged(event : number) {
        this.selectedIndex = event;
    }
      
}
