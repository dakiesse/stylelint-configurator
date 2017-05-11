import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJsonValueComponent } from './tjson-value.component';

describe('TJsonValueComponent', () => {
  let component: TJsonValueComponent;
  let fixture: ComponentFixture<TJsonValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJsonValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJsonValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
