import { Action } from '@ngrx/store'
import { AccordionActions } from 'app/store/accordion/accordion.actions'
import { AccordionState } from 'app/models/accordion.state'

const initialState: AccordionState = {
  activeIndex: 1,
}

export default function accordionReducer (state: AccordionState = initialState, action: Action): AccordionState {
  switch (action.type) {
    case AccordionActions.CHANGE:
      return { activeIndex: action.payload.index }
    case AccordionActions.NEXT:
      return { activeIndex: state.activeIndex }
    default:
      return state
  }
}
