import {Component, provide, Inject} from '@angular/core';
import {JsInputComponent} from '../../jsInput/jsInput.component'
import {ChromosomeComponent} from '../../viewElements/components/chromosome/chromosome.component';
import {TransformJsonToLogicalStream} from '../data/transformJsonToLogicalStream'
import {LogicalReaderReturnDto} from '../../data/AllDtos';
import {Chromosome} from '../../viewElements/data/chromosome';
import {JsonTransformationService} from '../../service/JsonTransformationService';

@Component({
    templateUrl: './app/viewElements/rootComponent/viewLogicalStream.html',
    directives: [ChromosomeComponent, JsInputComponent],
    providers: [  provide("JsonTransformationService", { useClass: TransformJsonToLogicalStream }) ],
})
export class ViewLogicalStream {          
    public json : Chromosome[];
    private _viewOfJson : JsonTransformationService;
    private _onJsonChanged : () => void;
    
    constructor(@Inject("JsonTransformationService") inputJson :  JsonTransformationService) {
        this._viewOfJson = inputJson;
        
        this._onJsonChanged = () => {
            this.json = this._viewOfJson.transformedJson;
        }
        
        this._viewOfJson.rawJsonChanged.subscribe(this._onJsonChanged);
    }         
}
