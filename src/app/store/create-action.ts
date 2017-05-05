import { Action } from '@ngrx/store'

export function createAction (type: string, payload?: object): Action {
  return { type, payload }
}
