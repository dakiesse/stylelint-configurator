import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'tjson-key-value',
  templateUrl: './tjson-key-value.component.html',
})
export class TJsonKeyValueComponent {
  @Input() key: string
  @Input() value: any
  @Input() isLast: boolean
}
