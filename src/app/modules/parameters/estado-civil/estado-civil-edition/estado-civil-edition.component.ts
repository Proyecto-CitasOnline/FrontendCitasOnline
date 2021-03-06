import { EstadoCivilModel } from './../../../../models/parameters/estado-civil.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EstadoCivilService } from './../../../../services/parameters/estado-civil.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const showMessage: any;

@Component({
  selector: 'app-estado-civil-edition',
  templateUrl: './estado-civil-edition.component.html',
  styleUrls: ['./estado-civil-edition.component.css']
})
export class EstadoCivilEditionComponent implements OnInit {

  
  fgValidator: FormGroup;
  id: String;

  
  constructor(
    private fb: FormBuilder, 
    private service: EstadoCivilService,
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
          this.router.navigate(['/parameters/estado-civil-list']);
        }
      );
    } else {
      this.router.navigate(["/parameters/estado-civil-list"]);
    }
  }


  editRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
     
    } else {
     
      let model = this.getEstadoCivilData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Estado civil guardado correctamente!!");
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
    model.id = this.fgv.id.value;
    model.tipo = this.fgv.tipo.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}

