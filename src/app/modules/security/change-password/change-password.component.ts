import { ChangePasswordModel } from './../../../models/security/change-password.model';
import { SecurityService } from 'src/app/services/security.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/security/user.model';
import { MD5 } from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const showMessage: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
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
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      newPassword2: ['', [Validators.required]],
    });
  }

/**
 * Method to validate credentials of a user 
 */
ChangePasswordFn() {
    if (this.fgValidator.invalid || (this.fgv.newPassword.value != this.fgv.newPassword2.value)) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
    } else {
      let model = this.getPasswordData();
      this.service.ChangePassword(model).subscribe(
        data => {
          showMessage("Tu contraseña ha sido modificada correctamente. ");
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
  getPasswordData(): ChangePasswordModel {
    let model = new ChangePasswordModel();
    model.id = this.service.getUserId();
    model.currentPassword = MD5(this.fgv.currentPassword.value).toString();
    model.newPassword = MD5(this.fgv.newPassword.value).toString();
    model.newPassword2 = MD5(this.fgv.newPassword2.value).toString();
    return model;
  }  
  get fgv() {
    return this.fgValidator.controls;
  }

}
