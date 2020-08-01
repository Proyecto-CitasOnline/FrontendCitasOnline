import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsConfig} from '../../../config/form-config'
import {PerfilService} from '../../../services/perfil.service';
import { PerfilModel } from 'src/app/models/perfil.model';
import {M} from '../../../../../node_modules/materialize-css'
import { Router } from '@angular/router';

declare const showMessage: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator: FormGroup;
  nombreMinLength = FormsConfig.NOMBRE_MIN_LENGTH;
  telefonoMinLength = FormsConfig.TELEFONO_MIN_LENGTH;
  telefonoMaxLength = FormsConfig.TELEFONO_MAX_LENGTH;
  sexoMinLength = FormsConfig.SEXO_MIN_LENGTH;
  sexoMaxLength = FormsConfig.SEXO_MAX_LENGTH;
  civilMinLength = FormsConfig.CIVIL_MIN_LENGTH;






  constructor(
    private fb: FormBuilder, 
    private service: PerfilService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(this.nombreMinLength)]],
      correo: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(this.telefonoMinLength), Validators.maxLength(this.telefonoMaxLength)]],
      sexo: ['', [Validators.required, , Validators.minLength(this.sexoMinLength), Validators.maxLength(this.sexoMaxLength)]],
      fechaNacimiento: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required, , Validators.minLength(this.civilMinLength)]],
      orientacionSexual: ['',[Validators.required]]
    });
  }


  PerfilRegisterFn() {
    if (this.fgValidator.invalid) {
      showMessage("Invalid form..");
      console.log(this.fgValidator)
    } else {
      //showMessage("Registering..");
     
      let model = this.getPerfilData();
      this.service.PerfilRegistering(model).subscribe(
        data => {
          showMessage("Register Succesfully, you can find you password in your email inbox  ");
          this.router.navigate(['/security/login']);
        },
        error => {
          console.log(error)
          console.log(model)
          showMessage("Error Registering...");
        }
      );
    }
  }

  

  getPerfilData(): PerfilModel{
    let model = new PerfilModel();
    model.nombre = this.fgv.nombre.value;
    model.correo = this.fgv.correo.value;
    //model.bebedor = this.fgv.bebedor.value;
    model.estadoCivil = this.fgv.estadoCivil.value;
    model.fechaNacimiento = this.fgv.fechaNacimiento.value;
    //model.fumador = this.fgv.fumador.value;
    //model.hijos = this.fgv.hijos.value;
    //model.nivelEscolaridad = this.fgv.nivelEscolaridad.value;
    //model.ocupacion = this.fgv.ocupacion.value;
    model.sexo = this.fgv.sexo.value;
    model.phone = this.fgv.phone.value;
    model.orientacionSexual="Hombres";
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
