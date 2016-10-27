import {Component, Input} from '@angular/core';
import {WoollyKeyDto} from '../../../data/AllDtos';
import {CollapseDirective} from '../../collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'woollyKey',
    templateUrl: './app/viewElements/components/woollyKey/woollyKey.html',
    styleUrls: ['./app/viewElements/components/woollyKey/woollyKey.css']
})
export class WoollyKeyComponent {
    @Input() model: WoollyKeyDto;
}