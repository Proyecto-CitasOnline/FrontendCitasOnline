import { MD5 } from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/security/user.model';
import {SecurityService} from '../../../services/security.service';


declare const showMessage: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LdNI74ZAAAAAP5trJFNAFsN-yhWgYEpn4rJbVLr"></re-captcha>`,
})
export class LoginComponent implements OnInit {
  

  fgValidator: FormGroup;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
   }

  constructor(
    private fb: FormBuilder, 
    private service: SecurityService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      
    });
  }

/**
 * Method to validate credentials of a user 
 */
  LoginPerfilFn() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      
    } else {
     
      let model = this.getLoginData();
      this.service.PerfilLogin(model).subscribe(
        data => {
          this.service.saveSessionData(data);
          
          showMessage("Bienvenido a Matching. Ten seguridad en que encontrarás lo que buscas. Esperamos cumplir todas las expectativas que tengas.");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Datos inválidos.");
        }
      );
    }
  }
  
/**
 * Get user data in model
 */
  getLoginData(): UserModel {
    let model = new UserModel();
    model.correo = this.fgv.correo.value;
    model.password = MD5(this.fgv.password.value).toString();

    return model;
  }  
  get fgv() {
    return this.fgValidator.controls;
  }
}
