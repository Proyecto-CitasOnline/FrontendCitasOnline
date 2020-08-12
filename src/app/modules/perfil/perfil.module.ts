import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilCreationComponent } from './perfil-creation/perfil-creation.component';
import { PerfilEditionComponent } from './perfil-edition/perfil-edition.component';
import { PerfilRemoveComponent } from './perfil-remove/perfil-remove.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfilImagesComponent } from './perfil-images/perfil-images.component';


@NgModule({
  declarations: [PerfilCreationComponent, PerfilEditionComponent, PerfilRemoveComponent, PerfilListComponent, RegisterComponent, PerfilImagesComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
  ],
  entryComponents:[],
  providers: [ ]
})
export class PerfilModule { }
