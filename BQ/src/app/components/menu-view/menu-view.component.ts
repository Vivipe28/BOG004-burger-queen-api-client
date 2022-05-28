import { Component, OnInit } from '@angular/core';
import { ProductsItem } from '../models/products-item'

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  productsItem: ProductsItem[] = []

  counter = 0;
  increaseCounter(): void{
    this.counter ++;
  }

  decreaseCounter(): void{
    if(this.counter > 0){
      this.counter --
    };
  }

  constructor() { }

  ngOnInit(): void {
    this.productsItem = [
      {
        id: 0,
        qty: 0,
        name: 'Café Americano',
        price: 5,
      },
      {
        id: 1,
        qty: 1,
        name: 'Agua',
        price: 500,
      },
      {
        id: 0,
        qty: 1,
        name: 'Gaseosa',
        price: 5000,
      },
      {
        id: 0,
        qty: 1,
        name: 'Gaseosa',
        price: 5000,
      },
    ]
  }

}
