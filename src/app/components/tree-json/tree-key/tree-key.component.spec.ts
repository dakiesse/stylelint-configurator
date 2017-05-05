import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeKeyComponent } from './tree-key.component';

describe('TreeKeyComponent', () => {
  let component: TreeKeyComponent;
  let fixture: ComponentFixture<TreeKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
