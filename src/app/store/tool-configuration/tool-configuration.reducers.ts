import { Action } from '@ngrx/store'
import { AccordionActions } from 'app/store/accordion/accordion.actions'
import standardConfig from 'stylelint-config-standard'
import { PresetToolConfigurationState, ToolConfigurationState, UserToolConfigurationState } from 'app/models/tool-configuration.state'
import { ToolConfigurationActions } from 'app/store/tool-configuration/tool-configuration.actions'

// const userInitialState: UserToolConfigurationState = { rules: {}, }
const userInitialState = { rules: {}, array_v: [], boolean_v: true, float_v: 2.2, string_v: 'bla', null_v: null }
const presetInitialState: PresetToolConfigurationState = userInitialState

const externalConfigurations = new Map([
  [ 'standard', standardConfig ],
])

export function userToolConfiguratorReducer (state: UserToolConfigurationState = userInitialState,
                                             action: Action): UserToolConfigurationState {
  switch (action.type) {
    case ToolConfigurationActions.SET_VALUE:
      return { rules: { [action.payload.key]: action.payload.value, }, ...state }
    case ToolConfigurationActions.SET_EXTEND_KEY:
      return { extend: action.payload.name, ...state }
    case ToolConfigurationActions.REMOVE_EXTEND_KEY:
      return { rules: state.rules }
    default:
      return state
  }
}

export function presetToolConfiguratorReducer (state: PresetToolConfigurationState = presetInitialState,
                                               action: Action): PresetToolConfigurationState {
  switch (action.type) {
    case ToolConfigurationActions.SET_PRESET:
      return externalConfigurations.get(action.payload.name)
    case ToolConfigurationActions.REMOVE_PRESET:
      return presetInitialState
    default:
      return state
  }
}
