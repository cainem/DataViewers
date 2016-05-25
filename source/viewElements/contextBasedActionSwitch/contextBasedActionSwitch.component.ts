import {Component, Input} from '@angular/core';
import {ContextBasedActionSwitchDto} from '../../data/logicalBuildingUnitDisplay/contextBasedActionSwitchDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'contextBasedActionSwitch',
    templateUrl: './app/viewElements/contextBasedActionSwitch/contextBasedActionSwitch.html',
    directives: [Collapse],
    styleUrls: ['./app/viewElements/contextBasedActionSwitch/contextBasedActionSwitch.css']
})
export class ContextBasedActionSwitchComponent {    
    @Input() model : ContextBasedActionSwitchDto    
}