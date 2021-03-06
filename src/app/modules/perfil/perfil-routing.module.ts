import { PerfilImagesComponent } from './perfil-images/perfil-images.component';
import { UnauthenticatedGuard } from './../../guards/unauthenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilCreationComponent } from './perfil-creation/perfil-creation.component';
import { PerfilEditionComponent } from './perfil-edition/perfil-edition.component';
import { PerfilRemoveComponent } from './perfil-remove/perfil-remove.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path:'list',
    component:PerfilListComponent
  },
  {
    path:'creation',
    component:PerfilCreationComponent
  },
  {
    path:'edition/:id',
    component:PerfilEditionComponent
  },
  {
    path:'remove',
    component:PerfilRemoveComponent
  },
  {
    path:'images/:id',
    component:PerfilImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
