import {Component, Input} from '@angular/core';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {LogicalConnectionDto} from '../../data/AllDtos';


@Component({
    selector: 'logicalConnection',
    templateUrl: './app/viewElements/logicalConnection/logicalConnection.html',
    directives: [WoollyKey, Collapse],
    styleUrls: ['./app/viewElements/logicalConnection/logicalConnection.css']
})
export class LogicalConnectionComponent {
    @Input() model : LogicalConnectionDto    
}
