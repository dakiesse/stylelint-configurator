import { Injectable } from '@angular/core'

@Injectable()
export class GroupableService {
  /** @type {number} */
  private startIndex: number = 0

  /**
   * List of all indexes that it was to create.
   * @type {Set<any>}
   */
  private indexes: Set<number> = new Set<number>()

  public giveNextIndex (): number {
    this.indexes.add(++this.startIndex)

    return this.startIndex
  }

  public findNextIndexOf (requiredIndex: number): number | void {
    const indexes: number[] = Array.from(this.indexes)
    const positionIndex: number = indexes.indexOf(requiredIndex)

    if (positionIndex) {
      return indexes[ positionIndex + 1 ]
    }
  }
}
