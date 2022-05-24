import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css']
})
export class ViewLoginComponent implements OnInit {
  
  mostrar(): void{
    alert('Atrapando el evento')
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigation(): void {
    this.router.navigate(['/menu'])
  }

}
