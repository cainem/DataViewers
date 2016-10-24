import {Component, Input} from '@angular/core';
import {ContextBasedActionSwitchDto} from '../../../data/AllDtos';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'contextBasedActionSwitch',
    templateUrl: './app/viewElements/components/contextBasedActionSwitch/contextBasedActionSwitch.html',
    styleUrls: ['./app/viewElements/components/contextBasedActionSwitch/contextBasedActionSwitch.css']
})
export class ContextBasedActionSwitchComponent {    
    @Input() model : ContextBasedActionSwitchDto    
}