import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/http.service';
import { menuService } from '../../services/menu-view.service';
import { Products } from '../models/Products';
import { Order } from '../models/order';
import { status } from '../models/status';
import { Router } from '@angular/router';


@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  Client: string = '';

  Total: number = 0;

  public products: any = [];

  public orderArray: any = [];

  producto!: Products;

  date = new Date;

  today = this.date.toLocaleString();
  

  increaseCounter(counter: any): void {
    counter.value++;
  }

  decreaseCounter(counter: any): void {
    if (counter.value > 0)
      counter.value--
  }

  constructor(private menuViewService: menuService,private authservice: AuthService, private router: Router) { }

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

  getmenubreakfast() {
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        const filtro = res.filter((item: any) => {
          if (item.type === 'Desayuno') {
            return {
              qty: 1,
              product: item
            }
          }
          return
        })
        this.products = filtro
        return filtro;
      },
      err => {
        console.log(err);
      }
    )
  }

  getmenulunch() {
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        const filtro = res.filter((item: any) => {
          if (item.type === 'Almuerzo') {
            return {
              qty: 1,
              product: item
            }
          }
          return
        })
        this.products = filtro
        return filtro;
      }
    )
  }

  addItem(item: any, counter: any) {
    this.orderArray.push(new Products(counter.value, item),)
    this.SetTotalOrder()
  }

  SetTotalOrder() {
    this.Total = 0;
    if (this.orderArray.length > 0) {
      this.orderArray.forEach((item: { total: number; }) => {
        this.Total = this.Total + item.total;
      });
    }
  }
  deleteItem(itemToDelete: any): void{
    if (confirm('Estas seguro de eliminar este producto?')){
      this.orderArray = this.orderArray.filter((item:any) => item !== itemToDelete)
    };
    this.SetTotalOrder()
  }

  sendOrder() {
    this.Client = (document.querySelector('.clientName')as HTMLInputElement).value
    this.menuViewService.postOrder(new Order(this.authservice.getId(),this.Client, this.orderArray,status[0],this.today))
    .subscribe((resp) => {
      console.log(resp);
      this.router.navigate(['/chef']);
    })
  }

  
  
}
