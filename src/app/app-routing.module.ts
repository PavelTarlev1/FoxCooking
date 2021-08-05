import { RecepiesCreateComponent } from './recepies/recepies-create/recepies-create.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { hostViewClassName, HtmlParser } from '@angular/compiler';
import { NgModule, Component, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecepiesEditComponent } from './recepies/recepies-edit/recepies-edit.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'register-User', component: RegisterComponent },
      { path: 'login-User', component: LoginComponent },
      { path: 'register-Recepie',component:RecepiesCreateComponent},
      { path: 'edit-Recepie', component: RecepiesEditComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

