import {Injectable} from '@angular/core';
import {SelectedAsset} from './selectedAsset';

@Injectable()
export class WindowGetPropertyValueService {
    public getPropertyValue(element : Element, propertyValue : string) {
        return window.getComputedStyle(element).getPropertyValue(propertyValue);
    }    
}