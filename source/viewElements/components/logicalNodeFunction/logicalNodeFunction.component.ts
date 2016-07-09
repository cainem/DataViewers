import {Component, Input} from '@angular/core';
import {LogicalNodeFunctionDto} from '../../../data/AllDtos';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';


@Component({
    selector: 'logicalNodeFunction',
    templateUrl: './app/viewElements/components/logicalNodeFunction/logicalNodeFunction.html',
    directives: [Collapse],
    providers : [],
    styleUrls: ['./app/viewElements/components/logicalNodeFunction/logicalNodeFunction.css']
})
export class LogicalNodeFunctionComponent {
    @Input() model : LogicalNodeFunctionDto;    
}