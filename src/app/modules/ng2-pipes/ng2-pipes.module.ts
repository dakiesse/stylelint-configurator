import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToIterablePipe } from './pipes/to-iterable/to-iterable.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToIterablePipe
  ],
  exports: [
    ToIterablePipe,
  ]
})
export class Ng2PipesModule { }
