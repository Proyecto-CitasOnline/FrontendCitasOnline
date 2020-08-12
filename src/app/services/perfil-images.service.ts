import { PerfilImageModel } from './../models/perfil-image.model';
import { UploadImageModel } from './../models/upload-image.model';

import { ServiceConfig } from 'src/app/config/service-config';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilImagesService {
  entity = 'images';
  token:String='';
  filter: String = '?filter={"include":[{"relation":"perfil"}]}';



  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<PerfilImageModel[]>{
    return this.http.get<PerfilImageModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${this.filter}`);
  }

  getRecordsByPerfilId(perfilId: String) : Observable<PerfilImageModel[]>{
    return this.http.get<PerfilImageModel[]>(`${ServiceConfig.BASE_URL}/perfiles/${perfilId}/imagenes`);
    
  }

  getRecordById(id: String) : Observable<PerfilImageModel>{
    return this.http.get<PerfilImageModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    
  }
  
  UploadPerfilImage(formData: FormData,  perfilId: String, order:Number): Observable<UploadImageModel>{
   return this.http.post<UploadImageModel>(`${ServiceConfig.BASE_URL}perfilImagen?perfilId=${perfilId}&order=${order}`, formData);

  }

  DeleteRecord(recordId: String): Observable<any> {
    return this.http.delete(`${ServiceConfig.BASE_URL}/perfil-imagen/${recordId}`)
   
  }
}

