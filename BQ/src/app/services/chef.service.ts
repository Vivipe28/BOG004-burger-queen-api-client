import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class chefService {

    url = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    getOrders(){
        const path = this.url + '/orders';
        return this.http.get(path)
    }

    patchStatus(status:any, id:any){
        const path = this.url + '/orders/'+ id;
        return this.http.patch(path, status)
    }

    deleteOrder(id:any){
        const path = this.url + '/orders/'+ id;
        console.log(path);
        
        return this.http.delete(path)
    }

}