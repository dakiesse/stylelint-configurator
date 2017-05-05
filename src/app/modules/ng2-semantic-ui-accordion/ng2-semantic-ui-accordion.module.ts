import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccordionComponent } from './components/accordion/accordion.component'
import { AccordionContentComponent } from './components/accordion-content/accordion-content.component'
import { GroupableService } from 'app/modules/ng2-semantic-ui-accordion/services/groupable/groupable.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ GroupableService ],
  exports: [ AccordionComponent, AccordionContentComponent ],
  declarations: [ AccordionComponent, AccordionContentComponent ],
})
export class Ng2SemanticUiAccordionModule {
}
