import {IKeyGenerator} from './IKeyGenerator'

export class KeyGenerator implements IKeyGenerator {
    private _counter : number = 0;
    getNextKey = () => {
        this._counter++;
        return this._counter;
    }
}