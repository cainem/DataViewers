import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JsInputComponent}                   from './jsInput.component'

@NgModule({
    imports : [CommonModule, FormsModule],
    declarations: [
       JsInputComponent
    ],
    exports : [ JsInputComponent ],
    providers : [ ]
})
export class JsInputModule { }