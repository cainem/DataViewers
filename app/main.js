// import 'reflect-metadata';
// // workaround for https://github.com/angular/angular/issues/6007
// import Zone from 'zone.js';
// window.Zone = Zone;
/// <reference path="../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var rootMenu_component_1 = require("./routerMenus/rootMenu/rootMenu.component");
var core_1 = require('@angular/core');
var transformJsonToLogicalStream_1 = require('./viewElements/data/transformJsonToLogicalStream');
platform_browser_dynamic_1.bootstrap(rootMenu_component_1.RootMenuComponent, [router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide("JsonTransformationService", { useClass: transformJsonToLogicalStream_1.TransformJsonToLogicalStream })]).
    catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map