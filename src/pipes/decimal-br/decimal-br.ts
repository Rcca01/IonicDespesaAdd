import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DecimalBrPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'decimalBr',
})
export class DecimalBrPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(",", "&").replace(".",",").replace("&",".");
  }
}
