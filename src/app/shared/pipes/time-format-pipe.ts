import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(start: number, end: number): string {
    if (start == null || end == null || end < start) {
      return '0m:0s';
    }

    const duration = end - start;

    const totalSeconds = Math.floor(duration / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}m:${seconds}s`;
  }
}