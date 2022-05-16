import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor( public render:Renderer2 , public el : ElementRef) { 
  
  }

    //  this is use in index.html file in h1 heading
     // @HostBinding('style.backgroundColor') bgcolor
    @HostListener('click') myclick(){
    // this.bgcolor = "yellow"
      this.render.setStyle(this.el.nativeElement, 'color', 'red')
    }
}
