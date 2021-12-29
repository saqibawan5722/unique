import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { MyserviceService } from '../myservice.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  posts = [];
  post: Post; 

  constructor(private postService:MyserviceService, private service:AuthserviceService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe( 
      (Response) =>{
         console.log(Response);
         this.posts = Response;
    })   
  }


  deletePost(id) {
    this.postService.delete(id)
     if (confirm("You Want Delete This?")){
    console.log(id);  
    this.ngOnInit() 
}
}

  // deletePost(userId){
  //   if(confirm('Do you want to delete this?')){
  //      console.log(userId)
  //      this.http.delete('https://datapro-d01a4-default-rtdb.firebaseio.com/'+userId+ '.json')
  //          .subscribe(()=>{
  //       //this.ngOnInit()
  //     })
  //   }
  // }

  
   sginout(){
     this.service.SginOut()
   }
}
