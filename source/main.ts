// import 'reflect-metadata';
// // workaround for https://github.com/angular/angular/issues/6007
// import Zone from 'zone.js';
// window.Zone = Zone;
/// <reference path="../typings/index.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {RootMenuComponent} from "./routerMenus/rootMenu/rootMenu.component";
import {RouteConfig} from "@angular/router-deprecated";
import {provide} from '@angular/core';
import {TransformJsonToLogicalStream} from './viewElements/data/transformJsonToLogicalStream';
import {JsonTransformationInterface, JsonTransformationToken} from './service/jsonTransformationService';
//import {TransformToThreadD3node} from './viewThreadTreeElements/model/transformToThreadD3node'

import {TransformJsonToThreadViewDataset} from './viewThreadTreeElements/model/transformJsonToThreadViewDataset';
import {MapCreator} from './viewThreadTreeElements/model/mapCreator';
import {TransformToThreadD3node} from './viewThreadTreeElements/model/TransformToThreadD3node';
import {ThreadViewDatasetCreator} from './viewThreadTreeElements/model/threadviewDatasetCreator';
import {KeyGenerator} from './service/keyGenerator/keyGenerator';
//import {JsonTransformationToken, JsonTransformationInterface} from '../../service/JsonTransformationService';


bootstrap(RootMenuComponent,  [ ROUTER_PROVIDERS,            
    ]).
    catch(err => console.error(err));

