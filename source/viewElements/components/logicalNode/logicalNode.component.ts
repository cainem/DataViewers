import {Component, Input} from '@angular/core';
import {LogicalNodeDto, LogicalNodeFunctionDto, LogicalImplicitConnectionSettingsDto} from '../../../data/AllDtos';
import {WoollyKeyComponent} from '../woollyKey/woollyKey.component';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';
import {LogicalImplicitConnectionSettingsComponent} from '../logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.component';

@Component({
    selector: 'logicalNode',
    templateUrl: './viewElements/components/logicalNode/logicalNode.html',
    styleUrls: ['./viewElements/components/logicalNode/logicalNode.css']
})
export class LogicalNodeComponent {    
    @Input() model : LogicalNodeDto    
}
