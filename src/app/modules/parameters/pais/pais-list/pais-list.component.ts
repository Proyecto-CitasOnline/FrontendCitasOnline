import { PaisService } from './../../../../services/parameters/pais.service';
import { PaisModel } from './../../../../models/parameters/pais.model';
import { Component, OnInit } from '@angular/core';

declare const showMessage:any;
@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  recordList: PaisModel[];

  constructor(private service: PaisService) { }

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
