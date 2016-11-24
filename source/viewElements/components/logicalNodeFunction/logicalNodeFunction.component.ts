import {Component, Input} from '@angular/core';
import {LogicalNodeFunctionDto} from '../../../data/AllDtos';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';


@Component({
    selector: 'logicalNodeFunction',
    templateUrl: './viewElements/components/logicalNodeFunction/logicalNodeFunction.html',
    providers : [],
    styleUrls: ['./viewElements/components/logicalNodeFunction/logicalNodeFunction.css']
})
export class LogicalNodeFunctionComponent {
    @Input() model : LogicalNodeFunctionDto;    
}