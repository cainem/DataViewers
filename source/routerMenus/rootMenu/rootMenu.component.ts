import {Component, provide} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "@angular/router-deprecated"
import {ViewLogicalStream} from "../../viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachine} from "../viewMachine/viewMachine.component";
import {ViewThreadTree} from "../../viewThreadTreeElements/rootComponent/viewThreadTree.component";

import {LogicalConnectionComponent} from '../../viewElements/components/logicalConnection/logicalConnection.component';
import {LogicalNodeComponent} from '../../viewElements/components/logicalNode/logicalNode.component';
import {PropertyExplorer} from '../../propertyExplorer/rootComponent/propertyExplorer.component';


@Component({
    selector: 'rootMenu',
    templateUrl: './app/routerMenus/rootMenu/rootMenu.html',
    directives: [ViewLogicalStream, ViewMachine, ROUTER_DIRECTIVES, LogicalConnectionComponent, LogicalNodeComponent, ViewThreadTree, PropertyExplorer],
    providers: [ 
        ROUTER_PROVIDERS,
    ]
})
@RouteConfig([
    { path: '/viewLogicalStream', name: 'ViewLogicalStream', component: ViewLogicalStream, useAsDefault: true },
    { path: '/viewMachine', name: 'ViewMachine', component: ViewMachine },
    { path: '/viewThreadTree', name: 'ViewThreadTree', component : ViewThreadTree },
    { path: '/propertyExplorer', name: 'PropertyExplorer', component : PropertyExplorer },
])
export class RootMenuComponent {
        
    // public elementArray: any[] = [
    //         new LogicalNodeComponent(),
    //         new LogicalNodeComponent(),
    //         new LogicalConnectionComponent(),
    //         new LogicalNodeComponent()    
    //     ];                     
}
