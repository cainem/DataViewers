import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import {ViewLogicalStream} from "./viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachine} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTree} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorer} from './propertyExplorer/rootComponent/propertyExplorer.component';
// import {LogicalConnectionComponent} from './viewElements/components/logicalConnection/logicalConnection.component';
// import {LogicalNodeComponent} from './viewElements/components/logicalNode/logicalNode.component';

const appRoutes: Routes = [
  {
    path: 'viewLogicalStream',
    component: ViewLogicalStream,    
  },
  {
    path : 'viewMachine',
    component : ViewMachine
  },
  {
    path : 'viewThreadTree',
    component : ViewThreadTree
  },
  {
    path : 'propertyExplorer',
    component : PropertyExplorer
  },
  {
    path: '',
    redirectTo: '/viewLogicalStream',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
