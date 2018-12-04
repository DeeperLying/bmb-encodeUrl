import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDecoration',
  pure: false
})
export class TextDecorationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'pppp!';
  }

}

@Pipe({
  name: 'imageSrc',
  pure: false
})
export class ImageSrc implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'pppp~';
  }

}
