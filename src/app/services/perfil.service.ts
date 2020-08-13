import { Injectable, Predicate } from '@angular/core';
import { PerfilModel } from '../models/perfil.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ServiceConfig } from '../config/service-config'
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  entity = 'perfil';
  token:String='';
  filter: String = '?filter={"include":[{"relation":"ciudad"},{"relation":"pais"}, {"relation":"imagenes"}]}';



  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<PerfilModel[]>{
    return this.http.get<PerfilModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${this.filter}`);
  }

  getRecordById(id: String) : Observable<PerfilModel>{
    return this.http.get<PerfilModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    
  }
  
  saveNewRecord(record:PerfilModel): Observable<PerfilModel>{
  return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    })
  });
  }

  EditRecord(record:PerfilModel): Observable<PerfilModel>{
    return this.http.put<PerfilModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
    } 

    DeleteRecord(recordId: String): Observable<any> {
      return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
    }
  


  /**
   * Method to call Perfil POST in backend
   * @param perfil Perfil data to save
   */
  PerfilRegistering(perfil: PerfilModel): Observable<PerfilModel> {
    return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL}${this.entity}`, perfil, {
      headers: new HttpHeaders({})
    });
  }
}
