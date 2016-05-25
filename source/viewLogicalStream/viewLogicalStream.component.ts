import {Component} from '@angular/core';
import {JsInputComponent} from '../jsInput/jsInput.component'
//import {WrappedJson} from '../wrappedJson'
import {ChromosomeComponent} from '../viewElements/chromosome/chromosome.component';
import {ViewOfJson} from '../data/logicalBuildingUnitDisplay/viewOfJson'
import {ILogicalReaderReturn} from '../data/logicalBuildingUnitDisplay/logicalReaderReturnDto';
import {Chromosome} from '../data/logicalBuildingUnitDisplay/chromosome';

@Component({
    templateUrl: './app/viewLogicalStream/viewLogicalStream.html',
    directives: [ChromosomeComponent, JsInputComponent],
    providers: [ViewOfJson],
})
export class ViewLogicalStream {          
    public json : Chromosome[];
    private _viewOfJson : ViewOfJson;
    private _onJsonChanged : () => void;
    
    constructor(inputJson : ViewOfJson) {
        this._viewOfJson = inputJson;
        
        this._onJsonChanged = () => {
            this.json = this._viewOfJson.jsonAsLogicalStream;
        }
        
        this._viewOfJson.rawJsonChanged.subscribe(this._onJsonChanged);
    }         
}
