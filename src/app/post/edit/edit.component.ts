import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  post: Post;
  form: FormGroup;
  
  constructor(
    public postService: MyserviceService,private route: ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
    
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    //console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(
      (Response) => {
      // console.log(Response);// this is use for fetch dataa from database in form of object, lhkan hu ga console
      const data = JSON.stringify(Response)  // is say data string main convert hu jataa he 
      // console.log(data) 
       this.post = JSON.parse(data) // is say data database say ataa he aur form main show karty han
       console.log('Post updated successfully!');
       this.router.navigateByUrl('post/index');
      },
      // (err) => console.log(err)
      )
  }
   

}
