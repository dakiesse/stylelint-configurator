import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'app/models/app.state'
import { ToolConfigurationActions } from 'app/store/tool-configuration/tool-configuration.actions'

@Component({
  selector: 'app-setting-configuration',
  templateUrl: './setting-configuration.component.html',
  styleUrls: [ './setting-configuration.component.css' ],
})
export class SettingConfigurationComponent {
  constructor (private actions: ToolConfigurationActions) {
  }

  extendDefaultConfig (isSet) {
    if (isSet) {
      this.actions.setExtendKey('default')
    } else {
      this.actions.removeExtendKey()
    }
  }

  includeDefaultConfig (isSet) {
    if (isSet) {
      this.actions.setPreset('standard')
    } else {
      this.actions.removePreset()
    }
  }
}
