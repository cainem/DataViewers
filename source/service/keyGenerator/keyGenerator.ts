import {Injectable} from '@angular/core';

@Injectable()
export class KeyGenerator {
    private _counter : number = 0;
    getNextKey = () => {
        this._counter++;
        return this._counter;
    }
}