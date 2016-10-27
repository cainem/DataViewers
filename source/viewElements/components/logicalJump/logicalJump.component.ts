import {Component, Input} from '@angular/core';
import {LogicalJumpDto} from '../../../data/AllDtos';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalJump',
    templateUrl: './app/viewElements/components/logicalJump/logicalJump.html',
    styleUrls: ['./app/viewElements/components/logicalJump/logicalJump.css']
})
export class LogicalJumpComponent {    
    @Input() model : LogicalJumpDto    
}
