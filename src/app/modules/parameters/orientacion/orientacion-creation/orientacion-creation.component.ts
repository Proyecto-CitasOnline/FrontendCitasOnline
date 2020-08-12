import { Router } from '@angular/router';
import { OrientacionService } from './../../../../services/parameters/orientacion.service';
import { OrientacionModel } from './../../../../models/parameters/orientacion.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const showMessage: any;

@Component({
  selector: 'app-orientacion-creation',
  templateUrl: './orientacion-creation.component.html',
  styleUrls: ['./orientacion-creation.component.css']
})
export class OrientacionCreationComponent implements OnInit {

  fgValidator: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private service: OrientacionService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      tipo: ['', [Validators.required]] 
    });
  }


  saveNewRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      
    } else {
     
      let model = this.getOrientacionData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Orientación sexual guardada correctamente!!");
          this.router.navigate(['/parameters/orientacion-list']);
        },
        error => {
          showMessage("Ha ocurrido un error de guardado.");
        }
      );
    }
  }

  

   getOrientacionData(): OrientacionModel{
    let model = new OrientacionModel();
    model.tipo = this.fgv.tipo.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}