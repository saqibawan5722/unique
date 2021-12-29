import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgaurdGuard } from './authgaurd.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ForgetComponent } from './forget/forget.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login' , component: LoginComponent},
  // { path: 'auth' , component: AuthComponent},
  { path: 'forget' , component: ForgetComponent},
  { path: 'post/index', canActivate:[AuthgaurdGuard], component: IndexComponent, },
  { path: 'post/:postId/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent }, 
  { path: 'post/profile' , component: ProfileComponent},
  { path: 'post/changepassword' , component: ChangepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
