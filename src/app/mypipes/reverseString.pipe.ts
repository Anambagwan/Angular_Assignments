import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  standalone: true // Mark this pipe as standalone if used in standalone components
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, toUpperCase: boolean = false): string {
    if (!value) return '';

    // Reverse the string
    let reversed = value.split('').reverse().join('');

    if(toUpperCase){
      reversed=reversed.toUpperCase();
    }
    return reversed;
  }
}
