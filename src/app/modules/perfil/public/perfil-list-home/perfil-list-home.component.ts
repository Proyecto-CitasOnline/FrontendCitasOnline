import { Component, OnInit } from '@angular/core';
import { PerfilModel } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-list-home',
  templateUrl: './perfil-list-home.component.html',
  styleUrls: ['./perfil-list-home.component.css']
})
export class PerfilListHomeComponent implements OnInit {

  perfilList: PerfilModel[];

  constructor(private service: PerfilService) { }

  ngOnInit(): void {
    this.getAllPerfil();
  }

  getAllPerfil(){
    this.service.getAllRecords().subscribe(
      data => {
        this.perfilList = data;
        console.log(this.perfilList)
      },
      err=>{}
    )
  }

  

}
