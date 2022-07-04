import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chefService } from 'src/app/services/chef.service';
import { AuthService } from 'src/app/services/http.service';
import { status } from '../models/status';

@Component({
  selector: 'app-view-chef',
  templateUrl: './view-chef.component.html',
  styleUrls: ['./view-chef.component.css']
})
export class ViewChefComponent implements OnInit {

  responseOrdersArray:any = [];

  deliveredOrder!:any;

  show = false;

  statusOrder = false;

  constructor(private chefService: chefService, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    
      this.chefService.getOrders().subscribe((resp)=> {
        this.responseOrdersArray = resp
      })
      
    }

  changeStatus(datetext:any, id:any, statusText:any, statusButton:any){
    this.show = true;
    let date = new Date;
    let today = date.toLocaleTimeString();
    datetext.value = today

    let statusChanged = {
      status: status[1],

    }
    
      this.chefService.patchStatus(statusChanged, id).subscribe((resp)=>{
      this.deliveredOrder = resp;
      statusText.value = this.deliveredOrder.status
      statusButton.style.backgroundColor = '#43f82b';
    })
  }

  deleteOrder(id:any){
    if(confirm('Estas seguro de eliminar la orden?')){ 
    this.chefService.deleteOrder(id).subscribe((resp)=>{
      this.chefService.getOrders().subscribe((resp)=> {
        this.responseOrdersArray = resp
      })
    })
    }
  }

  goMenu(){
    this.router.navigate(['/menu'])
  }

  logOut() {
    console.log('you are out');
    this.authservice.logout()
  }
  
}
