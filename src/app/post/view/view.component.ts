import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id: number;
  post?: Post;
   
  constructor(
    public postService: MyserviceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
      
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
  

}
