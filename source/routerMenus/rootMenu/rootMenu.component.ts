import {Component} from '@angular/core';
import {ViewLogicalStreamComponent} from "../../viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachineComponent} from "../viewMachine/viewMachine.component";
import {ViewThreadTreeComponent} from "../../viewThreadTreeElements/rootComponent/viewThreadTree.component";

import {LogicalConnectionComponent} from '../../viewElements/components/logicalConnection/logicalConnection.component';
import {LogicalNodeComponent} from '../../viewElements/components/logicalNode/logicalNode.component';
import {PropertyExplorerComponent} from '../../propertyExplorer/rootComponent/propertyExplorer.component';

@Component({
    selector: 'rootMenu',
    templateUrl: './app/routerMenus/rootMenu/rootMenu.html',
    providers: [ 
    ],
})
export class RootMenuComponent {
}
