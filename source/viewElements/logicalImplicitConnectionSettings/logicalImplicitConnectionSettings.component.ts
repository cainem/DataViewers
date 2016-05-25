import {Component, Input} from '@angular/core';
import {LogicalImplicitConnectionSettingsDto} from '../../data/logicalBuildingUnitDisplay/logicalImplicitConnectionSettingsDto';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalImplicitConnectionSettings',
    templateUrl: './app/viewElements/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.html',
    directives: [Collapse],
    styleUrls: ['./app/viewElements/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.css']
})
export class LogicalImplicitConnectionSettingsComponent {    
    @Input() model : LogicalImplicitConnectionSettingsDto    
}