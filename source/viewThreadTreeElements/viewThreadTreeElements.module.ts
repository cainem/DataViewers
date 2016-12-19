import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {JsInputModule} from '../jsInput/jsInput.module';
import {ThreadViewComponent} from './threadView/threadView.component';
import {ThreadsViewComponent} from './threadsView/threadsView.component';
import {ViewThreadTreeComponent} from './rootComponent/viewThreadTree.component';
import {PropertyExplorerModule} from '../propertyExplorer/propertyExplorer.module';
import {SelectedAssetTrackerService} from './services/assetTracker/selectedAssetTracker.service';
import {GeneSetDtoArrayMapperService} from './services/mappers/geneSetDtoArrayMapper/geneSetDtoArrayMapper.service';
import {GeneSetDtoMapperService} from './services/mappers/geneSetDtoMapper/geneSetDtoMapper.service';
import {WindowGetPropertyValueService} from './services/assetTracker/windowGetPropertyValue.service';
import {KeyGenerator} from '../service/keyGenerator/keyGenerator';
import {ThreadMapNodeDtoMapperService} from './services/mappers/threadMapNodeDtoMapper/threadMapNodeDtoMapper.service';
import {PendingConnectionListDtoMapperService} from './services/mappers/pendingConnectionListDtoMapper/pendingConnectionListDtoMapper.service';
import {ThreadMapConnectionBaseDtoMapperService} from './services/mappers/threadMapConnectionBaseDtoMapper/threadMapConnectionBaseDtoMapper.service';

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
    providers : [ SelectedAssetTrackerService, GeneSetDtoArrayMapperService, WindowGetPropertyValueService,
        GeneSetDtoMapperService, KeyGenerator, ThreadMapNodeDtoMapperService, PendingConnectionListDtoMapperService,
        ThreadMapConnectionBaseDtoMapperService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
 ]
})
export class ViewThreadTreeElementsModule { }