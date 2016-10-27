import {Component, Input} from '@angular/core';
import {LogicalNodeFunctionDto} from '../../../data/AllDtos';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';


@Component({
    selector: 'logicalNodeFunction',
    templateUrl: './app/viewElements/components/logicalNodeFunction/logicalNodeFunction.html',
    providers : [],
    styleUrls: ['./app/viewElements/components/logicalNodeFunction/logicalNodeFunction.css']
})
export class LogicalNodeFunctionComponent {
    @Input() model : LogicalNodeFunctionDto;    
}