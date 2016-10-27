import {Component, Input} from '@angular/core';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {Collapse} from '../../collapsibleDiv/collapsibleDiv.component';
import {LogicalConnectionDto} from '../../../data/AllDtos';


@Component({
    selector: 'logicalConnection',
    templateUrl: './app/viewElements/components/logicalConnection/logicalConnection.html',
    styleUrls: ['./app/viewElements/components/logicalConnection/logicalConnection.css']
})
export class LogicalConnectionComponent {
    @Input() model : LogicalConnectionDto    
}
