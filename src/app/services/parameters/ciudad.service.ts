import { SecurityService } from 'src/app/services/security.service';
import { CiudadModel } from './../../models/parameters/ciudad.model';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  entity='ciudad';
  token:String='';

  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<CiudadModel[]>{
    return this.http.get<CiudadModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  getRecordById(id: String) : Observable<CiudadModel>{
    return this.http.get<CiudadModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    
  }
  
  saveNewRecord(record:CiudadModel): Observable<CiudadModel>{
  return this.http.post<CiudadModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    })
  });
  }

  EditRecord(record:CiudadModel): Observable<CiudadModel>{
    return this.http.put<CiudadModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`,record,{
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
  
}
