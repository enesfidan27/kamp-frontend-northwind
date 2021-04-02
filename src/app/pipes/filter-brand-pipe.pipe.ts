import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrandPipe'
})
export class FilterBrandPipePipe implements PipeTransform {

  transform(value: Brand[], filterTextM:string): Brand[] {
    filterTextM = filterTextM?filterTextM.toLocaleLowerCase():""
    return filterTextM?value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterTextM)!==-1):value
  }

}
