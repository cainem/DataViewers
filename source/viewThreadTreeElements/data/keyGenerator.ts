import {KeyGeneratorInterface} from './keyGenerator.interface'

export class KeyGenerator implements KeyGeneratorInterface {
    private _counter : number = 0;
    getNextKey = () => {
        this._counter++;
        return this._counter;
    }
}