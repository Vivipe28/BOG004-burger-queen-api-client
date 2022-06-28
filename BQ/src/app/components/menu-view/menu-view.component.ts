import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/components/models/order';
import { NotifierService } from 'src/app/services/notifier.service';
import { AuthService } from '../../services/http.service';
import { menuService } from '../../services/menu-view.service';
import { Client } from '../models/LoginObject';
import { Products } from '../models/Products';

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
  public orderArray: any = [];

  get nameControl(): FormControl {
    return this.nameClientForm.get('client') as FormControl
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
      client: this.nameClientForm.value['client'],
    }
  }

  increaseCounter(counter: any, price: any, result: any): void {
    counter.value++;
    this.total(counter, price, result)
  }

  decreaseCounter(counter: any, price: any, result: any): void {
      counter.value--
    this.total(counter, price, result)
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
    // console.log('Products',this.products);
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
  
  addItem(item:any, counter:any, total:any){
    this.orderArray.push(new Products(counter.value, item, total.value))
  }

  deleteItem(itemToDelete: any): void{
    if (confirm('Estas seguro de eliminar este producto?')){
      this.orderArray = this.orderArray.filter((item:any) => item !== itemToDelete)
    }
  }

  get totaPur(): number {
    console.log(this.orderArray)
    return this.orderArray.reduce((acc:any, total:any) => console.log(acc+=total.total), 0)
    //this.orderArray.reduce((acc:any , 
    // .reduce((acc:any, prod:any) => acc+= prod.num ,0);
  }

  total(counter: any, price: any, result: any) {
    result.value = counter.value * price.value;
  }
  


  calcTotal() {
    return this.orderArray
    // return this.orderArray.total.reduce((acc:any, prod:any) => console.log(acc+= prod.num ,0))
  }

  logOut() {
    console.log('you are out');
    this.authservice.logout()
  }

  sendOrder(){
    console.log(new Order(this.nameClientForm.value, this.orderArray));
  }
}
