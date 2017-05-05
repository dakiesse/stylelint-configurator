import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core'

@Component({
  selector: 'app-json-pretty',
  templateUrl: './json-pretty.component.html',
  styleUrls: [ './json-pretty.component.css' ],
  template: '<div #container></div>',
})
export class JsonPrettyComponent implements OnInit {
  // @ViewChild('container') container: ViewRe
  // @ViewContainerRef('container') containerRef: ViewContainerRef

  constructor (private vcr: ViewContainerRef, ef: ElementRef) {
    debugger
  }

  ngOnInit () {
    const child = new ViewChild('a')
    this.vcr.insert(child.read)
  }

}
