import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PropertyExplorerModule} from './propertyExplorer/propertyExplorer.module'
import {routing} from './app.routing'
import {ViewMachineComponent} from "./routerMenus/viewMachine/viewMachine.component";

import {RootMenuComponent}  from './routerMenus/rootMenu/rootMenu.component';
import {ViewElementsModule} from './viewElements/viewElements.module';
import {ViewThreadTreeElementsModule} from './viewThreadTreeElements/viewThreadTreeElements.module';
import {JsInputModule} from './jsInput/jsInput.module';

@NgModule({
  imports: [ 
      BrowserModule ,
      routing,
      ViewElementsModule,
      PropertyExplorerModule,
      JsInputModule,
      ViewThreadTreeElementsModule
  ],
  declarations: [
     RootMenuComponent,
     ViewMachineComponent,
     ],
  providers : [    
  ],
  exports : [ ],
  bootstrap: [ RootMenuComponent ]
})
export class AppModule { }
