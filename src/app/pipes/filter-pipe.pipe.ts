import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
//dnüşüme uğramasını istediğim data Product[],gireceğim şey filterText:string
//biz bir Product[] vericez parametreye göre onu filtreliyecez dönüşünde yeni filtrelenmiş yeni bir Product[] alıcaz
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
