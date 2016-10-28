import * as d3 from 'd3';
import {Selectable} from './selectable.interface';

export class SelectedAsset {

    public get selectionContext(): d3.Selection<any> {
        return this._selectionContext;
    }

    public get selected() : Selectable {
        return this._selected;
    }

    constructor(private _selectionContext : d3.Selection<any>, private _selected : Selectable) {
    }

}