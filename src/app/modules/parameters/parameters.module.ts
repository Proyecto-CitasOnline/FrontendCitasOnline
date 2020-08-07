
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CiudadCreationComponent } from './ciudad/ciudad-creation/ciudad-creation.component';
import { CiudadEditionComponent } from './ciudad/ciudad-edition/ciudad-edition.component';
import { CiudadListComponent } from './ciudad/ciudad-list/ciudad-list.component';
import { CiudadRemoveComponent } from './ciudad/ciudad-remove/ciudad-remove.component';
import { OrientacionCreationComponent } from './orientacion/orientacion-creation/orientacion-creation.component';
import { OrientacionEditionComponent } from './orientacion/orientacion-edition/orientacion-edition.component';
import { OrientacionListComponent } from './orientacion/orientacion-list/orientacion-list.component';
import { EstadoCivilCreationComponent } from './estado-civil/estado-civil-creation/estado-civil-creation.component';
import { EstadoCivilEditionComponent } from './estado-civil/estado-civil-edition/estado-civil-edition.component';
import { EstadoCivilListComponent } from './estado-civil/estado-civil-list/estado-civil-list.component';
import { PaisCreationComponent } from './pais/pais-creation/pais-creation.component';
import { PaisEditionComponent } from './pais/pais-edition/pais-edition.component';
import { PaisListComponent } from './pais/pais-list/pais-list.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [CiudadCreationComponent, CiudadEditionComponent, CiudadListComponent, CiudadRemoveComponent, OrientacionCreationComponent, OrientacionEditionComponent, OrientacionListComponent, EstadoCivilCreationComponent, EstadoCivilEditionComponent, EstadoCivilListComponent, PaisCreationComponent, PaisEditionComponent,  PaisListComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class ParametersModule { }
