// import 'reflect-metadata';
// // workaround for https://github.com/angular/angular/issues/6007
// import Zone from 'zone.js';
// window.Zone = Zone;

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router'
import { RootMenuComponent } from "./rootMenu/rootMenu.component";
import { RouteConfig } from "@angular/router-deprecated"


bootstrap(RootMenuComponent,  [ ROUTER_PROVIDERS ]).catch(err => console.error(err));

