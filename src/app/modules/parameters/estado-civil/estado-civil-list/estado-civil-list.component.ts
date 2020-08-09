import { Router } from '@angular/router';
import { EstadoCivilService } from './../../../../services/parameters/estado-civil.service';
import { EstadoCivilModel } from './../../../../models/parameters/estado-civil.model';
import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/form-config';
import { NgxSpinnerService } from 'ngx-spinner';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeModal: any;
@Component({
  selector: 'app-estado-civil-list',
  templateUrl: './estado-civil-list.component.html',
  styleUrls: ['./estado-civil-list.component.css']
})
export class EstadoCivilListComponent implements OnInit {

  page: number = 1;
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: EstadoCivilModel[];
  idToRemove: String = '';
  constructor(private service: EstadoCivilService,
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
          showMessage("País removido exitosamente");
          this.fillRecords();
        },
        error => {
          showMessage("Hay un error en la comunicación con el backend");
        }
      );
    }
  }

}
