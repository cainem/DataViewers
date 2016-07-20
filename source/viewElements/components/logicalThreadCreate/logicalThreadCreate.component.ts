import {Component, Input} from '@angular/core';
import {LogicalThreadCreateDto} from '../../../data/AllDtos';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalThreadCreate',
    templateUrl: './app/viewElements/components/logicalThreadCreate/logicalThreadCreate.html',
    directives: [WoollyKey, Collapse, ContextBasedActionSwitchComponent],
    styleUrls: ['./app/viewElements/components/logicalThreadCreate/logicalThreadCreate.css']
})
export class LogicalThreadCreateComponent {    
    @Input() model : LogicalThreadCreateDto    
}
