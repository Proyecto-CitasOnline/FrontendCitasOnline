import { UnauthenticatedGuard } from './guards/unauthenticated.guard';
import { AdminAuthenticatedGuard } from './guards/admin-authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';

const routes: Routes = [
  {
    path:'home',
    component:DefaultComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'security',
    loadChildren:()=>import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path:'perfil',
    loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path:'parameters',
    loadChildren: () => import('./modules/parameters/parameters.module').then(m => m.ParametersModule),
    canActivate: [AdminAuthenticatedGuard]
  },
  {
    path:'informacion',
    loadChildren: () => import('./modules/informacion/informacion.module').then(m => m.InformacionModule),
    
  },
  

  /** This option always may be at the end */
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
