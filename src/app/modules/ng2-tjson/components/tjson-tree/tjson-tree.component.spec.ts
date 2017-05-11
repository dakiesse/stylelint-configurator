import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJsonTreeComponent } from './tjson-tree.component';

describe('TJsonComponent', () => {
  let component: TJsonTreeComponent;
  let fixture: ComponentFixture<TJsonTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJsonTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJsonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
