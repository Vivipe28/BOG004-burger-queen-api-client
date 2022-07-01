import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from '../models/Products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  
  @Input() products!: Products;
  @Output() orderDelete = new EventEmitter<void>();
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

  onDeleteOrder(): void{
    this.orderDelete.emit();
  }
}
