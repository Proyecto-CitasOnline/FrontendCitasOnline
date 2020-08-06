import { PaisEditionComponent } from './pais/pais-edition/pais-edition.component';
import { PaisListComponent } from './pais/pais-list/pais-list.component';
import { PaisCreationComponent } from './pais/pais-creation/pais-creation.component';
import { OrientacionEditionComponent } from './orientacion/orientacion-edition/orientacion-edition.component';
import { OrientacionListComponent } from './orientacion/orientacion-list/orientacion-list.component';
import { OrientacionCreationComponent } from './orientacion/orientacion-creation/orientacion-creation.component';
import { EstadoCivilEditionComponent } from './estado-civil/estado-civil-edition/estado-civil-edition.component';
import { EstadoCivilListComponent } from './estado-civil/estado-civil-list/estado-civil-list.component';
import { EstadoCivilCreationComponent } from './estado-civil/estado-civil-creation/estado-civil-creation.component';
import { CiudadRemoveComponent } from './ciudad/ciudad-remove/ciudad-remove.component';
import { CiudadEditionComponent } from './ciudad/ciudad-edition/ciudad-edition.component';
import { CiudadListComponent } from './ciudad/ciudad-list/ciudad-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CiudadCreationComponent} from './ciudad/ciudad-creation/ciudad-creation.component';

const routes: Routes = [
  {
    path:'ciudad-creation',
    component: CiudadCreationComponent
  },
  {
    path:'ciudad-list',
    component: CiudadListComponent
  },
  {
    path:'ciudad-edition',
    component: CiudadEditionComponent
  },
  {
    path:'ciudad-remove',
    component: CiudadRemoveComponent
  },
  {
    path:'estado-civil-creation',
    component: EstadoCivilCreationComponent
  },
  {
    path:'estado-civil-list',
    component: EstadoCivilListComponent
  },
  {
    path:'estado-civil-edition/:id',
    component: EstadoCivilEditionComponent
  },
  {
    path:'orientacion-creation',
    component: OrientacionCreationComponent
  },
  {
    path:'orientacion-list',
    component: OrientacionListComponent
  },
  {
    path:'orientacion-edition',
    component: OrientacionEditionComponent
  },
  {
    path:'pais-creation',
    component: PaisCreationComponent
  },
  {
    path:'pais-list',
    component: PaisListComponent
  },
  {
    path:'pais-edition',
    component: PaisEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
