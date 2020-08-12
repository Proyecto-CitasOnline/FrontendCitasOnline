import { CiudadModel } from './../../../../models/parameters/ciudad.model';
import { Router } from '@angular/router';
import { CiudadService } from './../../../../services/parameters/ciudad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const showMessage: any;

@Component({
  selector: 'app-ciudad-creation',
  templateUrl: './ciudad-creation.component.html',
  styleUrls: ['./ciudad-creation.component.css']
})
export class CiudadCreationComponent implements OnInit {

  fgValidator: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private service: CiudadService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required]] 
    });
  }


  saveNewRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
     
    } else {
     
      let model = this.getCiudadData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Ciudad guardada correctamente.");
          this.router.navigate(['/parameters/ciudad-list']);
        },
        error => {
         
          showMessage("Ha ocurrido un error de guardado.");
        }
      );
    }
  }

  

   getCiudadData(): CiudadModel{
    let model = new CiudadModel();
    model.Nombre = this.fgv.nombre.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
