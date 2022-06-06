import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/components/models/order';
import { NotifierService } from 'src/app/services/notifier.service';
import { AuthService } from '../../services/http.service';
import { menuService } from '../../services/menu-view.service';


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
    private authservice: AuthService, private snackservice: NotifierService) { }

  ngOnInit(): void {
    // ejemplo de productos
    // this.productsItem = [
    //   {
    //     id: 0,
    //     qty: 0,
    //     name: 'Café Americano',
    //     price: 5,
    //   },
    //   {
    //     id: 1,
    //     qty: 1,
    //     name: 'Agua',
    //     price: 500,
    //   },
    //   {
    //     id: 0,
    //     qty: 1,
    //     name: 'Gaseosa',
    //     price: 5000,
    //   },
    //   {
    //     id: 0,
    //     qty: 1,
    //     name: 'Gaseosa',
    //     price: 5000,
    //   },
    // ]
  }

  logOut(){
    
    console.log('you are out');
    this.authservice.logout()
  }
  deleteOrder(productToDelete: Order): void {
    this.menuViewService.deleteOrder(productToDelete)
  }

  getuser(){
    this.snackservice.showNotification('error', 'OK');
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
