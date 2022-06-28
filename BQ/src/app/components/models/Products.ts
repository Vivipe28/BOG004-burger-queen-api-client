import { IProductsItem } from "./products-item";

export class Products{
    qty!: number;
    product!: IProductsItem;
    total!: number;

    constructor( qty:number, product:IProductsItem, total:number){
        this.qty = qty;
        this.product = product;
        this.total = total;
    }
}