import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }  from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { Post } from './post';
import { catchError, exhaustMap, map, take } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  apiURL = 'https://datapro-d01a4-default-rtdb.firebaseio.com/posts.json';

    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Post=[];

  constructor( private http:HttpClient, private service:AuthserviceService) { }

  
// in this atach token for show dataa
  // getAll() {
  //  return this.service.User.pipe
  //  (take(1),
  //   exhaustMap(user=>{
  //     return this.http.get<Post>(this.apiURL,{
  //       params : new HttpParams().set('auth',user.token)
  //     });
  //   }
  //   ),
  //   map(resData=>{
  //     //console.log(resData);
  //    const userArray = [];
  //    for(const key in resData){
  //    //  console.log(resData[key])
  //    if(resData.hasOwnProperty(key)){
  //     userArray.push({userId:key, ...resData[key]})
  //    }
    
  //    }
  //    return userArray;
  //   })
  //   )}
 

//this is use for simple get data 

   getAll() {
    return this.http.get<Post>(this.apiURL)
     .pipe(map(resData=>{
       //console.log(resData);
      const userArray = [];
      for(const key in resData){
      //  console.log(resData[key])
      if(resData.hasOwnProperty(key)){
       userArray.push({userId:key, ...resData[key]})
      }
    
      }
      return userArray;
     }))
    
   }



  create(post) {
    return this.http.post<Post>(this.apiURL , post, this.httpOptions)
    
  } 
  

  find(userId) {
    return this.http.get<Post>('https://datapro-d01a4-default-rtdb.firebaseio.com/posts/'  + userId + '.json')
   
  }
   
  update(userId, post): Observable<Post> {
    return this.http.put<Post>('https://datapro-d01a4-default-rtdb.firebaseio.com/posts/'  + userId + '.json', post , this.httpOptions)
    
  }
   
   delete(userId){
     return this.http.delete('https://datapro-d01a4-default-rtdb.firebaseio.com/posts/'  + userId+ '.json', this.httpOptions)
     .subscribe((response)=>{   
        this.getAll() 
       }
       )      
  }

//   delete(id : number){
//     console.log(id);
// return this.http.delete(`${this.empurl}/${id}}, options`)
// .map(res => res.json())
// .catch(this.HandleErrorObservable);
// }
    
   
 
}
