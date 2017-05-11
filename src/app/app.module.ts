import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { Ng2SemanticUiAccordionModule } from 'app/modules/ng2-semantic-ui-accordion/ng2-semantic-ui-accordion.module'
import { Ng2TJsonModule } from 'app/modules/ng2-tjson/ng2-tjson.module'
import { Ng2PipesModule } from 'app/modules/ng2-pipes/ng2-pipes.module'

import { AppComponent } from './app.component'
import { WorkspaceComponent } from './components/workspace/workspace.component'
import { DisplayConfigurationComponent } from './components/display-configuration/display-configuration.component'
import { SettingConfigurationComponent } from './components/setting-configuration/setting-configuration.component'
import { AccordionSideComponent } from './components/accordion-side/accordion-side.component'
import { ConfigurationSideComponent } from './components/configuration-side/configuration-side.component'

import { rootReducer } from 'app/store/root-reducer'
import { AccordionActions } from 'app/store/accordion/accordion.actions'
import { ToolConfigurationActions } from 'app/store/tool-configuration/tool-configuration.actions'

import { PopupDirective } from './directives/popup.directive'
import { ToolConfigurationService } from 'app/services/tool-configuration.service'

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    DisplayConfigurationComponent,
    SettingConfigurationComponent,
    AccordionSideComponent,
    ConfigurationSideComponent,
    PopupDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2PipesModule,
    Ng2SemanticUiAccordionModule,
    Ng2TJsonModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5,
    }),
  ],
  providers: [
    AccordionActions,
    ToolConfigurationActions,
    ToolConfigurationService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
