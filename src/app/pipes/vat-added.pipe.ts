import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//giriceğimiz şey rate:number dönüşecek şey value:number dönüştürüleceği tip de number
  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
