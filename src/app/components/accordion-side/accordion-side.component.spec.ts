import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSideComponent } from './accordion-side.component';

describe('AccordionSideComponent', () => {
  let component: AccordionSideComponent;
  let fixture: ComponentFixture<AccordionSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
