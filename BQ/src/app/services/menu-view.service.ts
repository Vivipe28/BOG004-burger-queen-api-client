import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Order } from "src/app/components/models/order";
import { IProductsItem } from "../components/models/products-item";

@Injectable({
    providedIn: 'root',
})
export class menuService {

    url = 'http://localhost:8080';
    
    // get Total(): number {
    //     return this.items.reduce((acc, { price }) => (acc += price), 0)
    // }

    // deleteOrder(productToDelete: Order): void {
    //     this.items = this.items.filter(
    //         product => product !== productToDelete
    //     )
    // }

    constructor(private http: HttpClient, private router: Router) { }

    getMenu(): Observable<IProductsItem> {
        const path = this.url + '/products'
        return this.http.get<IProductsItem>(path)
    }
}