import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core'
import { GroupableService } from 'app/modules/ng2-semantic-ui-accordion/services/groupable/groupable.service'
import { AccordionContentComponent } from 'app/modules/ng2-semantic-ui-accordion/components/accordion-content/accordion-content.component'
import { AppState } from 'app/models/app.state'
import { Store } from '@ngrx/store'
import { AccordionActions } from 'app/store/accordion/accordion.actions'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: [ './accordion.component.css' ],
})
export class AccordionComponent implements AfterContentInit {
  private indexes: number[] = []
  private activeIndex: number

  @Input() delegatorOfHandlerClickTitle: () => {} = null
  @ContentChildren(AccordionContentComponent) childrenItems: QueryList<AccordionContentComponent>

  constructor (private actions: AccordionActions) {
  }

  ngAfterContentInit () {
    this.childrenItems.forEach((child: AccordionContentComponent) => {
      // collect indexes
      this.indexes.push(child.index)

      // current active index
      if (child.isActive) {
        this.activeIndex = child.index
      }

      // binding event
      child.clickTitle.subscribe(this.childClickTitle.bind(this))
    })
  }

  childClickTitle (clickedChildIndex: number): void {
    // this.childrenItems.forEach((child) => {
    //   child.isActive = clickedChildIndex === child.index
    // })

    this.actions.change(clickedChildIndex)
  }

}
