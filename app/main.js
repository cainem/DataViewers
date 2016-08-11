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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLG1FQUFtRTtBQUNuRSw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBQ3RCLDhDQUE4Qzs7QUFFOUMseUNBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsa0NBQWlDLDRCQUNqQyxDQUFDLENBRDREO0FBQzdELG1DQUFrQywyQ0FBMkMsQ0FBQyxDQUFBO0FBRTlFLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2Q0FBNkMsa0RBQWtELENBQUMsQ0FBQTtBQUloRyxvQ0FBUyxDQUFDLHNDQUFpQixFQUFHLENBQUUsb0NBQWdCO0lBQzVDLGNBQU8sQ0FBQywyQkFBMkIsRUFBRSxFQUFFLFFBQVEsRUFBRywyREFBNEIsRUFBRyxDQUFDLENBQUcsQ0FBQztJQUN0RixLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbi8vIC8vIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzYwMDdcclxuLy8gaW1wb3J0IFpvbmUgZnJvbSAnem9uZS5qcyc7XHJcbi8vIHdpbmRvdy5ab25lID0gWm9uZTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBib290c3RyYXAgfSAgICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnXHJcbmltcG9ydCB7IFJvb3RNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vcm91dGVyTWVudXMvcm9vdE1lbnUvcm9vdE1lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNmb3JtSnNvblRvTG9naWNhbFN0cmVhbSB9IGZyb20gJy4vdmlld0VsZW1lbnRzL2RhdGEvdHJhbnNmb3JtSnNvblRvTG9naWNhbFN0cmVhbSc7XHJcbmltcG9ydCB7IEpzb25UcmFuc2Zvcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvanNvblRyYW5zZm9ybWF0aW9uU2VydmljZSc7XHJcblxyXG5cclxuYm9vdHN0cmFwKFJvb3RNZW51Q29tcG9uZW50LCAgWyBST1VURVJfUFJPVklERVJTLFxyXG4gICAgcHJvdmlkZShcIkpzb25UcmFuc2Zvcm1hdGlvblNlcnZpY2VcIiwgeyB1c2VDbGFzcyA6IFRyYW5zZm9ybUpzb25Ub0xvZ2ljYWxTdHJlYW0gIH0pICBdKS5cclxuICAgIGNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
