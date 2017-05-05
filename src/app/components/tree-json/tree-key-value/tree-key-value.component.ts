import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-tree-key-value',
  templateUrl: './tree-key-value.component.html',
  styleUrls: [ './tree-key-value.component.css' ],
})
export class TreeKeyValueComponent {
  @Input() key: string
  @Input() value: any
  @Input() isLast: boolean
}
