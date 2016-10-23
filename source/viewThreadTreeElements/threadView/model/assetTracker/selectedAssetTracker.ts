import {Injectable} from '@angular/core';
import {SelectedAsset} from './selectedAsset';

@Injectable()
export class SelectedAssetTracker {
    private _currentlySelectedAsset : SelectedAsset;
    private _previouslySelectedAsset: SelectedAsset;

    public get currentlySelectedAsset() : SelectedAsset {
        return this._currentlySelectedAsset;
    }

    public set currentlySelectedAsset(value : SelectedAsset) {
        if (this._currentlySelectedAsset) {
            this._currentlySelectedAsset.selectionContext.attr("fill", "green");
            this._currentlySelectedAsset.selected.isSelected = false;
        }

        value.selectionContext.attr("fill", "red");
        value.selected.isSelected = true;

        this._currentlySelectedAsset = value;
    }
}