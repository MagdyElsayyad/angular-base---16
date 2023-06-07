import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectFilter'
})
export class ObjectFilterPipe implements PipeTransform {

  transform(arr: any[], key: string, value: any, returnedKey): any {
    return arr?.find(e => e[key] === value)[returnedKey] || null;
  }

}
