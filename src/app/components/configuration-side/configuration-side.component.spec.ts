import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSideComponent } from './configuration-side.component';

describe('ConfigurationSideComponent', () => {
  let component: ConfigurationSideComponent;
  let fixture: ComponentFixture<ConfigurationSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
