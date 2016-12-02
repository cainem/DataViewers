import {Component, Input} from '@angular/core';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';
import {Gene} from '../../data/gene';
import {LogicalReaderReturnComponent} from '../logicalReaderReturn/logicalReaderReturn.component'

@Component({
    selector: 'gene',
    templateUrl: './built/viewElements/components/gene/gene.html',
    styleUrls: ['./built/viewElements/components/gene/gene.css']
})
export class GeneComponent {
    @Input() model : Gene;
    @Input() index: number;
}