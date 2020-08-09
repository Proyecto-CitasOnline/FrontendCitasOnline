import { Router } from '@angular/router';
import { CiudadService } from './../../../../services/parameters/ciudad.service';
import { CiudadModel } from './../../../../models/parameters/ciudad.model';
import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/form-config';
import { NgxSpinnerService } from 'ngx-spinner';

declare const showMessage:any;
declare const showRemoveConfirmationWindow: any;
declare const closeModal: any;

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css']
})
export class CiudadListComponent implements OnInit {
  page: number = 1;
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: CiudadModel[];
  idToRemove: String = '';
  constructor(private service: CiudadService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.fillRecords();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

  }

  fillRecords() {
    this.service.getAllRecords().subscribe(
      data => {
        this.recordList = data;
        console.log(this.recordList);


      },
      error => {
        showMessage("Hay un error en la comunicación con el backend");
      }
    );
  }

  RemoveConfirmation(id) {
    this.idToRemove = id;
    showRemoveConfirmationWindow();
  }

  RemoveRecord() {
    closeModal('removeConfirmationModal');
    if (this.idToRemove) {
      this.service.DeleteRecord(this.idToRemove).subscribe(
        data => {
          this.idToRemove = '';
          showMessage("Ciudad removida exitosamente");
          this.fillRecords();
        },
        error => {
          showMessage("Hay un error en la comunicación con el backend");
        }
      );
    }
  }

}
