import {Component, Input} from '@angular/core';
import {LogicalImplicitConnectionSettingsDto} from '../../../data/AllDtos';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalImplicitConnectionSettings',
    templateUrl: './built/viewElements/components/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.html',
    styleUrls: ['./built/viewElements/components/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.css']
})
export class LogicalImplicitConnectionSettingsComponent {    
    @Input() model : LogicalImplicitConnectionSettingsDto    
}