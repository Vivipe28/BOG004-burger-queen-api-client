import { Products } from "./Products";

export class Order {
    // userId!: number;
    client!: string;
    products!: [Products];
    // status!: string;
    // dateEntry!: Date

    constructor(client: string, products: [Products]){
        
        // this.userId = userId;
        this.client = client;
        this.products = products;
        // this.dateEntry = dateEntry
    }
}
