import {Component, Input} from '@angular/core';
import {LogicalJumpDto} from '../../data/logicalBuildingUnitDisplay/logicalJumpDto';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalJump',
    templateUrl: './app/viewElements/logicalJump/logicalJump.html',
    directives: [WoollyKey, Collapse, ContextBasedActionSwitchComponent],
    styleUrls: ['./app/viewElements/logicalJump/logicalJump.css']
})
export class LogicalJumpComponent {    
    @Input() model : LogicalJumpDto    
}
