import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[popup]',
})
export class PopupDirective {
  @Input() message: string = 'Default message'

  constructor (_elementRef: ElementRef) {
    console.log(_elementRef)
  }

  @HostListener('click') displayMessage (): void {
    alert(this.message)
  }
}
