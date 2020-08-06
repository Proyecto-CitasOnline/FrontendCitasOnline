import { OrientacionService } from './../../../../services/parameters/orientacion.service';
import { OrientacionModel } from './../../../../models/parameters/orientacion.model';
import { Component, OnInit } from '@angular/core';

declare const showMessage:any;

@Component({
  selector: 'app-orientacion-list',
  templateUrl: './orientacion-list.component.html',
  styleUrls: ['./orientacion-list.component.css']
})
export class OrientacionListComponent implements OnInit {

  recordList: OrientacionModel[];

  constructor(private service: OrientacionService) { }

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
