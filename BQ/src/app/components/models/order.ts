import { Products } from "./Products";

export interface Order {
    userId: number,
    client: string,
    products: [Products],
    status: string,
    dateEntry: Date
}
