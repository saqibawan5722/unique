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

//  for drag and drop
import { DragDropModule } from '@angular/cdk/drag-drop';

// for pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';


// for Ngxs state management
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';




@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent,
    LoginComponent,
    ForgetComponent,
    ChangepasswordComponent,
    ProfileComponent,
    PaginationComponent
    
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    NgxPaginationModule,


    
    // for ngxs state management
    NgxsModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()

   
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
