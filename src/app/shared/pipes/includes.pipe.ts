import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {

  transform(arr: any[], value: any ,key: string): boolean {
    return arr.find(e => e![key] === value);
  }

}
