import { Injectable } from "@angular/core";
import { Order } from "src/app/order";

@Injectable({
    providedIn: 'root',
})
export class menuService {
    items: Order[] = [
        {
            image: 'hamburguer.png',
            qty: 0,
            name: 'hamburguesa',
            price: 50
        },
        {
            image: 'coffee_cup.jpg',
            qty: 0,
            name: 'cafe',
            price: 100
        },
        {
            image: 'Ellipse 2.png',
            qty: 5,
            name: 'jugo natural',
            price: 900
        },

    ]
    get Total(): number {
        return this.items.reduce((acc, { price }) => (acc += price), 0)
    }

    deleteOrder(productToDelete: Order): void {
        this.items = this.items.filter(
            product => product !== productToDelete
        )
    }
}