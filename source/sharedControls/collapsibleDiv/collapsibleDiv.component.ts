import {Directive, Input, HostBinding, ElementRef} from '@angular/core'

@Directive({selector: '[collapse]'})
export class Collapse { 

  @HostBinding('class.collapsing') 
  @HostBinding('style.height') 
  private isCollapsing : boolean   
  private savedHeight : string;

  private height : string;
  private element : ElementRef;
    
  measureHeight : () => void;    
  hide : () => void;
  show : () => void;
    
  @Input()
  private set collapse(value:boolean) { 
    if(value!==undefined){
      if(value){ 
        this.hide(); 
      }else { 
        this.show();
      }
    }
  }
  constructor(public el: ElementRef) {               
    this.element = el;
    this.isCollapsing = true;
    
    this.measureHeight = () => {
      this.savedHeight = el.nativeElement.scrollHeight + 'px';      
    }
    
    this.hide = () => {
      setTimeout(() => {
        this.measureHeight();
        this.element.nativeElement.height = '0px';              
        this.isCollapsing = false;   
      }, 1);
    };
    
    this.show = () => {
      let _me = this;
      setTimeout(() => {
        _me.element.nativeElement.height = _me.savedHeight;   
        _me.isCollapsing = true;           
      }, 1);
    };
        
  }  
  // hide(){
  //   this.height = this.savedHeight +'px'
  //   setTimeout(() => {
  //       this.height = '0px';
  //       this.isCollapsing = true;//apply 'collapsing' class
  //   },1); 
  // }
  // show() {
  //   this.height = '0px'
  //   setTimeout(() => {
  //       this.height = this.savedHeight + 'px';
  //       this.isCollapsing = true;//apply 'collapsing' class
  //   },1);
  // }
  
}

              