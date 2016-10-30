import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SelectedAsset} from './selectedAsset';
import {WindowGetPropertyValueService} from './windowGetPropertyValue.service';


@Injectable()
export class SelectedAssetTrackerService {
    private _currentlySelectedAsset : SelectedAsset;
    private _previouslySelectedAsset: SelectedAsset;
    private _previousFillColor : string;

    public selectedChanged : BehaviorSubject<SelectedAsset> = new BehaviorSubject(new SelectedAsset(null, null)); 

    constructor(private _windowGetPropertyValueService : WindowGetPropertyValueService) {        
    }

    public get currentlySelectedAsset() : SelectedAsset {
        return this._currentlySelectedAsset;
    }

    public set currentlySelectedAsset(value : SelectedAsset) {

        if (!value) {
            return;
        }

        // is there a currently selected asset?
        if (this._currentlySelectedAsset) {

            if (this._currentlySelectedAsset.selected === value.selected) {
                // the selected value has not changed so return immediately
                return;
            }
            else {
                // if so put back to original state 
                this._currentlySelectedAsset.selected.isSelected = false;
                if (this._previousFillColor) {
                    this._currentlySelectedAsset.selectionContext.attr("fill", this._previousFillColor);
                }
            }
        }
        
        this._previousFillColor = this._windowGetPropertyValueService.getPropertyValue(<Element>value.selectionContext.node(), "fill");
        value.selectionContext.attr("fill", "red");
        value.selected.isSelected = true;

        this._currentlySelectedAsset = value;

        this.selectedChanged.next(value);
    }
}