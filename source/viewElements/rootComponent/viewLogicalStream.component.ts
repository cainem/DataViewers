import {Component, Inject, EventEmitter} from '@angular/core';
import {ChromosomeComponent} from '../../viewElements/components/chromosome/chromosome.component';
import {TransformJsonToLogicalStream} from '../data/transformJsonToLogicalStream'
import {LogicalReaderReturnDto} from '../../data/AllDtos';
import {Chromosome} from '../../viewElements/data/chromosome';
import {JsonTransformationToken, JsonTransformationInterface} from '../../service/JsonTransformationService';

@Component({
    templateUrl: './built/viewElements/rootComponent/viewLogicalStream.html',
    providers: [   
        { provide : JsonTransformationToken, useClass: TransformJsonToLogicalStream }
    ],
})
export class ViewLogicalStreamComponent {          
    public json : Chromosome[];    
    public onJsonChanged : (value : any) => void = (value: any) => {
        this.json = this.transformationService.transformJson(value);
    }

    constructor(@Inject(JsonTransformationToken) private transformationService :  JsonTransformationInterface) {
         this.transformationService = transformationService;        
    }         
}
