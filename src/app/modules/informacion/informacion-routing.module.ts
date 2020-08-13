import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'testimonios',
    component: TestimoniosComponent
  },
  {
    path:'funcionamiento',
    component: FuncionamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionRoutingModule { }
