import {Component, Output, Input, EventEmitter, Inject} from '@angular/core';
import {WrappedJson} from  './wrappedJson';
import {JsonTransformationService} from '../service/jsonTransformationService';

@Component({
    selector: 'jsInput',
    templateUrl: './app/jsInput/jsInput.html',
    directives: []
})
export class JsInputComponent {
        
    @Input() public json : WrappedJson;
    @Output() jsonChanged : EventEmitter<any>;
    
    get jsonString(): string {
        if (this.json)
        {
            return this.json.unparsedJson;
        }
        return "";
    }
    set jsonString(value : string) {
        this.json.unparsedJson = value;
    }
        
    public constructor()
    {
        this.json = new WrappedJson();       
        this.json.parsedJsonChanged.subscribe(this.wrappedJsonChanged); 
        this.jsonChanged = new EventEmitter<string>();
    }
         
    wrappedJsonChanged : (value : any) => void = (value : any) => {
        this.jsonChanged.next(value);
    }

}