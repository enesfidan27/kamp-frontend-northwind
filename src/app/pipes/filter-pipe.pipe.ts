import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterTextA: string): Car[] {
    filterTextA = filterTextA?filterTextA.toLocaleLowerCase():""
    return filterTextA?value.filter((c:Car)=>c.carDescription.toLocaleLowerCase().indexOf(filterTextA)!==-1):value

  }
 
}
