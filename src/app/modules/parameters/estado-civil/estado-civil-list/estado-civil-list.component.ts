import { EstadoCivilService } from './../../../../services/parameters/estado-civil.service';
import { EstadoCivilModel } from './../../../../models/parameters/estado-civil.model';
import { Component, OnInit } from '@angular/core';

declare const showMessage:any;
@Component({
  selector: 'app-estado-civil-list',
  templateUrl: './estado-civil-list.component.html',
  styleUrls: ['./estado-civil-list.component.css']
})
export class EstadoCivilListComponent implements OnInit {

  recordList: EstadoCivilModel[];

  constructor(private service: EstadoCivilService) { }

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
