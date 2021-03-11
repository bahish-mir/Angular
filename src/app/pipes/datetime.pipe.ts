import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appDateTimePipe'
})

export class DateTimePipe implements PipeTransform {
  public transform(value: number): string {
    return moment.unix(value).format('LL');
  }
}

//npm install moment --save - устанавливает в node_modules moment!
