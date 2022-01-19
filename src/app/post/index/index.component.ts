import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { MyserviceService } from '../myservice.service';
import { Post } from '../post';
import { CdkDragDrop , moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  totalLength:any;
   public maxSize: number = 3;
   page : number = 1;
  // public directionLinks: boolean = true;
  perPage : number = 5;
  totalPages: number;
  currentPage:any = 1;
  pages: any;
  count:any;
  index: any = 1;
  posts = [];
  post: Post;
  no_data = false;
  
  firstname:any;

  constructor(private postService:MyserviceService, private service:AuthserviceService ) { }

  ngOnInit(): void {
  
    this.postService.getAll().subscribe( 

      (Response) =>{
         console.log(Response);
         this.posts = Response;
         this.totalLength = Response.length;

         this.onCheck();
    });  

  }

  onCheck(){
    if(this.totalLength <= 0)
    {
      this.no_data = true;
    }
    else{
      this.no_data = false;
    } 
  }

  //  this for pagination

  // setPage(pageDate:any){
  //   this.currentPage = pageDate.page;
  //   this.perPage = pageDate.perPage;
  //   this.index = this.currentPage;
  //   this.ngOnInit();
  // }



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


   //  this is for drag and drop
   onDrop(event : CdkDragDrop<string[]>){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
       
      );   
  }


  search(){
    if(this.firstname == ""){
      this.ngOnInit();
    }else{
      this.posts = this.posts.filter(res => {
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }
  
}
