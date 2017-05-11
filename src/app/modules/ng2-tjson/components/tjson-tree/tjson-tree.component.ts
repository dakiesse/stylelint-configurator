import { Component, Input, OnInit } from '@angular/core'
import { isObject, isPrimitive } from 'util'

@Component({
  selector: 'tjson-tree',
  templateUrl: './tjson-tree.component.html',
  styleUrls: [ './tjson-tree.component.css' ],
})
export class TJsonTreeComponent implements OnInit {
  @Input() structure: Object
  @Input() eventBinding: {
    [key: string]: [
      { [key: string]: (key) => {} },
      { [value: string]: (value) => {} }
      ]
  }

  private typeUtils: Object = { isObject, isPrimitive }

  constructor () {
  }

  ngOnInit () {
  }

}
