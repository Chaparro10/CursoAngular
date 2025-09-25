import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';

  onLoaded(img:string){
    console.log('log padre::::',img)
  }
}
