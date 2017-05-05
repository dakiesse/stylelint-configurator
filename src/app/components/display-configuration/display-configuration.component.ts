import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'app/models/app.state'
import { UserToolConfigurationState } from 'app/models/tool-configuration.state'
import { toolConfigurationCombiner } from 'app/store/tool-configuration/tool-configuration.combiner'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { combineLatest } from 'rxjs/operator/combineLatest'

@Component({
  selector: 'app-display-configuration',
  templateUrl: './display-configuration.component.html',
  styleUrls: [ './display-configuration.component.css' ],
})
export class DisplayConfigurationComponent implements OnInit {
  private configuration: UserToolConfigurationState
  private JSON: JSON

  constructor (private store: Store<AppState>) {
    this.JSON = JSON
  }

  ngOnInit () {
    Observable.combineLatest(
      this.store.select('userSettings'),
      this.store.select('presetSettings'),
      (userSettings, presetSettings) => Object.assign({}, userSettings, presetSettings),
    ).subscribe((toolConfiguration: UserToolConfigurationState) => {
      this.configuration = toolConfiguration
    })
  }
}
