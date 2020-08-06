import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilModel } from '../../models/parameters/perfil.model';
import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  entity='perfil';
  token:String='';

  constructor(private http: HttpClient,private securityService: SecurityService) { 
    this.token=this.securityService.getToken();
  }

  getAllRecords() : Observable<PerfilModel[]>{
    return this.http.get<PerfilModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }
  
  saveNewRecord(record:PerfilModel): Observable<PerfilModel>{
  return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL}${this.entity}`,record,{
      headers: new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
  });
  }

}
