import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthGuard implements CanActivate {

  constructor( private router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    let deltaAdmin = JSON.parse(localStorage.getItem('UserData'));
    let roles = deltaAdmin.roles;
    if (roles === 'manager') {
        return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
