import {Component, Output, Input, EventEmitter, Inject} from '@angular/core';
import {WrappedJson} from  '../wrappedJson';
import {JsonTransformationService} from '../service/jsonTransformationService';

@Component({
    selector: 'jsInput',
    templateUrl: './app/jsInput/jsInput.html',
    directives: []
})
export class JsInputComponent {
    
    private _viewOfJson : JsonTransformationService;
    
    @Input() public json : WrappedJson;
    @Output() jsonChanged : EventEmitter<string>;
    
    get jsonString(): string {
        if (this.json)
        {
            return this.json.unparsedJson;
        }
        return "";
    }
    set jsonString(value : string) {
        this.json.unparsedJson = value;
        this._viewOfJson.rawJson = this.json.parsedJson;
    }
        
    public constructor(@Inject("JsonTransformationService") viewOfJson : JsonTransformationService)
    {
        this._viewOfJson = viewOfJson;
        this.json = new WrappedJson();
        this.jsonChanged = new EventEmitter<string>();
    }
         
}