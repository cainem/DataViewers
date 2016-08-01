// import 'reflect-metadata';
// // workaround for https://github.com/angular/angular/issues/6007
// import Zone from 'zone.js';
// window.Zone = Zone;
/// <reference path="../typings/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { RootMenuComponent } from "./routerMenus/rootMenu/rootMenu.component";
import { RouteConfig } from "@angular/router-deprecated";
import { provide } from '@angular/core';
import { TransformJsonToLogicalStream } from './viewElements/data/transformJsonToLogicalStream';
import { JsonTransformationService } from './service/jsonTransformationService';


bootstrap(RootMenuComponent,  [ ROUTER_PROVIDERS,
    provide("JsonTransformationService", { useClass : TransformJsonToLogicalStream  })  ]).
    catch(err => console.error(err));

