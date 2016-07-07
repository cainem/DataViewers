import {Component} from '@angular/core';
import {JsInputComponent} from '../../jsInput/jsInput.component'
//import {WrappedJson} from '../wrappedJson'
import {ChromosomeComponent} from '../../viewElements/components/chromosome/chromosome.component';
import {ViewOfJson} from '../../viewElements/data/viewOfJson'
import {LogicalReaderReturnDto} from '../../data/AllDtos';
import {Chromosome} from '../../viewElements/data/chromosome';

@Component({
    templateUrl: './app/routerMenus/viewLogicalStream/viewLogicalStream.html',
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
