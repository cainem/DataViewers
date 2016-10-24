import {Component} from '@angular/core';
import {ViewLogicalStream} from "../../viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachine} from "../viewMachine/viewMachine.component";
import {ViewThreadTree} from "../../viewThreadTreeElements/rootComponent/viewThreadTree.component";

import {LogicalConnectionComponent} from '../../viewElements/components/logicalConnection/logicalConnection.component';
import {LogicalNodeComponent} from '../../viewElements/components/logicalNode/logicalNode.component';
import {PropertyExplorer} from '../../propertyExplorer/rootComponent/propertyExplorer.component';
import {JsInputComponent} from '../../jsInput/jsInput.component';

@Component({
    selector: 'rootMenu',
    templateUrl: './app/routerMenus/rootMenu/rootMenu.html',
    providers: [ 
    ],
})
export class RootMenuComponent {
}
