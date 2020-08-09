import { PasswordResetModel } from './../models/security/password-reset.model';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/security/user.model';
import { ServiceConfig } from '../config/service-config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel);

  constructor(
    private http: HttpClient
  ) {
    this.verifyCurrentSession();
   }

  verifyCurrentSession(){
    let currentSession = this.getSessionData();
    if(currentSession){
      this.setUserData(JSON.parse(currentSession));
    }
  }

/**
 * Method to update user data.
 * @param user 
 */
  setUserData(user: UserModel){
    this.userData.next(user);
  }

  /**
   * Get user data status
   */
  getUserData(){
    return  this.userData.asObservable();
  }

  /**
   * Method to call Perfil POST in backend
   * @param perfil Perfil data to save
   */
  PerfilLogin(user: UserModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}login`, user, {
      headers: new HttpHeaders({})
    });
}

  PasswordReset(data: PasswordResetModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}contrasena-reset`, data, {
      headers: new HttpHeaders({})
    });
  }

/**
 * Method to update user data
 * @param sessionData User data and token
 */
saveSessionData(sessionData: any): Boolean {
  let currentSession = localStorage.getItem('session');
  if(currentSession){
    return false;
  }else{
    let data: UserModel = {
      id: sessionData.data.id,
      perfilId: sessionData.data.perfilId,
      correo: sessionData.data.correo,
      fechaNacimiento: sessionData.data.fechaNacimiento,
      rol: sessionData.data.rol,
      token: sessionData.token,
      isLogged: true
    };
    localStorage.setItem('session', JSON.stringify(data));
    this.setUserData(data);
    return true;
  }
};

/**
 * Return the current session data.
 */
getSessionData(){
  let currentSession = localStorage.getItem('session');
  return currentSession;
}

sessionExist(): Boolean{
  let currentSession=this.getSessionData();
  return (currentSession) ? true : false;
}

/**
 * Verify if user in session has the role of parameter
 * @param roleId role id to verify
 */
VerifyRolInSession(rolId): Boolean{
  let currentSession=JSON.parse(this.getSessionData());
  console.log(currentSession.rol);
  console.log(rolId);
  return (currentSession.rol == rolId) ? true : false;
}

getToken():String{
  let currentSession=JSON.parse(this.getSessionData());
  return currentSession.token;
}
/**
 * Clear session data.
 */
logout(){
  localStorage.removeItem('session');
  this.setUserData(new UserModel());

}

}
