import {Injectable} from '@angular/core';
import {KeyGeneratorInterface} from './keyGenerator.interface'

@Injectable()
export class KeyGenerator implements KeyGeneratorInterface {
    private _counter : number = 0;
    getNextKey = () => {
        this._counter++;
        return this._counter;
    }
}