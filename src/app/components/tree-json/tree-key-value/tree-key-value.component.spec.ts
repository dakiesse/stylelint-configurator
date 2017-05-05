import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeKeyValueComponent } from './tree-key-value.component';

describe('TreeKeyValueComponent', () => {
  let component: TreeKeyValueComponent;
  let fixture: ComponentFixture<TreeKeyValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeKeyValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeKeyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
