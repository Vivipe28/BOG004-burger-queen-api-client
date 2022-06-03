import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../components/models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()
  order!: Order;

  @Output() orderDelete = new EventEmitter<void>();
 
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteOrder(): void{
    this.orderDelete.emit();
  }

}
