import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './public/home/default/default.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { SideMenuComponent } from './public/master-page/side-menu/side-menu.component';
import {HttpClientModule} from '@angular/common/http';
import { PerfilModule } from './modules/perfil/perfil.module';
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeroComponent,
    FooterComponent,
    NavbarComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    PerfilModule,
    

  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
