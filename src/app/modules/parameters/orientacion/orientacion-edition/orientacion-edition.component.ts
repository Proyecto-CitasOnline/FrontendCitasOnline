import { OrientacionModel } from './../../../../models/parameters/orientacion.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OrientacionService } from './../../../../services/parameters/orientacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const showMessage: any;

@Component({
  selector: 'app-orientacion-edition',
  templateUrl: './orientacion-edition.component.html',
  styleUrls: ['./orientacion-edition.component.css']
})
export class OrientacionEditionComponent implements OnInit {

  
  fgValidator: FormGroup;
  id: String;

  
  constructor(
    private fb: FormBuilder, 
    private service: OrientacionService,
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
      tipo: ['', [Validators.required]] 
    });
  }

  getDataOfRecord(){
    if (this.id) {
      this.service.getRecordById(this.id).subscribe(
        data => {
          this.fgv.id.setValue(this.id);
          this.fgv.tipo.setValue(data.tipo);
         
        },
        error => {
          showMessage("Record not found.");
          this.router.navigate(['/parameters/orientacion-list']);
        }
      );
    } else {
      this.router.navigate(["/parameters/orientacion-list"]);
    }
  }


  editRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      
    } else {
     
      let model = this.getOrientacionData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Orientacion sexual  guardada correctamente!!");
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
    model.id = this.fgv.id.value;
    model.tipo = this.fgv.tipo.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}

