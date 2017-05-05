import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeValueComponent } from './tree-value.component';

describe('TreeValueComponent', () => {
  let component: TreeValueComponent;
  let fixture: ComponentFixture<TreeValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
