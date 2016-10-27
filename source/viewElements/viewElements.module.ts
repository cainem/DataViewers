import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {ChromosomeComponent} from './components/chromosome/chromosome.component';
import {GeneComponent} from './components/gene/gene.component';
import {ContextBasedActionSwitchComponent} from './components/contextBasedActionSwitch/contextBasedActionSwitch.component';
import {GenomePositionComponent} from './components/genomePosition/genomePosition.component';
import {LogicalConnectionComponent} from './components/logicalConnection/logicalConnection.component';
import {LogicalImplicitConnectionSettingsComponent} from './components/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.component';
import {LogicalJumpComponent} from './components/logicalJump/logicalJump.component';
import {LogicalNodeComponent} from './components/logicalNode/logicalNode.component';
import {LogicalNodeFunctionComponent} from './components/logicalNodeFunction/logicalNodeFunction.component';
import {LogicalReaderReturnComponent} from './components/logicalReaderReturn/logicalReaderReturn.component';
import {LogicalThreadControlComponent} from './components/logicalThreadControl/logicalThreadControl.component';
import {LogicalThreadCreateComponent} from './components/logicalThreadCreate/logicalThreadCreate.component';
import {ViewLogicalStreamComponent} from "./rootComponent/viewLogicalStream.component";
import {WoollyKeyComponent} from './components/woollyKey/woollyKey.component';
import {CollapseDirective} from './collapsibleDiv/collapsibleDiv.component';
import {JsInputModule} from '../jsInput/jsInput.module';

@NgModule({
    imports : [CommonModule, JsInputModule],
    declarations: [
     ChromosomeComponent,
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
     WoollyKeyComponent,
     ViewLogicalStreamComponent,
     CollapseDirective,
    ],
    exports : [ ViewLogicalStreamComponent ],
    providers : [ ]
})
export class ViewElementsModule { }