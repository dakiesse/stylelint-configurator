import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { Ng2SemanticUiAccordionModule } from 'app/modules/ng2-semantic-ui-accordion/ng2-semantic-ui-accordion.module'

import { AppComponent } from './app.component'
import { WorkspaceComponent } from './components/workspace/workspace.component'
import { DisplayConfigurationComponent } from './components/display-configuration/display-configuration.component'
import { SettingConfigurationComponent } from './components/setting-configuration/setting-configuration.component'
import { AccordionSideComponent } from './components/accordion-side/accordion-side.component'
import { ConfigurationSideComponent } from './components/configuration-side/configuration-side.component'

import { rootReducer } from 'app/store/root-reducer'
import { AccordionActions } from 'app/store/accordion/accordion.actions'
import { ToolConfigurationActions } from 'app/store/tool-configuration/tool-configuration.actions'
import { TreeJsonComponent } from './components/tree-json/tree-json.component'
import { TreeKeyComponent } from './components/tree-json/tree-key/tree-key.component'
import { TreeValueComponent } from './components/tree-json/tree-value/tree-value.component'
import { TreeRootComponent } from './components/tree-json/tree-root/tree-root.component'
import { ToIterablePipe } from './pipes/to-iterable.pipe'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JsonPrettyComponent } from './components/json-pretty/json-pretty.component';
import { PopupDirective } from './directives/popup.directive';
import { TreeKeyValueComponent } from './components/tree-json/tree-key-value/tree-key-value.component'

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    DisplayConfigurationComponent,
    SettingConfigurationComponent,
    AccordionSideComponent,
    ConfigurationSideComponent,
    TreeJsonComponent,
    TreeKeyComponent,
    TreeValueComponent,
    TreeRootComponent,
    ToIterablePipe,
    JsonPrettyComponent,
    PopupDirective,
    TreeKeyValueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2SemanticUiAccordionModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
    AccordionActions,
    ToolConfigurationActions,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
