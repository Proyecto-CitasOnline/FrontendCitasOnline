import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/parameters/pais.service';
import { Router } from '@angular/router';
import { PaisModel } from 'src/app/models/parameters/pais.model';


declare const showMessage: any;

@Component({
  selector: 'app-pais-creation',
  templateUrl: './pais-creation.component.html',
  styleUrls: ['./pais-creation.component.css']
})
export class PaisCreationComponent implements OnInit {

  fgValidator: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private service: PaisService,
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
      console.log(this.fgValidator)
    } else {
      //showMessage("Registering..");
     
      let model = this.getPaisData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Pais guardado correctamente!!");
          this.router.navigate(['/parameters/pais-list']);
        },
        error => {
          console.log(error)
          showMessage("Error de guardado.");
        }
      );
    }
  }

  

   getPaisData(): PaisModel{
    let model = new PaisModel();
    model.Nombre = this.fgv.nombre.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
