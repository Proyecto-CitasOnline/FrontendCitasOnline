import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CiudadCreationComponent} from './ciudad/ciudad-creation/ciudad-creation.component';

const routes: Routes = [
  {
    path:'ciudad-creation',
    component: CiudadCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
