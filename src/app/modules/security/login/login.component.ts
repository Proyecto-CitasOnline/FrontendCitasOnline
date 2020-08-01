import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import {SecurityService} from '../../../services/security.service';
import MD5 from 'crypto-js/md5';

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
      showMessage("Invalid form..");
      console.log(this.fgValidator)
    } else {
      //showMessage("Registering..");
     
      let model = this.getLoginData();
      console.log(model);
      this.service.PerfilLogin(model).subscribe(
        data => {
          this.service.saveSessionData(data);
          showMessage("Welcome to your account");
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error)
          console.log(model)
          showMessage("Invalid data.");
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
