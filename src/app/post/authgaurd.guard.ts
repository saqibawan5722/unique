import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {

  constructor( private service:AuthserviceService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   // return true;

     return this.service.User.pipe(
       take(1),
       map(res =>{
        // return res? true : false;  // ya jab use karty han to page bilkal empty nazar ataa he

        if(res){
          return true
        }

        return this.router.createUrlTree(['login'])
       })
     ) 
  }
  
}
