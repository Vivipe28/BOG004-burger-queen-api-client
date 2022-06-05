import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';
import { AuthService } from '../view-login/http.service';
import { menuService } from './menu-view.service';


@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  get orders(): Order[] {
    return this.menuViewService.items}

  get Total(): number {
    return this.menuViewService.Total;
  }
  constructor(private menuViewService: menuService,
    private authservice: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    console.log('you are out');
    this.authservice.logout()
  }
  deleteOrder(productToDelete: Order): void {
    this.menuViewService.deleteOrder(productToDelete)
  }

  getuser(){
    this.menuViewService.getUser().subscribe(
      res => {
        console.log(res);
        ;
      },
      err =>{
        console.log(err);
      }
    )
    
  }

}
