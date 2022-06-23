import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { AuthService } from '../../services/http.service';
import { menuService } from '../../services/menu-view.service';
import { Products } from '../models/Products';
import { Client } from '../models/LoginObject';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from '../models/order';

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

  public products: any = [];

  public orderArray: any = [];

  increaseCounter(counter: any): void {
    counter.value++;
    
  }

  decreaseCounter(counter: any): void {
    if (counter.value > 0)
      counter.value--
  }

  get nameControl(): FormControl {
    return this.nameClientForm.get('email') as FormControl
  }

  constructor(private menuViewService: menuService,
    private authservice: AuthService, private snackservice: NotifierService,) { }

  ngOnInit(): void {

    // this.menuViewService.getMenu().subscribe(
    //   (res: any) => {
    //     this.products = res
    //   },
    //   err =>{
    //     console.log(err);
    //   })

    this.nameClientForm = new FormGroup({
      client: new FormControl(''),
    })
  }

  
  logOut() {

    console.log('you are out');
    this.authservice.logout()
  }

  getmenubreakfast(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
    const filtro = res.filter((item: any)=> {
          if(item.type === 'Desayuno'){
            return {
              qty:1,
              product:item
            }
          }
          return
        })
        this.products = filtro
        return filtro;

      },
      err=>{
        console.log(err);
      }
    )
  }

  getmenulunch(){
    this.menuViewService.getMenu().subscribe(
      (res: any) => {
        const filtro = res.filter((item: any)=> {
          if(item.type === 'Almuerzo'){
            return {
              qty:1,
              product:item
            }
          }
          return
        })
        this.products = filtro
        return filtro;
        }
    )
  }

  addItem(item:any, counter:any){
    this.orderArray.push(new Products(counter.value, item),)
    console.log(this.orderArray);
  }

  sendOrder(){
    
    console.log(new Order(this.nameClientForm.value, this.orderArray));
    
  }
}
