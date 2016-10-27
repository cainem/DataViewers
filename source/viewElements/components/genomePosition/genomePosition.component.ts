import {Component, Input} from '@angular/core';
import {GenomePositionDto} from '../../../data/AllDtos';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'genomePosition',
    templateUrl: './app/viewElements/components/genomePosition/genomePosition.html',
    styleUrls: ['./app/viewElements/components/genomePosition/genomePosition.css']
})
export class GenomePositionComponent {
    @Input() model : GenomePositionDto    
}


