import {Component, Input} from '@angular/core';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';
import {Chromosome} from '../../data/chromosome';
import {GeneComponent} from '../gene/gene.component';

@Component({
    selector: 'chromosome',
    templateUrl: './built/viewElements/components/chromosome/chromosome.html',
    styleUrls: ['./built/viewElements/components/chromosome/chromosome.css']
})
export class ChromosomeComponent {
    @Input() model : Chromosome;
    @Input() index : number;
}