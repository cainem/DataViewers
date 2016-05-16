import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{message}}</h1>'
})
export class AppComponent {
  message : string;
  constructor() {  
    this.message = "hello world";  
  }
 }