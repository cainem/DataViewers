import {Component, Input} from '@angular/core';
import {LogicalNodeComponent} from '../logicalNode/logicalNode.component';
import {LogicalConnectionComponent} from '../logicalConnection/logicalConnection.component';
import {LogicalJumpComponent} from '../logicalJump/logicalJump.component';
import {LogicalThreadControlComponent} from '../logicalThreadControl/logicalThreadControl.component';
import {LogicalThreadCreateComponent} from '../logicalThreadCreate/logicalThreadCreate.component';
import {GenomePositionComponent} from '../genomePosition/genomePosition.component';
import {LogicalReaderReturnDto} from '../../../data/AllDtos';
import {Collapse} from '../../collapsibleDiv/collapsibleDiv.component';


@Component({
    selector: 'logicalReaderReturn',
    templateUrl: './app/viewElements/components/logicalReaderReturn/logicalReaderReturn.html',
    providers : [],
    styleUrls: ['./app/viewElements/components/logicalReaderReturn/logicalReaderReturn.css']
    
})
export class LogicalReaderReturnComponent {
    @Input() model : LogicalReaderReturnDto;    
}