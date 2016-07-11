import {EventEmitter} from '@angular/core';

export class WrappedJson {
    public parsedJson: any;
    public parsedJsonChanged : EventEmitter<any>;

    constructor() {
        this.parsedJsonChanged = new EventEmitter();
        this.parsedJson = null;
    }

    private _unparsedJson: string;
    get unparsedJson(): string {
        return this._unparsedJson;
    }
    set unparsedJson(value: string) {
        if (this._unparsedJson !== value) {
            this._unparsedJson = value;
            let parsedJson : any = null;
            try {
                parsedJson = JSON.parse(this._unparsedJson);
            }
            catch (e) {
                this.parsedJson = null;
                //console.log(e);
            }
            if (parsedJson !== this.parsedJson) {
                this.parsedJson = parsedJson;
                this.parsedJsonChanged.next(this.parsedJson);
            }            
        }
    }
}