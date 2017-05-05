import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AccordionState } from 'app/models/accordion.state'
import { AppState } from 'app/models/app.state'

@Component({
  selector: 'app-accordion-side',
  templateUrl: './accordion-side.component.html',
  styleUrls: [ './accordion-side.component.css' ],
})
export class AccordionSideComponent implements OnInit {
  private activeIndex: number

  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
    this.store.select(appState => appState.accordion).subscribe((state: AccordionState) => {
      this.activeIndex = state.activeIndex
    })
  }
}
