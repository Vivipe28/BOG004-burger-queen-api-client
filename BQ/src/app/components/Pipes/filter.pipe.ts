import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value: any, arg: any): any {
        
        if(arg === ''){
            return value;
        } else{
          
        const resultOrder = [];
        for(const order of value){
            if(order.client.indexOf(arg) > -1){
                resultOrder.push(order)
            }
        }
        return resultOrder  
        }

    }
    
}