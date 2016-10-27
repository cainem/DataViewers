import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ViewMachine} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTree} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorer} from './propertyExplorer/rootComponent/propertyExplorer.component';
import {ViewProperties} from './propertyExplorer/viewProperties/viewProperties.component';
import {JsInputComponent} from './jsInput/jsInput.component';
import {routing} from './app.routing'
import {RootMenuComponent}  from './routerMenus/rootMenu/rootMenu.component';
import {ThreadsView} from './viewThreadTreeElements/threadsView/threadsView.component';
import {ThreadView} from './viewThreadTreeElements/threadView/threadView.component';
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
     ViewMachine,
     ViewThreadTree,
     PropertyExplorer,
     ViewProperties,
     ThreadsView,
     ThreadView,     
     ],
  providers : [    
  ],
  exports : [ ],
  bootstrap: [ RootMenuComponent ]
})
export class AppModule { }
