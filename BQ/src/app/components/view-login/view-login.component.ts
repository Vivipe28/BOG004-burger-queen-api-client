import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginObject } from '../models/LoginObject';
import { AuthService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css']
})
export class ViewLoginComponent implements OnInit {

  loginForm!: FormGroup;
  login: LoginObject = {
    email: '',
    password: '',
  };

  get emailControl():FormControl {
    return this.loginForm.get('email') as FormControl
  }

  get passwordControl():FormControl {
    return this.loginForm.get('password') as FormControl
  }
  
  constructor(private httpServices: AuthService, private router: Router) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }


  onSubmit(){
    this.login = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
    }
    this.httpServices.login(this.login.email, this.login.password)
    .subscribe((resp: any) => {
                console.log(resp);
                sessionStorage.setItem('token', JSON.stringify(resp.accessToken));
                localStorage.setItem('user', JSON.stringify(resp.user.roles));
                if (resp.user.roles.waiter) {
                    this.router.navigate(['/menu']);
                } else if (resp.user.roles.chef) {
                    this.router.navigate(['/chef']);
                } else if (resp.user.roles.admin) {
                    this.router.navigate(['/admin']);
                }
            })
    
}
}



