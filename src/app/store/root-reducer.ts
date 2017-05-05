import accordionReducer from 'app/store/accordion/accordion.reducers'
import { presetToolConfiguratorReducer, userToolConfiguratorReducer } from 'app/store/tool-configuration/tool-configuration.reducers'
import { combineReducers } from '@ngrx/store'

export const rootReducer = {
  accordion: accordionReducer,
  userSettings: userToolConfiguratorReducer,
  presetSettings: presetToolConfiguratorReducer,
}
