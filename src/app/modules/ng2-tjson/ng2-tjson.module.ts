import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TJsonTreeComponent } from 'app/modules/ng2-tjson/components/tjson-tree/tjson-tree.component'
import { TJsonRootComponent } from 'app/modules/ng2-tjson/components/tjson-root/tjson-root.component'
import { TJsonKeyValueComponent } from 'app/modules/ng2-tjson/components/tjson-key-value/tjson-key-value.component'
import { TJsonKeyComponent } from 'app/modules/ng2-tjson/components/tjson-key/tjson-key.component'
import { TJsonValueComponent } from 'app/modules/ng2-tjson/components/tjson-value/tjson-value.component'
import { Ng2PipesModule } from 'app/modules/ng2-pipes/ng2-pipes.module'

@NgModule({
  imports: [
    CommonModule,
    Ng2PipesModule
  ],
  declarations: [
    TJsonTreeComponent,
    TJsonRootComponent,
    TJsonKeyValueComponent,
    TJsonKeyComponent,
    TJsonValueComponent,
  ],
  exports: [
    TJsonTreeComponent,
  ],
})
export class Ng2TJsonModule {
}
