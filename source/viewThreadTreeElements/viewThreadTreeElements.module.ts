import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {JsInputModule} from '../jsInput/jsInput.module';
import {ThreadViewComponent} from './threadView/threadView.component';
import {ThreadsViewComponent} from './threadsView/threadsView.component';
import {ViewThreadTreeComponent} from './rootComponent/viewThreadTree.component';
import {PropertyExplorerModule} from '../propertyExplorer/propertyExplorer.module';

@NgModule({
    imports : [
        CommonModule,
        JsInputModule,
        PropertyExplorerModule
        ],
    declarations: [
        ThreadViewComponent,
        ThreadsViewComponent,
        ViewThreadTreeComponent
    ],
    exports : [ ViewThreadTreeComponent ],
    providers : [ ]
})
export class ViewThreadTreeElementsModule { }