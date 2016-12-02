import {Component, Input} from '@angular/core';
import {LogicalThreadCreateDto} from '../../../data/AllDtos';
import {WoollyKeyComponent} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalThreadCreate',
    templateUrl: './built/viewElements/components/logicalThreadCreate/logicalThreadCreate.html',
    styleUrls: ['./built/viewElements/components/logicalThreadCreate/logicalThreadCreate.css']
})
export class LogicalThreadCreateComponent {    
    @Input() model : LogicalThreadCreateDto    
}
