import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilCreationComponent } from './perfil-creation/perfil-creation.component';
import { PerfilEditionComponent } from './perfil-edition/perfil-edition.component';
import { PerfilRemoveComponent } from './perfil-remove/perfil-remove.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [PerfilCreationComponent, PerfilEditionComponent, PerfilRemoveComponent, PerfilListComponent, RegisterComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
