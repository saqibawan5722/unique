import { Component } from '@angular/core';
import { AuthserviceService } from './post/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'crudpro';
  
  constructor(private authservice:AuthserviceService){}

       ngOnInit(){
          this.authservice.autosginIn();
    
       }

       
}
