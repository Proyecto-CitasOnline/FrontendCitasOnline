import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';


@NgModule({
  declarations: [TestimoniosComponent, FuncionamientoComponent],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
