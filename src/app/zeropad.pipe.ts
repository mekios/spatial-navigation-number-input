import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeropad'
})
export class ZeropadPipe implements PipeTransform {

  transform(value: number, totalDigits: number): unknown {    
    return value.toString().padStart(totalDigits,"0");
  }

}
