import { EstadoCivilModel } from './../../../../models/parameters/estado-civil.model';
import { Router } from '@angular/router';
import { EstadoCivilService } from './../../../../services/parameters/estado-civil.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const showMessage: any;

@Component({
  selector: 'app-estado-civil-creation',
  templateUrl: './estado-civil-creation.component.html',
  styleUrls: ['./estado-civil-creation.component.css']
})
export class EstadoCivilCreationComponent implements OnInit {

  fgValidator: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private service: EstadoCivilService,
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
     
      let model = this.getEstadoCivilData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("EstadoCivil guardado correctamente!!");
          this.router.navigate(['/parameters/estado-civil-list']);
        },
        error => {
         
          showMessage("Ha ocurrido un error de guardado.");
        }
      );
    }
  }

  

   getEstadoCivilData(): EstadoCivilModel{
    let model = new EstadoCivilModel();
    model.tipo = this.fgv.tipo.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}