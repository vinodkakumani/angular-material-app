import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialExamplesComponent } from './material-examples.component';

const routes: Routes = [
  {path: 'material', component: MaterialExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
