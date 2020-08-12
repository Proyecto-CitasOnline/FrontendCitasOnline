import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/form-config';
import { CiudadModel } from 'src/app/models/parameters/ciudad.model';
import { PaisModel } from 'src/app/models/parameters/pais.model';
import { PerfilService } from 'src/app/services/perfil.service';
import { CiudadService } from 'src/app/services/parameters/ciudad.service';
import { PaisService } from 'src/app/services/parameters/pais.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilModel } from 'src/app/models/perfil.model';

declare const showMessage: any;
declare const initSelect: any;
declare const initDateP: any;

@Component({
  selector: 'app-perfil-edition',
  templateUrl: './perfil-edition.component.html',
  styleUrls: ['./perfil-edition.component.css']
})
export class PerfilEditionComponent implements OnInit {

  fgValidator: FormGroup;
  nombreMinLength = FormsConfig.NOMBRE_MIN_LENGTH;
  telefonoMinLength = FormsConfig.TELEFONO_MIN_LENGTH;
  telefonoMaxLength = FormsConfig.TELEFONO_MAX_LENGTH;
  ciudadList: CiudadModel[];
  paisList: PaisModel[];


  constructor(
    private fb: FormBuilder, 
    private service: PerfilService,
    private ciudadService: CiudadService,
    private paisService: PaisService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllCiudades;
    this.getAllPaises;
    this.FormBuilding();
    this.fillFields();
    initSelect();
    initDateP();
  
  }

  fillFields(){
    let id = this.route.snapshot.params["id"];
    this.service.getRecordById(id).subscribe(
      data => {
        this.fgv.id.setValue(data.id);
        this.fgv.nombre.setValue(data.nombre);
        this.fgv.correo.setValue(data.correo);
        this.fgv.sexo.setValue(data.sexo);
        this.fgv.estadoCivil.setValue(data.estadoCivil);
        this.fgv.nivelEscolaridad.setValue(data.nivelEscolaridad);
        this.fgv.orientacionSexual.setValue(data.orientacionSexual);
        this.fgv.fechaNacimiento.setValue(data.fechaNacimiento);
        this.fgv.phone.setValue(data.phone);
        this.fgv.ciudadId.setValue(data.ciudadId);
        this.fgv.paisId.setValue(data.paisId);
      },
      error => {
        showMessage("Record no encontrado");
        this.router.navigate(["/perfil/list"])
      }
    );
  }

  getAllCiudades() {
    this.ciudadService.getAllRecords().subscribe(
      data => {
        this.ciudadList = data;
        setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error cargando las ciudades");
      }
    );
  }

  getAllPaises() {
    this.paisService.getAllRecords().subscribe(
      data => {
        this.paisList = data;
        setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error cargando los paises");
      }
    );
  }



  FormBuilding() {
    this.fgValidator = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(this.nombreMinLength)]],
      correo: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(this.telefonoMinLength), Validators.maxLength(this.telefonoMaxLength)]],
      sexo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      orientacionSexual: ['',[Validators.required]],
      ciudadId: ['', [Validators.required]],
      paisId: ['', [Validators.required]],

    });
  }


  EditRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      
    } else {
     
      let model = this.getRecordData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Registro completado con éxito, puede encontrar su contraseña en la bandeja de entrada de su correo electrónico.");
          this.router.navigate(['/security/login']);
        },
        error => {
          showMessage("Ha ocurrido un error de registro.");
        }
      );
    }
  }

  

  getRecordData(): PerfilModel{
    let model = new PerfilModel();
    model.id = this.fgv.id.value;
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
    model.ciudadId = this.fgv.ciudadId.value;
    model.paisId = this.fgv.paisId.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
