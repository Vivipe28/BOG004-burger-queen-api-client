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

  public products: any = [];
  
  get orders(): Order[] {
    return this.menuViewService.items}

  get Total(): number {
    return this.menuViewService.Total;
  }
  constructor(private menuViewService: menuService,
    private authservice: AuthService, private snackservice: NotifierService,) { }

  ngOnInit(): void {

    // this.menuViewService.getMenu().subscribe(
    //   (res: any) => {
    //     this.products = res
    //   },
    //   err =>{
    //     console.log(err);
    //   })
  }

  logOut(){
    
    console.log('you are out');
    this.authservice.logout()
  }
  deleteOrder(productToDelete: Order): void {
    this.menuViewService.deleteOrder(productToDelete)
  }

  getmenu(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        this.products = res
        res.filter((item: any)=>{
          if(item.type === 'Desayuno'){
            console.log(item)
          }
        })
      },
      err=>{
        console.log(err);
      }
    )
  }

  getmenubreakfast(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        this.products = res
        res.filter((item: any)=>{
          if(item.type === 'Desayuno'){
            console.log(item)
          }
        })
      },
      err=>{
        console.log(err);
      }
    )
  }

  getmenulunch(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        this.products = res
        res.filter((item: any)=>{
          if(item.type === 'Almuerzo'){
            console.log(item)
          }
        })
      },
      err=>{
        console.log(err);
      }
    )
  }

}
