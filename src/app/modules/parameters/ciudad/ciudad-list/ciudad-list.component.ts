import { CiudadService } from './../../../../services/parameters/ciudad.service';
import { CiudadModel } from './../../../../models/parameters/ciudad.model';
import { Component, OnInit } from '@angular/core';

declare const showMessage:any;
declare const showRemoveConfirmationWindow: any;
@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css']
})
export class CiudadListComponent implements OnInit {

  recordList: CiudadModel[];

  constructor(private service: CiudadService) { }

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

  RemoveConfirmation (){
    showRemoveConfirmationWindow();
  }

}
