import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prueba'
})
export class PruebaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
