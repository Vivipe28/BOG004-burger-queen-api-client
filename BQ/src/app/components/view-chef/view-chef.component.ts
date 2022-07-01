import { Component, OnInit } from '@angular/core';
import { chefService } from 'src/app/services/chef.service';
import { Order } from '../models/order';
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

  constructor(private chefService: chefService) { }

  ngOnInit(): void {
    
      this.chefService.getOrders().subscribe((resp)=> {
        this.responseOrdersArray = resp
        console.log(this.responseOrdersArray);
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
      console.log(this.deliveredOrder.status);
    })
  }

  
  
}
