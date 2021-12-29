import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  mytoken = JSON.parse(localStorage.getItem('UserData'))._token;

  Form:FormGroup;
  constructor( private service:AuthserviceService, private fb:FormBuilder) { 
    console.log(this.mytoken);
    
  }

  ngOnInit(): void {
    this.Form = this.fb.group({
      password: ['',[Validators.required,]],
     
    })
  }

  onSubmit(){
     console.log(this.Form.value);
    //  let udata = console.log({token: this.token , ...this.Form.value}) // is main token ko combine kiaa he
     let udata = {token: this.mytoken , ...this.Form.value};
     console.log(udata);
    this.service.changepassword(udata).subscribe(  
     res=>{
        console.log(res)
      },
      (err) => console.log(err),
    )

  }


  // onSubmit(){
  //   if(this.Form.valid){
  //        // console.log(this.Form.value);
  //   //  let udata = console.log({token: this.token , ...this.Form.value}) // is main token ko combine kiaa he
  //    let udata = {token: this.mytoken , ...this.Form.value};
  //    console.log(udata);
  //   this.service.changepassword(udata).subscribe(  
  //    res=>{
  //       console.log(res)
  //     })
  //   }
  //   else
  //   {
  //     let key = Object.keys(this.Form.controls);
  //     key.filter(data=>{
  //       let control = this.Form.controls[data];
  //       if(control.errors!=null)
  //       {
  //         control.markAllAsTouched();
  //       }
  //     })
  //   }

    
  // }

}
