import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ViewLogicalStream} from "./viewElements/rootComponent/viewLogicalStream.component";
import {ViewMachine} from "./routerMenus/viewMachine/viewMachine.component";
import {ViewThreadTree} from "./viewThreadTreeElements/rootComponent/viewThreadTree.component";
import {PropertyExplorer} from './propertyExplorer/rootComponent/propertyExplorer.component';
import {ViewProperties} from './propertyExplorer/viewProperties/viewProperties.component';
import {JsInputComponent} from './jsInput/jsInput.component';
import {routing} from './app.routing'
import {RootMenuComponent}  from './routerMenus/rootMenu/rootMenu.component';
import {ChromosomeComponent} from './viewElements/components/chromosome/chromosome.component';
import {GeneComponent} from './viewElements/components/gene/gene.component';
import {ContextBasedActionSwitchComponent} from './viewElements/components/contextBasedActionSwitch/contextBasedActionSwitch.component';
import {GenomePositionComponent} from './viewElements/components/genomePosition/genomePosition.component';
import {LogicalConnectionComponent} from './viewElements/components/logicalConnection/logicalConnection.component';
import {LogicalImplicitConnectionSettingsComponent} from './viewElements/components/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.component';
import {LogicalJumpComponent} from './viewElements/components/logicalJump/logicalJump.component';
import {LogicalNodeComponent} from './viewElements/components/logicalNode/logicalNode.component';
import {LogicalNodeFunctionComponent} from './viewElements/components/logicalNodeFunction/logicalNodeFunction.component';
import {LogicalReaderReturnComponent} from './viewElements/components/logicalReaderReturn/logicalReaderReturn.component';
import {LogicalThreadControlComponent} from './viewElements/components/logicalThreadControl/logicalThreadControl.component';
import {LogicalThreadCreateComponent} from './viewElements/components/logicalThreadCreate/logicalThreadCreate.component';
import {WoollyKey} from './viewElements/components/woollyKey/woollyKey.component';

import {Collapse} from './sharedControls/collapsibleDiv/collapsibleDiv.component';

import {ThreadsView} from './viewThreadTreeElements/threadsView/threadsView.component';
import {ThreadView} from './viewThreadTreeElements/threadView/threadView.component';

@NgModule({
  imports: [ 
      BrowserModule ,
      FormsModule, 
      routing,
  ],
  declarations: [
     RootMenuComponent,
     ViewLogicalStream,
     ViewMachine,
     ViewThreadTree,
     PropertyExplorer,
     ViewProperties,
     JsInputComponent,
     ChromosomeComponent,
     ThreadsView,
     ThreadView,
     GeneComponent,
     ContextBasedActionSwitchComponent,
     GenomePositionComponent,
     LogicalConnectionComponent,
     LogicalImplicitConnectionSettingsComponent,
     LogicalJumpComponent,
     LogicalNodeComponent,
     LogicalNodeFunctionComponent,
     LogicalReaderReturnComponent,
     LogicalThreadControlComponent,
     LogicalThreadCreateComponent,
     Collapse,
     WoollyKey
     ],
  providers : [
    
  ],
  bootstrap:    [ RootMenuComponent ]
})
export class AppModule { }
