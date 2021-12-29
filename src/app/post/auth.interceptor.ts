import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authservice.User.pipe
   (take(1),
    exhaustMap(user=>{
      if(!user){
        return next.handle(request);
      }
      const modifiedReq = request.clone({
        params : new HttpParams().set('auth', user.token)
      })
      return next.handle(modifiedReq);
    })
    
    )
  }
}
