import { Component, HostListener, Input } from '@angular/core'

@Component({
  selector: 'app-tree-key',
  templateUrl: './tree-key.component.html',
  styleUrls: [ './tree-key.component.css' ],
})
export class TreeKeyComponent {
  @Input() key: string

  @HostListener('click') clickHandler ($event): void {
    console.log(123)
  }
}
