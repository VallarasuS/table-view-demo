import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toAge' })
export class ToNumberPipe implements PipeTransform {
  transform(value: any) {
    return parseInt(value.age);
  }
}