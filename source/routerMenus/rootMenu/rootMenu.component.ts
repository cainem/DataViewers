import {Component, provide} from '@angular/core';
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
    directives: [
        ViewLogicalStream,
        ViewMachine,
        LogicalConnectionComponent,
        LogicalNodeComponent,
        ViewThreadTree,
        PropertyExplorer,
        JsInputComponent
        ],
    providers: [ 
    ],
})
export class RootMenuComponent {
}
