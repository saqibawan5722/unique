import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  Form:FormGroup;

  constructor(private route:Router , private fb:FormBuilder, private service:AuthserviceService) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
     
    })
  }

  onback(){
    this.route.navigateByUrl('/login')
  }

  onSubmit(){
    console.log(this.Form.value);
    
    this.service.forgetpassword(this.Form.value).subscribe(res=>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }
}
