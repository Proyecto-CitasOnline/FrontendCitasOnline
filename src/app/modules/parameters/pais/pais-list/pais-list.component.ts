import { PaisService } from './../../../../services/parameters/pais.service';
import { PaisModel } from './../../../../models/parameters/pais.model';
import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/form-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeModal: any;
@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  page: number = 1;
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: PaisModel[];
  idToRemove: String = '';
  constructor(private service: PaisService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.fillRecords();
    this.spinner.show();
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
