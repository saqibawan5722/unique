import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { ErrorhandlinService } from '../errorhandlin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginMode : boolean = true;
  error;
 // errMsgs = this.err.errormessage
  Form:FormGroup;

  constructor(private router:Router, private fb:FormBuilder ,
               private service:AuthserviceService, private err:ErrorhandlinService) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.Form.value)

    // use for signUp request
    const email = this.Form.value.email 
    const password = this.Form.value.password 
     if(this.loginMode){
      this.service.signIn(email, password).subscribe(res=>{
        console.log(res)
        this.router.navigateByUrl('post/index')
     },
     err=>{
      console.log(err)
      this.error = err

      // in this service cannot use
      // this.error = err.error.error.message

      // in this use service
      // this.error = this.errMsgs[err.error.error.message]


      // this if is use for show unkown msg , when net off, ya saab ham nay service main move kar deyaa 
      // if(!err.error || !err.error.error){
      //   this.error = this.errMsgs['UNKNOWN']
      // }else
      // {
      //   this.error = this.errMsgs[err.error.error.message] 
      // }

    })
      }


     else{
      this.service.signUp(email, password).subscribe(res=>{
        console.log(res)
     },
     err=>{
      console.log(err)
      this.error = err

      // in this service cannot use
      // this.error = err.error.error.message

      // in this use service
     // this.error = this.errMsgs[err.error.error.message]


     // this if is use for show unkown msg , when net off, ya saab ham nay service main move kar deyaa
    //  if(!err.error || !err.error.error){
    //    this.error = this.errMsgs['UNKNOWN']
    //  }else
    //  {
    //    this.error = this.errMsgs[err.error.error.message] 
    //  }

    })
  }
  
  }

  onforget(){
     this.router.navigateByUrl('/forget')
  }

  logMode(){
    this.loginMode = !this.loginMode;
    
  }

  

}
