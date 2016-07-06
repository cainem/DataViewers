import {Component, Input} from '@angular/core';
import {LogicalNodeDto, LogicalNodeFunctionDto, LogicalImplicitConnectionSettingsDto} from '../../data/AllDtos';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {LogicalImplicitConnectionSettingsComponent} from '../logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.component';

@Component({
    selector: 'logicalNode',
    templateUrl: './app/viewElements/logicalNode/logicalNode.html',
    directives: [WoollyKey, LogicalNodeFunctionComponent, Collapse, LogicalImplicitConnectionSettingsComponent],
    styleUrls: ['./app/viewElements/logicalNode/logicalNode.css']
})
export class LogicalNodeComponent {    
    @Input() model : LogicalNodeDto    
}
