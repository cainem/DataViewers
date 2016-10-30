import {Injectable} from '@angular/core';
import {SelectedAsset} from './selectedAsset';
import {WindowGetPropertyValueService} from './windowGetPropertyValue.service';

@Injectable()
export class SelectedAssetTrackerService {
    private _currentlySelectedAsset : SelectedAsset;
    private _previouslySelectedAsset: SelectedAsset;
    private _previousFillColor : string;

    constructor(private _windowGetPropertyValueService : WindowGetPropertyValueService) {        
    }

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

        this._previousFillColor = this._windowGetPropertyValueService.getPropertyValue(<Element>value.selectionContext.node(), "fill");
        value.selectionContext.attr("fill", "red");
        value.selected.isSelected = true;

        this._currentlySelectedAsset = value;
    }
}