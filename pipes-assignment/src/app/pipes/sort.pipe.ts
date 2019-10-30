import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  //   if (value.length === 0) {
  //     return value;
  //   }
  //   const resultArray = value;
  //   resultArray.sort((a, b) => {
  //     return a.name.localeCompare(b.name);
  //  });
  //   return resultArray;
  }
}
