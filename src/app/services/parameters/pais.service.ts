import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from 'src/app/services/security.service';
import { PaisModel } from './../../models/parameters/pais.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  entity='pais';
  token:String='';

  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }
  
  saveNewRecord(record:PaisModel): Observable<PaisModel>{
  return this.http.post<PaisModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    })
  });
  }

  EditRecord(record:PaisModel): Observable<PaisModel>{
    return this.http.put<PaisModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
    } 

   
}
