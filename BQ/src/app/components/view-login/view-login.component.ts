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
    rol: '',
  };
  constructor(private router:Router, private infoService: InfoService) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    this.login = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
      rol: this.loginForm.value['rol']
    }
    this.infoService.login(this.login.email, this.login.password)
    .subscribe(
      (response) => {
        console.log(response.accessToken);
        sessionStorage.setItem('name', JSON.stringify(response.accessToken));
        // this.loginForm.value =response;
      }
    )
  }

  navigation(): void {
    this.router.navigate(['/menu'])
  }
}
