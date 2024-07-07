import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../assets/enviroment/environment';
const base_url = environment.base_url;

@Pipe({
  name: 'transformaUrlImg'
})
export class TransformaUrlImgPipe implements PipeTransform {

  transform(img: string, args?: any): string {
    if (img) {
      if (img.startsWith('http')) {
        return `${img}`;
      }
      return `${base_url}/upload/usuarios/${img}`;
    } else {
      return `${base_url}/upload/no-image`;
    }
  }

}
