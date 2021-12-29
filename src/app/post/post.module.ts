import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent,
    LoginComponent,
    ForgetComponent,
    ChangepasswordComponent,
    ProfileComponent
    
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
],
//  providers:[
//    {
//      provide : HTTP_INTERCEPTORS,
//      useClass : AuthInterceptor,
//      multi : true
//    }
//  ]
})
export class PostModule { }
