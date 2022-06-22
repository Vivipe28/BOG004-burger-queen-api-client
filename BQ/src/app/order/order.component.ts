import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../components/models/order';
import { Products } from '../components/models/Products';

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
    alert('Estas seguro de eliminar la orden?')
  }

}
