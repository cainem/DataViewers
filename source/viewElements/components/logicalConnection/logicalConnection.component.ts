import {Component, Input} from '@angular/core';
import {WoollyKeyComponent} from '../woollyKey/woollyKey.component';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';
import {LogicalConnectionDto} from '../../../data/AllDtos';


@Component({
    selector: 'logicalConnection',
    templateUrl: './viewElements/components/logicalConnection/logicalConnection.html',
    styleUrls: ['./viewElements/components/logicalConnection/logicalConnection.css']
})
export class LogicalConnectionComponent {
    @Input() model : LogicalConnectionDto    
}
