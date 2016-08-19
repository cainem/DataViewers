import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ViewLogicalStream} from "./viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachine} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTree} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorer} from './propertyExplorer/rootComponent/propertyExplorer.component';
import {ViewProperties} from './propertyExplorer/viewProperties/viewProperties.component';

import {routing} from './app.routing'
import {RootMenuComponent}  from './routerMenus/rootMenu/rootMenu.component';

@NgModule({
  imports: [ 
      BrowserModule ,
      FormsModule, 
      routing,
  ],
  declarations: [
     RootMenuComponent,
     ViewLogicalStream,
     ViewMachine,
     ViewThreadTree,
     PropertyExplorer,
     ViewProperties,
     ],
  bootstrap:    [ RootMenuComponent ]
})
export class AppModule { }
