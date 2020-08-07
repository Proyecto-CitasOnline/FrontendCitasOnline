import { OrientacionService } from './../../../../services/parameters/orientacion.service';
import { OrientacionModel } from './../../../../models/parameters/orientacion.model';
import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/form-config';
import { NgxSpinnerService } from 'ngx-spinner';

declare const showMessage:any;

@Component({
  selector: 'app-orientacion-list',
  templateUrl: './orientacion-list.component.html',
  styleUrls: ['./orientacion-list.component.css']
})
export class OrientacionListComponent implements OnInit {

  page: number = 1;
  itemsPageAmount : number = FormsConfig.ITEMS_PER_PAGE;
  recordList: OrientacionModel[];
  constructor(private service: OrientacionService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.fillRecords();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    
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
