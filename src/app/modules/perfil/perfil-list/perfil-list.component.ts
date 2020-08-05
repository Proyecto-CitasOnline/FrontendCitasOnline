import { Component, OnInit } from '@angular/core';
import { PerfilModel } from '../../../models/parameters/perfil.model';
import { PerfilService } from '../../../services/parameters/perfil.service';

declare const showMessage:any;

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  recordList: PerfilModel[];

  constructor(private service: PerfilService) { }

  ngOnInit(): void {
    this.fillRecords();
  }

  fillRecords(){
    this.service.getAllRecords().subscribe(
      data=>{
        this.recordList=data;
        console.log(this.recordList);
      },
      error=>{
        showMessage("Hay un error en la comunicación con el backend");
      }
    );
  }
}
