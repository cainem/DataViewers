import { Component, OnInit, ViewEncapsulation, Inject, provide } from '@angular/core';
import { ThreadViewDataset  } from '../../viewThreadTreeElements/data/threadViewDataset';
import { ThreadsView } from '../../viewThreadTreeElements/threadsView/threadsView.component';
import { ThreadView } from '../../viewThreadTreeElements/threadView/threadView.component'
import * as d3 from 'd3';
import {JsInputComponent} from '../../jsInput/jsInput.component';
import {JsonTransformationService} from '../../service/JsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {TransformJsonToThreadViewDataset} from '../data/transformJsonToThreadViewDataset';
import {MapCreator} from '../data/mapCreator';
import {TransformToThreadD3node} from '../data/TransformToThreadD3node';
import {ThreadViewDatasetFactory} from '../data/threadviewDatasetFactory';
import {KeyGenerator} from '../data/keyGenerator';

@Component({
    templateUrl: './app/viewThreadTreeElements/rootComponent/viewThreadTree.html',
    directives: [ JsInputComponent, ThreadsView, ThreadView ],
    styleUrls: ['./app/viewThreadTreeElements/rootComponent/viewThreadTree.css'],
    providers: [
          provide("JsonTransformationService", { useClass: TransformJsonToThreadViewDataset }),
          provide("TransformToThreadD3nodeInterface", { useClass: TransformToThreadD3node }),
          provide("MapCreatorInterface", { useClass: MapCreator }),
          provide("ThreadViewDatasetFactoryInterface", { useClass: ThreadViewDatasetFactory }),  
          provide("KeyGeneratorInterface", { useClass: KeyGenerator})        
    ]
})
export class ViewThreadTree implements OnInit {
    
    public data : ThreadViewDataset;
    public selectedIndex : number;
    //public json : ThreadMapRootDto;

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

    // initData = () => {
    //     this.data = new ThreadViewDataset({
    //             id : 1,
    //             debugText : "level 0",
    //             depth: 0,
    //             geneSets : [],
    //             childThreads : [
    //                 {
    //                     id : 2,
    //                     depth: 1,
    //                     debugText : "level 1",
    //                     geneSets : [],
    //                     childThreads : 
    //                     [
    //                         {
    //                             id : 3,
    //                             depth : 2,
    //                             debugText : "level 2",
    //                             geneSets : [],
    //                             childThreads : [
    //                                 {
    //                                     id : 4,
    //                                     depth : 3,
    //                                     debugText : "level 3",
    //                                     geneSets : [],
    //                                     childThreads : [
    //                                         {
    //                                             id : 5,
    //                                             depth : 4,
    //                                             debugText : "level 4",
    //                                             geneSets : [],
    //                                             childThreads :  []
    //                                         },
    //                                         {
    //                                             id : 6,
    //                                             depth : 4,
    //                                             debugText : "level 4",
    //                                             geneSets: [],
    //                                             childThreads : []
    //                                         }
    //                                     ]
    //                                 }
    //                             ]
    //                         }
    //                     ],
    //                 },
    //                 {
    //                     id : 7,
    //                     depth : 1,
    //                     debugText : "level 1",
    //                     geneSets : [],
    //                     childThreads: []
    //                 }
    //             ]
    //         }
    //     );

    // }
       
    ngOnInit () {               
        // this.initData();                 
    }    
}
