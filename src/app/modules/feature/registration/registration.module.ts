import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';

// Component imports
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule
  ],
  exports: [
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
