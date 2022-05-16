import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  Form:FormGroup;
  Editmode : boolean = false;

   mytoken = JSON.parse(localStorage.getItem('UserData'))._token;

  constructor( private fb:FormBuilder, private router:Router, private activeted:ActivatedRoute, private service:AuthserviceService)
   {
      console.log(this.mytoken)
  }

  ngOnInit(): void {
    this.Form = this.fb.group({
      name: ['',[Validators.required,]],
      photoUrl: ['',[Validators.required]]
    })


    this.activeted.queryParamMap.subscribe(res=>{
     // console.log(res.get('EditMode'))
     let qparams = res.get('EditMode')

     if(qparams !=null){
       this.Editmode = true;
     }
     else{
      this.Editmode = false;
     }
    })
  }


  onSubmit(){
    console.log(this.Form.value);
    // let udata = console.log({token: this.token , ...this.Form.value}) // is main token ko combine kiaa he
     let udata = {token: this.mytoken , ...this.Form.value};
     console.log(udata)
    this.service.updateProfile(udata).subscribe(
      
      res=>{
        console.log(res)
      },
      (err) => console.log(err),
    )

  }



  ondiscard(){
    this.router.navigate([], {queryParams: {EditMode:null}})
  }
}
