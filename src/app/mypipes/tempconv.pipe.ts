// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'tempconv',
//   standalone: true
// })
// export class TempconvPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempconv',
  standalone: true
 
})
export class TempconvPipe implements PipeTransform {

  transform(value: number, targetUnit: string): any {
    if (!value) {
      return '';
    }

    if (targetUnit === 'C') {
      // Convert Fahrenheit to Celsius
      return ((value - 32) * 5/9).toFixed(2) + ' °C';
    } else if (targetUnit === 'F') {
      // Convert Celsius to Fahrenheit
      return ((value * 9/5) + 32).toFixed(2) + ' °F';
    }

    return value;
  }
}
