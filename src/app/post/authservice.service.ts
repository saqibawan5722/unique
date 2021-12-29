import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Authresponse } from './authresponse';
import { ErrorhandlinService } from './errorhandlin.service';
import { UserdatastoreModule } from './userdatastore/userdatastore.module';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  api_key = 'AIzaSyCKiehybCXEE1fS3bGkX0FVLsUHYVi4ul0';

  User = new BehaviorSubject<UserdatastoreModule>(null)
  // user = new Subject<UserdatastoreModule>()
 
  private tokenExpirationTimer : any;   // jab ham khud sginout kar day tab auto sgin out walaa process khatam hu jeay

  constructor( private http:HttpClient, private errorservice:ErrorhandlinService, private router:Router) {}

  signUp(email , password){
    return this.http.post<Authresponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true
     }).pipe(
       catchError(err=>{
      return this.errorservice.errorHandler(err)
     }),
       tap(res=>{
        this.authenticatedUser(res.email, res.idToken , res.localId, +res.expiresIn)
       })
     )
  }


  signIn(email , password){
    return this.http.post<Authresponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true
     }).pipe(
      catchError(err=>{
     return this.errorservice.errorHandler(err)
    }),  // tap is use for store authenticated user data
        tap(res=>{
            this.authenticatedUser(res.email, res.idToken, res.localId, +res.expiresIn)
          })
    )
  }


    SginOut(){

      this.router.navigateByUrl('login')
      localStorage.removeItem('UserData')   // local storage ko bhi remove kar deta
      
      if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer)
      }
       this.tokenExpirationTimer=null;
    }
    


   // is main kuch dyr bhaad sgin out hu jeay gaa
    autosginOut(expirationDuration:number){
      this.tokenExpirationTimer = setTimeout(() => {
         this.SginOut()
        }, expirationDuration);
    }



   // is main data store hu jata local storage walaa , aur ya automatically data use kar kay sginIn kar detaa he
   autosginIn(){

      const userdata = JSON.parse(localStorage.getItem('UserData'));
      console.log(userdata)  
          if(!userdata){
                return;
          }
        const logedInUser = new UserdatastoreModule(userdata.email, userdata.id, userdata._token , new Date(userdata._tokenExpirationDate))
        console.log(logedInUser)  // use for change date method
          if(logedInUser.token){
              this.User.next(logedInUser);

        const expirationDuration =  new Date(userdata._tokenExpirationDate).getTime() - new Date().getTime()
        this.autosginOut(expirationDuration);

              }
          }

   
  // this is use for store authenticated user data

  authenticatedUser( email , id , token , expiresIn){

       const expirationDate = new Date(new Date().getTime() +expiresIn*1000)
       const user = new UserdatastoreModule( email , id , token , expirationDate)
       this.User.next(user); // storing data in user subject
      // console.log('user =>', user);

        this.autosginOut(expiresIn*1000)  // ik second main 1000 mili second huty

       localStorage.setItem('UserData', JSON.stringify(user));  // storing data in local storage
  }



  // this is create from rest api (google),
  updateProfile(data){
   return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:update?key='+this.api_key,{

      idToken:data.token,
      displayName:data.name,
      photoUrl:data.picture,
      returnSecureToken:true
    })
    .pipe(
      catchError(err=>{
     return this.errorservice.errorHandler(err)
    }), 
       
    )
  }


  changepassword(userdatastore){
    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:update?key='+this.api_key,{
 
       idToken:userdatastore.token,
       password:userdatastore.password,
       returnSecureToken:true
     })
     .pipe(
       catchError(err=>{
      return this.errorservice.errorHandler(err)
     }), 
        
     )
   }



   forgetpassword(data){
    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key='+this.api_key,{

      requestType:'PASSWORD_RESET',
      email:data.email
    })
    .pipe(
      catchError(err=>{
     return this.errorservice.errorHandler(err)
    }), 
       
    )
   }
}
