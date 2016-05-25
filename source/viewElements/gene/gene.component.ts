import {Component, Input} from '@angular/core';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {Gene} from '../../data/logicalBuildingUnitDisplay/gene';
import {LogicalReaderReturnComponent} from '../logicalReaderReturn/logicalReaderReturn.component'

@Component({
    selector: 'gene',
    templateUrl: './app/viewElements/gene/gene.html',
    directives: [Collapse, LogicalReaderReturnComponent],
    styleUrls: ['./app/viewElements/gene/gene.css']
})
export class GeneComponent {
    @Input() model : Gene;
    @Input() index: number;
}