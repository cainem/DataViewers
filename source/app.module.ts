import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ViewLogicalStream} from "./viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachine} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTree} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorer} from './propertyExplorer/rootComponent/propertyExplorer.component';

import {routing} from './app.routing'
import {RootMenuComponent}  from './routerMenus/rootMenu/rootMenu.component';
// import {JsInputComponent} from './jsInput/jsInput.component';

@NgModule({
  imports: [ 
      BrowserModule ,
      // Forms
      FormsModule, 
      routing,
  ],
  declarations: [
     RootMenuComponent,
     //JsInputComponent,
     ViewLogicalStream,
     ViewMachine,
     ViewThreadTree,
     PropertyExplorer
     ],
  bootstrap:    [ RootMenuComponent ]
})
export class AppModule { }
