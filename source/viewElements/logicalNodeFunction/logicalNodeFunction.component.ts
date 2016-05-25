import {Component, Input} from '@angular/core';
import {LogicalNodeFunctionDto} from '../../data/logicalBuildingUnitDisplay/logicalNodeFunctionDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';


@Component({
    selector: 'logicalNodeFunction',
    templateUrl: './app/viewElements/logicalNodeFunction/logicalNodeFunction.html',
    directives: [Collapse],
    providers : [],
    styleUrls: ['./app/viewElements/logicalNodeFunction/logicalNodeFunction.css']
})
export class LogicalNodeFunctionComponent {
    @Input() model : LogicalNodeFunctionDto;    
}