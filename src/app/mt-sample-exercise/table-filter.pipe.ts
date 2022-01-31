import { Pipe, PipeTransform } from '@angular/core';
import { filterList } from './mt-sample-list-index.component';

@Pipe({
  name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {
  transform(items: any[], keyword: any, properties: string[]): any[] {
    if (!items) return [];
    if (!keyword) return items;
    debugger;
    return keyword.value == 1
      ? items.filter((item) => item.FarmNo.startsWith('100'))
      : keyword.value == 2
      ? items.filter((item) => item.ActiveDate.startsWith('2020'))
      : items;
  }
}
