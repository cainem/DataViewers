import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {JsInputModule} from '../jsInput/jsInput.module';
import {PropertyExplorerComponent} from './rootComponent/propertyExplorer.component';
import {ViewPropertiesComponent} from './viewProperties/viewProperties.component';

@NgModule({
    imports : [CommonModule, JsInputModule],
    declarations: [
        PropertyExplorerComponent,
        ViewPropertiesComponent
    ],
    exports : [ PropertyExplorerComponent, ViewPropertiesComponent ],
    providers : [ ]
})
export class PropertyExplorerModule { }