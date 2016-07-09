import {Component, Input} from '@angular/core';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {Chromosome} from '../../data/chromosome';
import {GeneComponent} from '../gene/gene.component';

@Component({
    selector: 'chromosome',
    templateUrl: './app/viewElements/components/chromosome/chromosome.html',
    directives: [Collapse, GeneComponent],
    styleUrls: ['./app/viewElements/components/chromosome/chromosome.css']
})
export class ChromosomeComponent {
    @Input() model : Chromosome;
    @Input() index : number;
}