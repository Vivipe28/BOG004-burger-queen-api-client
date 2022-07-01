import { Component, OnInit } from '@angular/core';
import { chefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-view-chef',
  templateUrl: './view-chef.component.html',
  styleUrls: ['./view-chef.component.css']
})
export class ViewChefComponent implements OnInit {

  ordersArray:any = [];

  constructor(private chefService: chefService) { }


  ngOnInit(): void {
    
      this.chefService.getOrders().subscribe((resp)=> {
        this.ordersArray = resp
        this.ordersArray.forEach((order:any)=>{
          console.log(order.products);
          
        })
      })
    }
  
}
