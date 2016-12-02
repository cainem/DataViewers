import {Component, Input} from '@angular/core';
import {ContextBasedActionSwitchDto} from '../../../data/AllDtos';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'contextBasedActionSwitch',
    templateUrl: './built/viewElements/components/contextBasedActionSwitch/contextBasedActionSwitch.html',
    styleUrls: ['./built/viewElements/components/contextBasedActionSwitch/contextBasedActionSwitch.css']
})
export class ContextBasedActionSwitchComponent {    
    @Input() model : ContextBasedActionSwitchDto    
}