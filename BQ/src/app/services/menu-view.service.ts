import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProductsItem } from "../components/models/products-item";

@Injectable({
    providedIn: 'root',
})
export class menuService {

    url = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    getMenu(): Observable<IProductsItem>{
        const path = this.url + '/products'
    return this.http.get<IProductsItem>(path)
    }

    postOrder(Order: any){
        const path = this.url + '/orders'
        return this.http.post(path, Order)
    }
}