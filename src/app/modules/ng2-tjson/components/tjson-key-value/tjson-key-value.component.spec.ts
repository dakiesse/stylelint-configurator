import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJsonKeyValueComponent } from './tjson-key-value.component';

describe('TreeKeyValueComponent', () => {
  let component: TJsonKeyValueComponent;
  let fixture: ComponentFixture<TJsonKeyValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJsonKeyValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJsonKeyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
