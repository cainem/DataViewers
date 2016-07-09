import {Component, Input} from '@angular/core';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {Gene} from '../../data/gene';
import {LogicalReaderReturnComponent} from '../logicalReaderReturn/logicalReaderReturn.component'

@Component({
    selector: 'gene',
    templateUrl: './app/viewElements/components/gene/gene.html',
    directives: [Collapse, LogicalReaderReturnComponent],
    styleUrls: ['./app/viewElements/components/gene/gene.css']
})
export class GeneComponent {
    @Input() model : Gene;
    @Input() index: number;
}