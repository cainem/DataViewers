import {Component, provide, Inject, EventEmitter} from '@angular/core';
import {JsInputComponent} from '../../jsInput/jsInput.component';
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
    private _transformationService : JsonTransformationService;
    public onJsonChanged : (value : any) => void = (value: any) => {
        this.json = this._transformationService.transformJson(value);
    }

    constructor(@Inject("JsonTransformationService") transformationService :  JsonTransformationService) {
        this._transformationService = transformationService;        
    }         
}
