import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDecoration'
})
export class TextDecorationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'pppp!';
  }

}

@Pipe({
  name: 'imageSrc'
})
export class ImageSrc implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'pppp~';
  }

}
