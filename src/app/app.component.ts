import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from './post/authservice.service';
import { CustomValidation } from './post/custom.validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'crudpro';

 

  public myForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder , private authservice:AuthserviceService) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), CustomValidation.noWhiteSpace]]
    })
  }
    
  get m(){
    return this.myForm.controls;
  }
   
  onSubmit(){
    console.log(this.myForm.value);
  }
  
  

       ngOnInit(){
          this.authservice.autosginIn()
  
        }

       
}
