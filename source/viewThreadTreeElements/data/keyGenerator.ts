import {keyGeneratorInterface} from './keyGenerator.interface'

export class KeyGenerator implements keyGeneratorInterface {
    private _counter : number = 0;
    getNextKey = () => {
        this._counter++;
        return this._counter;
    }
}