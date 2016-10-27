import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routing'
import {ViewMachineComponent} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTreeComponent} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorerComponent} from './propertyExplorer/rootComponent/propertyExplorer.component';
import {ViewPropertiesComponent} from './propertyExplorer/viewProperties/viewProperties.component';
import {JsInputComponent} from './jsInput/jsInput.component';
import {RootMenuComponent}  from './routerMenus/rootMenu/rootMenu.component';
import {ThreadsViewComponent} from './viewThreadTreeElements/threadsView/threadsView.component';
import {ThreadViewComponent} from './viewThreadTreeElements/threadView/threadView.component';
import {ViewElementsModule} from './viewElements/viewElements.module';
import {JsInputModule} from './jsInput/jsInput.module';

@NgModule({
  imports: [ 
      BrowserModule ,
      routing,
      ViewElementsModule,
      JsInputModule
  ],
  declarations: [
     RootMenuComponent,
     ViewMachineComponent,
     ViewThreadTreeComponent,
     PropertyExplorerComponent,
     ViewPropertiesComponent,
     ThreadsViewComponent,
     ThreadViewComponent,     
     ],
  providers : [    
  ],
  exports : [ ],
  bootstrap: [ RootMenuComponent ]
})
export class AppModule { }
