import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css']
})
export class ViewLoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rol: new FormControl('')
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigation(): void {
    this.router.navigate(['/menu'])
  }

}
