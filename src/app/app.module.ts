
import { environment } from './../environments/environment';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RippleModule } from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import { HomepageComponent } from './homepage/homepage.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { RecepiesCreateComponent } from './recepies/recepies-create/recepies-create.component';
import { RecepiesEditComponent } from './recepies/recepies-edit/recepies-edit.component';
import { JwtInterceptor } from './jwt Interceptor/jwt.interceptor';
import {ListboxModule} from 'primeng/listbox';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,

  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    FormsModule,
    RippleModule,
    RadioButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    //{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RecepiesCreateComponent,
    RecepiesEditComponent
  ]
  
})
export class AppModule { }
