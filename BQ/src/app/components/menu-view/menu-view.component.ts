import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/components/models/order';
import { NotifierService } from 'src/app/services/notifier.service';
import { AuthService } from '../../services/http.service';
import { menuService } from '../../services/menu-view.service';
import { Client } from '../models/LoginObject';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  nameClientForm!: FormGroup;
  client: Client = {
    client: '',
  };
  products: any = [];
  cartProductList: any = [];


  get nameControl(): FormControl {
    return this.nameClientForm.get('email') as FormControl
  }

  constructor(private menuViewService: menuService,
    private authservice: AuthService, private snackservice: NotifierService,) { }

  ngOnInit(): void {

    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        this.products = res
      },
      err => {
        console.log(err);
      })

      this.nameClientForm = new FormGroup({
        client: new FormControl(''),
      })
  }

  pushClient(){
    this.client = {
      client: this.nameClientForm.value['email'],
    }
    this.cartProductList.push(this.nameClientForm.value)
    console.log(this.cartProductList)
  }
  

  get orders(): Order[] {
    return this.menuViewService.items
  }

  get Total(): number {
    return this.menuViewService.Total;
  }

  increaseCounter(counter: any, price: any, result: any): void {
    counter.value++;
    this.total(counter, price, result)
    // this.addProductToCart();
  }

  decreaseCounter(counter: any, price: any, result: any): void {
    if (counter.value > 0)
      counter.value--
    this.total(counter, price, result)
  }

// intento
  addProductToCart(product: { name: any; }) {
  console.log(this.cartProductList.push({product : product}));
  console.log(this.cartProductList)
  }

  // removeProduct(product: { name: any; }) {
  //   this.cartProductList = this.cartProductList.filter(( name: any ) => name !== product.name)
  // }

// intento
  deleteOrder(productToDelete: Order): void {
    this.menuViewService.deleteOrder(productToDelete)
  }

  getmenubreakfast() {
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        // this.products = res
        const filtro = res.filter((item: any) => item.type === 'Desayuno')
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
        // this.products = res
        const filtro = res.filter((item: any) => item.type === 'Almuerzo')
        this.products = filtro
        return filtro;
      }
    )
  }

  total(counter: any, price: any, result: any) {
    result.value = counter.value * price.value;
  }

  logOut() {
    console.log('you are out');
    this.authservice.logout()
  }
}
