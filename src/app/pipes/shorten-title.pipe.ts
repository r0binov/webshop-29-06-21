import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

 

  transform(value: string, wordCount?: number): string {

    if(!wordCount) {
      wordCount = 3;
    }

    return value.split(" ").slice(0, wordCount).join(" ");
  }

}
