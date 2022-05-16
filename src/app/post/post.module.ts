import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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


// for ngx-translate
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";
import { DirectiveDirective } from './directive.directive';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';






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
    PaginationComponent,
    DirectiveDirective,
    AdminComponent,
    ManagerComponent,
    
    
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    NgxPaginationModule,


    
    //use model for ngx-translate
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),


    // for ngxs state management
    NgxsModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()

   
],

exports : [
  HttpClientModule,
  TranslateModule,
  

],

  //  providers:[
  //    {
  //    provide : HTTP_INTERCEPTORS,
  //    useClass : AuthInterceptor,
  //     multi : true
  //    }
  //  ]
})

export class PostModule { 
  
 }

export function HttpLoaderFactory(http: HttpClient) {
     return new MultiTranslateHttpLoader(http, [
         {prefix: "./assets/translate/post/login/", suffix: ".json"},
         {prefix: "./assets/translate/index/", suffix: ".json"},
     ]);
   }
