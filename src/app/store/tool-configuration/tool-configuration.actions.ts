import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'app/models/app.state'
import { createAction } from 'app/store/create-action'

@Injectable()
export class ToolConfigurationActions {
  static SET_VALUE = 'SET_VALUE'
  static SET_PRESET = 'SET_PRESET'
  static REMOVE_PRESET = 'REMOVE_PRESET'
  static SET_EXTEND_KEY = 'SET_EXTEND_KEY'
  static REMOVE_EXTEND_KEY = 'REMOVE_EXTEND_KEY'

  constructor (private store: Store<AppState>) {
  }

  setValue (key: string, value: any): void {
    this.store.dispatch(createAction(ToolConfigurationActions.SET_VALUE, { key, value }))
  }

  setPreset (name: string): void {
    this.store.dispatch(createAction(ToolConfigurationActions.SET_PRESET, { name }))
  }

  removePreset (): void {
    this.store.dispatch(createAction(ToolConfigurationActions.REMOVE_PRESET))
  }

  setExtendKey (name: string): void {
    this.store.dispatch(createAction(ToolConfigurationActions.SET_EXTEND_KEY, { name }))
  }

  removeExtendKey (): void {
    this.store.dispatch(createAction(ToolConfigurationActions.REMOVE_EXTEND_KEY))
  }
}
