import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColorPipe'
})
export class FilterColorPipePipe implements PipeTransform {

  transform(value: Color[], filterTextR:string): Color[] {
    filterTextR = filterTextR?filterTextR.toLocaleLowerCase():""
    return filterTextR?value.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterTextR)!==-1):value
  }

}
