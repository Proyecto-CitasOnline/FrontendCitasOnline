import { Component, OnInit } from '@angular/core';
import { PaisModel } from 'src/app/models/parameters/pais.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PaisService } from 'src/app/services/parameters/pais.service';

declare const showMessage: any;

@Component({
  selector: 'app-pais-edition',
  templateUrl: './pais-edition.component.html',
  styleUrls: ['./pais-edition.component.css']
})
export class PaisEditionComponent implements OnInit {

  
  fgValidator: FormGroup;
  id: String;

  
  constructor(
    private fb: FormBuilder, 
    private service: PaisService,
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
          this.router.navigate(['/parameters/pais-list']);
        }
      );
    } else {
      this.router.navigate(["/parameters/pais-list"]);
    }
  }


  editRecord() {
    if (this.fgValidator.invalid) {
      showMessage("Revise la información suministrada. Formatos inválidos.");
      
    } else {
     
      let model = this.getPaisData();
      this.service.EditRecord(model).subscribe(
        data => {
          showMessage("Pais guardado correctamente!!");
          this.router.navigate(['/parameters/pais-list']);
        },
        error => {
          showMessage("Ha ocurrido un error de guardado.");
        }
      );
    }
  }

  

   getPaisData(): PaisModel{
    let model = new PaisModel();
    model.id = this.fgv.id.value;
    model.Nombre = this.fgv.nombre.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
