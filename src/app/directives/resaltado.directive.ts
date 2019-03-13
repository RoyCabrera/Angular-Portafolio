import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(elemento:ElementRef) {
    elemento.nativeElement.style.color="blue";
   }

}
