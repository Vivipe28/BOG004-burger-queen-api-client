import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {
  counter = 0;
  increaseCounter(): void{
    this.counter ++;
  }

  decreaseCounter(): void{
    this.counter --;
  }

  precios = [12,5]

  get total():number{
    return this.precios[0]+this.precios[1]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
