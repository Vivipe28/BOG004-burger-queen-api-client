import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../components/models/order";

@Injectable({
    providedIn: 'root',
})

export class chefService {

    url = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    getOrders():Observable<Order>{
        const path = this.url + '/orders';
        return this.http.get<Order>(path)
    }

    patchStatus(status:any, id:any){
        const path = this.url + '/orders/'+ id;
        return this.http.patch(path, status)
    }

}