import { MD5 } from 'crypto-js/md5';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import {SecurityService} from '../../../services/security.service';


declare const showMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidator: FormGroup;
 

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
      console.log(this.fgValidator)
    } else {
      //showMessage("Registering..");
     
      let model = this.getLoginData();
      console.log(model);
      this.service.PerfilLogin(model).subscribe(
        data => {
          this.service.saveSessionData(data);
          showMessage("Bienvenido a Matching");
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
