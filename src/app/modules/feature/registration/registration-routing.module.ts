import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Imports
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
