import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../../services/info.service'
import { LoginObject } from '../models/LoginObject'

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
    // rol: '',
  };
  userData: any;

  constructor(private router:Router, private infoService: InfoService) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      // rol: new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    this.login = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
      // rol: this.loginForm.value['rol']
    }
    this.infoService.login(this.login.email, this.login.password)
    .subscribe(
      (response) => {
        console.log(response)
        if (response) {
          this.userData = response;
          sessionStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(sessionStorage.getItem('user')!);
          // JSON.parse(localStorage.getItem('user')!);
        } else {
          sessionStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
        // console.log(response.accessToken); //mostrando el HTTP request 
        // sessionStorage.setItem('name', JSON.stringify(response));
        // this.router.navigate(['/menu'])
        // this.loginForm.value =response;
      }
      get isLoggedIn(): boolean {
        const user = JSON.parse(sessionStorage.getItem('user'));
        return user !== 'null' ? true : false;
      }
}



