import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeJsonComponent } from './tree-json.component';

describe('TreeJsonComponent', () => {
  let component: TreeJsonComponent;
  let fixture: ComponentFixture<TreeJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
