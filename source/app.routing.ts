import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import {ViewLogicalStreamComponent} from "./viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachineComponent} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTreeComponent} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorerComponent} from './propertyExplorer/rootComponent/propertyExplorer.component';

const appRoutes: Routes = [
  {
    path: 'viewLogicalStream',
    component: ViewLogicalStreamComponent,    
  },
  {
    path : 'viewMachine',
    component : ViewMachineComponent
  },
  {
    path : 'viewThreadTree',
    component : ViewThreadTreeComponent
  },
  {
    path : 'propertyExplorer',
    component : PropertyExplorerComponent
  },
  {
    path: '',
    redirectTo: '/viewLogicalStream',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
