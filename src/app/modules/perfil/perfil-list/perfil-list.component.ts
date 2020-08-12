import { Component, OnInit } from '@angular/core';
import { PerfilModel } from '../../../models/parameters/perfil.model';
import { PerfilService } from '../../../services/perfil.service';
import { FormsConfig } from 'src/app/config/form-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeModal: any;
@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  page: number = 1;
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: PerfilModel[];
  idToRemove: String = '';
  constructor(private service: PerfilService,
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
          showMessage("Perfil removido exitosamente");
          this.fillRecords();
        },
        error => {
          showMessage("Hay un error en la comunicación con el backend");
        }
      );
    }
  }

}