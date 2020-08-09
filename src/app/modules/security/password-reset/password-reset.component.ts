import { PasswordResetModel } from './../../../models/security/password-reset.model';
import { SecurityService } from 'src/app/services/security.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/security/user.model';
import { MD5 } from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const showMessage: any;

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

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
      type: ['', [Validators.required]],
      
    });
  }

/**
 * Method to validate credentials of a user 
 */
  PasswordResetFn() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
    } else {
     
      let model = this.getPasswordData();
      console.log(model);
      this.service.PasswordReset(model).subscribe(
        data => {
          showMessage("Tu contraseña ha sido modificada correctamente. Por favor revisa tu correo electrónico o tu telefono.");
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
  getPasswordData(): PasswordResetModel {
    let model = new PasswordResetModel();
    model.correo = this.fgv.correo.value;
    model.type = parseInt(this.fgv.type.value);

    return model;
  }  
  get fgv() {
    return this.fgValidator.controls;
  }

}
