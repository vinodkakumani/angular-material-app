import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Module
import { MaterialModule } from './material/material.module';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    // Re-exporting modules
    CommonModule, FormsModule, ReactiveFormsModule,
    MaterialModule, FlexLayoutModule
  ]
})
export class SharedModule {

}
