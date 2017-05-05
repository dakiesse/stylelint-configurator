import { AccordionState } from 'app/models/accordion.state'
import { ToolConfigurationState } from 'app/models/tool-configuration.state'

export interface AppState {
  readonly toolConfiguration: ToolConfigurationState,
  readonly accordion: AccordionState,
}
