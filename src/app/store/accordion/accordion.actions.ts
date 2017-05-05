import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'app/models/app.state'
import { createAction } from 'app/store/create-action'

@Injectable()
export class AccordionActions {
  static CHANGE = 'CHANGE'
  static NEXT = 'NEXT'

  constructor (private store: Store<AppState>) {
  }

  change (index: number): void {
    this.store.dispatch(createAction(AccordionActions.CHANGE, { index }))
  }

  next (): void {
    this.store.dispatch(createAction(AccordionActions.NEXT))
  }
}
