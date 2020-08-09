import { SecurityService } from 'src/app/services/security.service';
import { ServiceConfig } from 'src/app/config/service-config';
import { OrientacionModel } from './../../models/parameters/orientacion.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrientacionService {

  entity='orientacion';
  token:String='';

  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<OrientacionModel[]>{
    return this.http.get<OrientacionModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  getRecordById(id: String) : Observable<OrientacionModel>{
    return this.http.get<OrientacionModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
    
  }
  
  saveNewRecord(record:OrientacionModel): Observable<OrientacionModel>{
  return this.http.post<OrientacionModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    })
  });
  }

  EditRecord(record:OrientacionModel): Observable<OrientacionModel>{
    return this.http.put<OrientacionModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`,record,{
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