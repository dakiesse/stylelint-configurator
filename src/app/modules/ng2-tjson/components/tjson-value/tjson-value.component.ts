import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core'
import { isArray, isBoolean, isNull, isNumber, isObject, isPrimitive, isString } from 'util'

@Component({
  selector: 'tjson-value',
  templateUrl: './tjson-value.component.html',
})
export class TJsonValueComponent implements OnInit {
  @HostBinding('class') class: HostBinding
  @Input() value: any
  private typeValue: string
  private util: {} = { isPrimitive }

  constructor (private elementRef: ElementRef) {
  }

  ngOnInit (): void {
    this.configureComponentViaTypeOfValue()
  }

  private configureComponentViaTypeOfValue (): void {
    if (isBoolean(this.value)) {
      this.typeValue = 'boolean'
      this.class = 'tjson-value-typeof-boolean'
      this.value = this.value.toString()
      return
    }

    if (isString(this.value)) {
      this.typeValue = 'string'
      this.class = 'tjson-value-typeof-string'
      this.value = `"${this.value}"`
      return
    }

    if (isNumber(this.value)) {
      this.typeValue = 'number'
      this.class = 'tjson-value-typeof-number'
      return
    }

    if (isNull(this.value)) {
      this.typeValue = 'null'
      this.class = 'tjson-value-typeof-null'
      this.value = 'null'
      return
    }

    if (isArray(this.value)) {
      this.typeValue = 'array'
      this.class = 'tjson-value-typeof-array'
      return
    }

    if (isObject(this.value)) {
      this.typeValue = 'object'
      this.class = 'tjson-value-typeof-object'
      return
    }
  }
}
