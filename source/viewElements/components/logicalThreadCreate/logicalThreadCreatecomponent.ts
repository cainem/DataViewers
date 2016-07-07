import {Component, Input} from '@angular/core';
import {LogicalThreadCreateDto} from '../../../data/AllDtos';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalThreadControl',
    templateUrl: './app/viewElements/logicalThreadControl/logicalThreadControl.html',
    directives: [WoollyKey, Collapse, ContextBasedActionSwitchComponent],
    styleUrls: ['./app/viewElements/logicalThreadControl/logicalThreadControl.css']
})
export class LogicalThreadControlComponent {    
    @Input() model : LogicalThreadCreateDto    
}
