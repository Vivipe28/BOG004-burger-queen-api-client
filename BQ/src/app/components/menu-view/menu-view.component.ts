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

  public orderArray: any = [];

  // get orders(): Order[] {
  //   return this.menuViewService.items
  // }

  // get Total(): number {
  //   return this.menuViewService.Total;
  // }

  increaseCounter(counter: any, price: any, result: any, id:any): void {
    counter.value++;
    this.total(counter, price, result)
    console.log(id);
    
  }

  decreaseCounter(counter: any, price: any, result: any): void {
    if (counter.value > 0)
      counter.value--
    this.total(counter, price, result)
  }

  total(counter: any, price: any, result: any) {
    result.value = counter.value * price.value;

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


  logOut() {

    console.log('you are out');
    this.authservice.logout()
  }
  // deleteOrder(productToDelete: Order): void {
  //   this.menuViewService.deleteOrder(productToDelete)
  // }

  getmenubreakfast(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
    const filtro = res.filter((item: any)=> {
          if(item.type === 'Desayuno'){
            return {
              qty:1,
              product:item
            }
          }
          return
        })
        this.products = filtro
        return filtro;

      },
      err=>{
        console.log(err);
      }
    )
    console.log('Products',this.products);
    
  }
orden = {
  qty:1
}
  getmenulunch(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        const filtro = res.filter((item: any)=> {
          if(item.type === 'Almuerzo'){
            return {
              qty:1,
              product:item
            }
          }
          return
        })
        this.products = filtro
        return filtro;
        }
    )
  }

  addItem(item:any){
    this.orderArray.push(item)
    console.log(this.orderArray);
  }
}
