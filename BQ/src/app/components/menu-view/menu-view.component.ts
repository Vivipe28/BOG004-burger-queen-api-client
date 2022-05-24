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
    if(this.counter > 0){
      this.counter --
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
