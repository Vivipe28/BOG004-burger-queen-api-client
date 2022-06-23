import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from '../components/models/Products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() products!: Products;

  @Output() orderDelete = new EventEmitter<void>();
  
  constructor(){ 
  }

  total(){
    return this.products.qty * this.products.product?.price
  }

  ngOnInit(): void {
  }

  onDeleteOrder(): void{
    this.orderDelete.emit();
    alert('Estas seguro de eliminar la orden?')
  }

}
