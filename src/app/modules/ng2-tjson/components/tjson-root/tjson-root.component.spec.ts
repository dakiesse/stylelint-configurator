import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJsonRootComponent } from './tjson-root.component';

describe('TJsonRootComponent', () => {
  let component: TJsonRootComponent;
  let fixture: ComponentFixture<TJsonRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJsonRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJsonRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
