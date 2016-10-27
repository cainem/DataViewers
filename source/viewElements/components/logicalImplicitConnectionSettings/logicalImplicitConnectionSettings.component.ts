import {Component, Input} from '@angular/core';
import {LogicalImplicitConnectionSettingsDto} from '../../../data/AllDtos';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {Collapse} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalImplicitConnectionSettings',
    templateUrl: './app/viewElements/components/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.html',
    styleUrls: ['./app/viewElements/components/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.css']
})
export class LogicalImplicitConnectionSettingsComponent {    
    @Input() model : LogicalImplicitConnectionSettingsDto    
}