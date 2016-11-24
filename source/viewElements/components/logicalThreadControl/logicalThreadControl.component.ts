import {Component, Input} from '@angular/core';
import {LogicalThreadControlDto} from '../../../data/AllDtos';
import {WoollyKeyComponent} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalThreadControl',
    templateUrl: './viewElements/components/logicalThreadControl/logicalThreadControl.html',
    styleUrls: ['./viewElements/components/logicalThreadControl/logicalThreadControl.css']
})
export class LogicalThreadControlComponent {    
    @Input() model : LogicalThreadControlDto    
}
