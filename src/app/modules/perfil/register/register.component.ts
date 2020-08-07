import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsConfig} from '../../../config/form-config'
import {PerfilService} from '../../../services/perfil.service';
import { PerfilModel } from 'src/app/models/perfil.model';
import {M} from '../../../../../node_modules/materialize-css'
import { Router } from '@angular/router';

declare const showMessage: any;
declare const initSelect: any;
declare const initDateP: any;

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
  

  constructor(
    private fb: FormBuilder, 
    private service: PerfilService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    initSelect();
    initDateP();
  
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(this.nombreMinLength)]],
      correo: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(this.telefonoMinLength), Validators.maxLength(this.telefonoMaxLength)]],
      sexo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      orientacionSexual: ['',[Validators.required]]
    });
  }


  PerfilRegisterFn() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      console.log(this.fgValidator)
    } else {
      //showMessage("Registering..");
     
      let model = this.getPerfilData();
      this.service.PerfilRegistering(model).subscribe(
        data => {
          showMessage("Registro completado con éxito, puede encontrar su contraseña en la bandeja de entrada de su correo electrónico.");
          this.router.navigate(['/security/login']);
        },
        error => {
          showMessage("Error de registro.");
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
    model.phone = this.fgv. phone.value;
    model.orientacionSexual= this.fgv.orientacionSexual.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
