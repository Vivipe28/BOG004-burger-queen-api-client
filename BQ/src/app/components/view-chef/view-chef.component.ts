import { Component, OnInit } from '@angular/core';
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

  constructor(private chefService: chefService, private authservice: AuthService) { }

  ngOnInit(): void {
    
      this.chefService.getOrders().subscribe((resp)=> {
        this.responseOrdersArray = resp
      })
    }

  changeStatus(datetext:any, id:any, statusText:any){
    this.show = true;
    let date = new Date;
    let today = date.toLocaleString();
    datetext.value = today

    let statusChanged = {
      status: status[1]
    }

    this.chefService.patchStatus(statusChanged, id).subscribe((resp)=>{
      this.deliveredOrder = resp;
      statusText.value = this.deliveredOrder.status
    })
  }

  deleteOrder(id:any){
    this.chefService.deleteOrder(id).subscribe((resp)=>{
      this.chefService.getOrders().subscribe((resp)=> {
        this.responseOrdersArray = resp
      })
    })
  }

  logOut() {
    console.log('you are out');
    this.authservice.logout()
  }
  
}
