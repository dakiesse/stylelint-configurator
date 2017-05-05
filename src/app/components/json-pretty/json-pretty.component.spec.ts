import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrettyComponent } from './json-pretty.component';

describe('JsonPrettyComponent', () => {
  let component: JsonPrettyComponent;
  let fixture: ComponentFixture<JsonPrettyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrettyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrettyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
