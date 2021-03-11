import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDateTimePipe'
})

export class DateTimePipe implements PipeTransform {
  public transform(value: number): string {
    return 'Time';
  }
}

