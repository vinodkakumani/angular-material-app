import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { MaterialExamplesComponent } from './material-examples.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MaterialExamplesRoutingModule
  ],
  declarations: [
    MaterialExamplesComponent
  ],
  exports: [
    MaterialExamplesRoutingModule
  ]
})
export class MaterialExamplesModule { }
