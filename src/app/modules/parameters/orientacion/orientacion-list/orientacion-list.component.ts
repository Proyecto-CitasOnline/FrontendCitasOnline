import { Router } from '@angular/router';
import { OrientacionService } from './../../../../services/parameters/orientacion.service';
import { OrientacionModel } from './../../../../models/parameters/orientacion.model';
import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/form-config';
import { NgxSpinnerService } from 'ngx-spinner';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeModal: any;
@Component({
  selector: 'app-orientacion-list',
  templateUrl: './orientacion-list.component.html',
  styleUrls: ['./orientacion-list.component.css']
})
export class OrientacionListComponent implements OnInit {

  page: number = 1;
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: OrientacionModel[];
  idToRemove: String = '';
  constructor(private service: OrientacionService,
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
          showMessage("Orientación sexual removida exitosamente");
          this.fillRecords();
        },
        error => {
          showMessage("Hay un error en la comunicación con el backend");
        }
      );
    }
  }

}
