import { Injectable, Predicate } from '@angular/core';
import { PerfilModel } from '../models/perfil.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ServiceConfig } from '../config/service-config'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  entity = 'perfil';

  constructor(
    private http: HttpClient
  ) { }

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
