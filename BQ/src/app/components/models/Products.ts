import { IProductsItem } from "./products-item";

export class Products{
    qty!: number;
    product!: IProductsItem;

    constructor(qty:number, product:IProductsItem){
        this.qty = qty;
        this.product = product
    }
}