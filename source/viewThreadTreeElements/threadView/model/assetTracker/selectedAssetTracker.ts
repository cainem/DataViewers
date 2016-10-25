import {Injectable} from '@angular/core';
import {SelectedAsset} from './selectedAsset';

@Injectable()
export class SelectedAssetTracker {
    private _currentlySelectedAsset : SelectedAsset;
    private _previouslySelectedAsset: SelectedAsset;
    private _previousFillColor : string;

    public get currentlySelectedAsset() : SelectedAsset {
        return this._currentlySelectedAsset;
    }

    public set currentlySelectedAsset(value : SelectedAsset) {
        if (this._currentlySelectedAsset) {
            this._currentlySelectedAsset.selected.isSelected = false;
            if (this._previousFillColor) {
                this._currentlySelectedAsset.selectionContext.attr("fill", this._previousFillColor);
            }
        }

        if (value.selectionContext.node().attributes['fill'] && value.selectionContext.node().attributes['fill'].nodeValue) {
            this._previousFillColor = value.selectionContext.node().attributes['fill'].nodeValue;
        } else {
            throw("element must have its fill color set to work as a selectable");
        }
        value.selectionContext.attr("fill", "red");
        value.selected.isSelected = true;

        this._currentlySelectedAsset = value;
    }
}