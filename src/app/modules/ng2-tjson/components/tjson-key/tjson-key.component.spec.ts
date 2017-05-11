import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJsonKeyComponent } from './tjson-key.component';

describe('TJsonKeyComponent', () => {
  let component: TJsonKeyComponent;
  let fixture: ComponentFixture<TJsonKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJsonKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJsonKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
