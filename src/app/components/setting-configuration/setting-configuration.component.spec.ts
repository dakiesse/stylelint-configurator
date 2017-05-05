import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingConfigurationComponent } from './setting-configuration.component';

describe('SettingConfigurationComponent', () => {
  let component: SettingConfigurationComponent;
  let fixture: ComponentFixture<SettingConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
