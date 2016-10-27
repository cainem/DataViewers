import {Component, Input} from '@angular/core';
import {LogicalNodeDto, LogicalNodeFunctionDto, LogicalImplicitConnectionSettingsDto} from '../../../data/AllDtos';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {Collapse} from '../../collapsibleDiv/collapsibleDiv.component';
import {LogicalImplicitConnectionSettingsComponent} from '../logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.component';

@Component({
    selector: 'logicalNode',
    templateUrl: './app/viewElements/components/logicalNode/logicalNode.html',
    styleUrls: ['./app/viewElements/components/logicalNode/logicalNode.css']
})
export class LogicalNodeComponent {    
    @Input() model : LogicalNodeDto    
}
