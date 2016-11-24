import {Component, Input} from '@angular/core';
import {LogicalJumpDto} from '../../../data/AllDtos';
import {WoollyKeyComponent} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalJump',
    templateUrl: './viewElements/components/logicalJump/logicalJump.html',
    styleUrls: ['./viewElements/components/logicalJump/logicalJump.css']
})
export class LogicalJumpComponent {    
    @Input() model : LogicalJumpDto    
}
