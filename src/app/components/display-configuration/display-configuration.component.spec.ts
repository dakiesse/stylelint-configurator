import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayConfigurationComponent } from './display-configuration.component';

describe('DisplayConfigurationComponent', () => {
  let component: DisplayConfigurationComponent;
  let fixture: ComponentFixture<DisplayConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
