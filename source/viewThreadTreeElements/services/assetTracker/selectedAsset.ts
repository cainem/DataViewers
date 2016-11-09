import * as d3 from 'd3';
import {Selectable} from './selectable.interface';

export class SelectedAsset {

    public get selectionContext(): d3.Selection<any> {
        if (!this._selectionContext) {
            throw("selection context not set");
        }
        return this._selectionContext;
    }

    public get selected() : Selectable {
        if (!this._selected) {
            throw("selected not set");
        }
        return this._selected;
    }

    public get hasValue() : boolean {
        if (this._selected && this._selectionContext) {
            return true;
        }
        return false;
    }

    constructor(
        private _selectionContext? : d3.Selection<any> ,
        private _selected? : Selectable) {
    }
}