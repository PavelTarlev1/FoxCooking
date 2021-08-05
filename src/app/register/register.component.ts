
import { RegisterService } from './service/registerService';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MessageService ,PrimeNGConfig} from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostClient } from './model/postClient';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AlertService } from '../service/alert.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService, RegisterService]
})
export class RegisterComponent implements OnInit {

  loading = false;
  submitted = false;
  
  // let postModel: PostClient = null;

 registerUserform = new FormGroup({
  Name: new FormControl('',Validators.required),
  Age: new FormControl('',Validators.required),
  Password: new FormControl('',Validators.required),
  Email: new FormControl(''),
 });
  
  constructor(
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig, 
    private http:HttpClient, 
    private formBuilder: FormBuilder, 
    private registerService: RegisterService,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router,)
    
  { }



  ngOnInit() {
    this.primengConfig.ripple = true;
    this.registerUserform = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

get f() { return this.registerUserform.controls; }

onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.registerUserform.invalid) {
      return;
  }

  this.loading = true;
  this.userService.register(this.registerUserform.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['login-User']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}





