import { Component, Input, OnInit } from '@angular/core'
import { isObject, isPrimitive } from 'util'

@Component({
  selector: 'app-tree-json',
  templateUrl: './tree-json.component.html',
  styleUrls: [ './tree-json.component.css' ],
})
export class TreeJsonComponent implements OnInit {
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
