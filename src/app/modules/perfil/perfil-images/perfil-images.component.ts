import { NgxSpinnerService } from 'ngx-spinner';
import { PerfilImageModel } from './../../../models/perfil-image.model';
import { PerfilImagesService } from './../../../services/perfil-images.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/form-config';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeModal: any;
@Component({
  selector: 'app-perfil-images',
  templateUrl: './perfil-images.component.html',
  styleUrls: ['./perfil-images.component.css']
})
export class PerfilImagesComponent implements OnInit {
  fgValidator: FormGroup;
  perfilId: String;
  imagesList: PerfilImageModel[];
  page: number = 1;
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;
  idToRemove: String ;

  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private service: PerfilImagesService) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.perfilId = this.route.snapshot.params["id"];
    this.fgv.perfilId.setValue(this.perfilId);
    this.spinner.show();
    this.getAllImagesByPerfilId();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  getAllImagesByPerfilId(){
    this.service.getRecordsByPerfilId(this.perfilId).subscribe(
      data =>{
        this.imagesList = data;
      },
      err =>{
        showMessage("Error cargando las imagenes actuales del perfil");
      }
    );
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      ruta: ['', [Validators.required]],
      order: ['', [Validators.required]],
      perfilId: ['', [Validators.required]]
     
      
    });
  }
  

  UploadImageFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario incompleto.");
    } else {
      const formData = new FormData();
      formData.append('file', this.fgv.ruta.value);
      this.service.UploadPerfilImage(formData, this.fgv.perfilId.value,this.fgv.order.value).subscribe(
        data => {
          this.fgv.ruta.setValue(data.filename);
          showMessage("La imagen ha sido subida correctamente.");
          
        },
        err => {
          showMessage("Ha ocurrido un error al subir la imagen.");
        }
      );
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fgv.ruta.setValue(file);
    }
  }

  get fgv() {
    return this.fgValidator.controls;
  }

  RemoveImage(){
    closeModal('removeConfirmationModal');
    this.service.DeleteRecord(this.idToRemove).subscribe(
      data=>{
        showMessage("La imagen ha sido eliminada correctamente.");
        this.getAllImagesByPerfilId();
      },
      err =>{
        showMessage("Ha ocurrido un error eliminando la imagen.");
        
      }
    )
  }

  RemoveConfirmation(id) {
    this.idToRemove = id;
    showRemoveConfirmationWindow();
  }

  

}


