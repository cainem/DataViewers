import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "@angular/router-deprecated"
import {ViewLogicalStream} from "../viewLogicalStream/viewLogicalStream.component";
import {ViewMachine} from "../viewMachine/viewMachine.component";

import {LogicalConnectionComponent} from '../viewElements/logicalConnection/logicalConnection.component';
import {LogicalNodeComponent} from '../viewElements/logicalNode/logicalNode.component';

@Component({
    selector: 'rootMenu',
    templateUrl: './app/rootMenu/rootMenu.html',
    directives: [ViewLogicalStream, ViewMachine, ROUTER_DIRECTIVES, LogicalConnectionComponent, LogicalNodeComponent],
    providers: [ ROUTER_PROVIDERS ]
})
@RouteConfig([
    { path: '/viewLogicalStream', name: 'ViewLogicalStream', component: ViewLogicalStream, useAsDefault: true },
    { path: '/viewMachine', name: 'ViewMachine', component: ViewMachine }
])
export class RootMenuComponent {
        
    public elementArray: any[] = [
            new LogicalNodeComponent(),
            new LogicalNodeComponent(),
            new LogicalConnectionComponent(),
            new LogicalNodeComponent()    
        ];                     
}
