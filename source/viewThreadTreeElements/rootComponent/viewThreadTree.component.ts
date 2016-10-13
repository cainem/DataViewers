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

/*
    This component is the top level component responsible for arranging the page with the various views
*/
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
    
    public showLeft : boolean = true;
    public showRight : boolean = true;
    public class6 : string = "col-md-6 expanded";
    public collapsedClass : string = "col-md-1 collapsed";
    public class11 : string = "col-md-11 expanded"
    public classLeft : string;
    public classRight : string;
    public leftButtonText : string;
    public rightButtonText : string;

    public selectedIndex : number;

    public onJsonChanged : (value : any) => void = (value: any) => {
        this.data = this.transformationService.transformJson(value);
    }

    constructor(@Inject(JsonTransformationToken) private transformationService :  JsonTransformationInterface) {
        this.transformationService = transformationService;

        this.classLeft = this.class6;
        this.classRight = this.class6;
        this.rightButtonText = "hide right";
        this.leftButtonText = "hide left";
    }         

    public selectionChanged(event : number) {
        this.selectedIndex = event;
    }

    public toggleLeft = (event) => {
        this.showLeft = !this.showLeft;
        this.onChange();
    }

    public toggleRight = (event) => {
        this.showRight = !this.showRight;
        this.onChange();
    }      

    private onChange = () => {
        this.classLeft = !this.showLeft ? this.collapsedClass : this.showRight ? this.class6 : this.class11;  
        this.leftButtonText = this.showLeft ? "hide left" : "show left";
        this.classRight = !this.showRight ? this.collapsedClass : this.showLeft ? this.class6 : this.class11;
        this.rightButtonText =this.showRight ? "hide right" : "show right";
    }
}
