import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {LogicalNodeComponent} from '../logicalNode/logicalNode.component';
import {LogicalConnectionComponent} from '../logicalConnection/logicalConnection.component';
import {LogicalJumpComponent} from '../logicalJump/logicalJump.component';
import {LogicalThreadControlComponent} from '../logicalThreadControl/logicalThreadControl.component';
import {GenomePositionComponent} from '../genomePosition/genomePosition.component';
import {LogicalReaderReturnDto} from '../../../data/AllDtos';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalReaderReturn',
    templateUrl: './app/viewElements/components/logicalReaderReturn/logicalReaderReturn.html',
    directives: [LogicalNodeComponent, LogicalConnectionComponent, LogicalJumpComponent, LogicalThreadControlComponent,
                 GenomePositionComponent, Collapse],
    providers : [],
    styleUrls: ['./app/viewElements/components/logicalReaderReturn/logicalReaderReturn.css']
    
})
export class LogicalReaderReturnComponent {
    @Input() model : LogicalReaderReturnDto;    
}