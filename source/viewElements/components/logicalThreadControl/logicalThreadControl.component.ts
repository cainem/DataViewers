import {Component, Input} from '@angular/core';
import {LogicalThreadControlDto} from '../../../data/AllDtos';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalThreadControl',
    templateUrl: './app/viewElements/components/logicalThreadControl/logicalThreadControl.html',
    styleUrls: ['./app/viewElements/components/logicalThreadControl/logicalThreadControl.css']
})
export class LogicalThreadControlComponent {    
    @Input() model : LogicalThreadControlDto    
}
