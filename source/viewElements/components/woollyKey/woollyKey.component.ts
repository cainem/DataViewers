import {Component, Input} from '@angular/core';
import {WoollyKeyDto} from '../../../data/AllDtos';
import {Collapse} from '../../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'woollyKey',
    templateUrl: './app/viewElements/components/woollyKey/woollyKey.html',
    directives: [Collapse],
    styleUrls: ['./app/viewElements/components/woollyKey/woollyKey.css']
})
export class WoollyKey {
    @Input() model: WoollyKeyDto;
}