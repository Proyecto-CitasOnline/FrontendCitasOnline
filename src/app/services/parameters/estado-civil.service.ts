import { SecurityService } from 'src/app/services/security.service';
import { ServiceConfig } from 'src/app/config/service-config';
import { EstadoCivilModel } from './../../models/parameters/estado-civil.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {
  entity='estado-civil';
  token:String='';

  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<EstadoCivilModel[]>{
    return this.http.get<EstadoCivilModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }
  
  saveNewRecord(record:EstadoCivilModel): Observable<EstadoCivilModel>{
  return this.http.post<EstadoCivilModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
  });
  }

  EditRecord(record:EstadoCivilModel): Observable<EstadoCivilModel>{
    return this.http.put<EstadoCivilModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
        Authorization:`Bearer ${this.token}`
      })
    });
    } 

}
