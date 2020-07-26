import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

fgValidator: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email:['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(14)]],
      sexo:['', [Validators.required, , Validators.minLength(8), Validators.maxLength(9)]],
      fecha: ['', [Validators.required]],
      civil :['', [Validators.required, , Validators.minLength(4)]]
    });
  }

  PerfilRegisterFn(){
    if(this.fgValidator.invalid){
      alert("Invalid form..");
      return false;

    }
    alert("Registering..");
    return false;
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
