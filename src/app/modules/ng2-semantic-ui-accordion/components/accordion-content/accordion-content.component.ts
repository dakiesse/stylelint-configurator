import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: [ './accordion-content.component.css' ],
  animations: [
    trigger('contentState', [
      state('inactive', style({
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
  ],
})
export class AccordionContentComponent implements OnInit {
  @Input() index: number
  @Input() title: string
  @Input() isActive: boolean = false
  @Output() clickTitle: EventEmitter<number> = new EventEmitter

  ngOnInit () {
    // force casting
    this.index = Number(this.index)
  }

  onClickTitle (): void {
    this.clickTitle.emit(this.index)
  }
}
