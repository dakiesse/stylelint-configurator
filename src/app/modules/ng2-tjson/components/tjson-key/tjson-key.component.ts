import { Component, HostListener, Input } from '@angular/core'

@Component({
  selector: 'tjson-key',
  template: `"{{ key }}"`,
})
export class TJsonKeyComponent {
  @Input() key: string

  @HostListener('click') clickHandler ($event): void {
    console.log(123)
  }
}
