import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from 'src/app/services/security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticatedGuard implements CanActivate {
  constructor(private secServices: SecurityService,
    private router: Router){
      
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.secServices.sessionExist() && this.secServices.VerifyRolInSession(ServiceConfig.ADMIN_ROL_ID)){
      return true;
    }else{
      this.router.navigate(["/home"]);
      return false;
    }
      
  }
  
  
}
