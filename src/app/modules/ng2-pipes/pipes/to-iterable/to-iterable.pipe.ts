import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'toIterable' })
export class ToIterablePipe implements PipeTransform {
  transform (object: Object): Array<{ [key: string]: any }> {
    const resultArray: Array<{ [key: string]: any }> = []

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        resultArray.push({ key, value: object[ key ] })
      }
    }

    return resultArray
  }
}
