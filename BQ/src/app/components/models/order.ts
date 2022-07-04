import { Products } from "./Products";

export class Order {
    userId!: number;
    client!: string;
    products!: [Products];
    status!: string;
    dateEntry!: string

    constructor(userId:any, client: string, products: [Products], status: string, dateEntry:string){
        
        this.userId = userId;
        this.client = client;
        this.products = products;
        this.status = status;
        this.dateEntry = dateEntry
    }
}
