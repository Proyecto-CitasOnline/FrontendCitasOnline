import { CiudadModel } from './../../../../models/parameters/ciudad.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from './../../../../services/parameters/ciudad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const showMessage: any;

@Component({
  selector: 'app-ciudad-edition',
  templateUrl: './ciudad-edition.component.html',
  styleUrls: ['./ciudad-edition.component.css']
})
export class CiudadEditionComponent implements OnInit {

  
  fgValidator: FormGroup;
  id: String;

  
  constructor(
    private fb: FormBuilder, 
    private service: CiudadService,
    private router: Router,
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.params["id"];
     
    }
    

  ngOnInit(): void {
    this.FormBuilding();
    this.getDataOfRecord();

    
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]] 
    });
  }

  getDataOfRecord(){
    if (this.id) {
      this.service.getRecordById(this.id).subscribe(
        data => {
          
          this.fgv.id.setValue(this.id);
          this.fgv.nombre.setValue(data.Nombre);
         
        },
        error => {
          showMessage("Record not found.");
          this.router.navigate(['/parameters/ciudad-list']);
        }
      );
    } else {
      this.router.navigate(["/parameters/ciudad-list"]);
    }
  }


  editRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      
    } else {
     
      let model = this.getCiudadData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Ciudad guardada correctamente!!");
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
    model.id = this.fgv.id.value;
    model.Nombre = this.fgv.nombre.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}

