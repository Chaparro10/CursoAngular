import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit {

  @Input() imagen: string = 'https://www.w3schools.com/howto/img_avatar.png';//recibir datos del padre con Input

  constructor(){}

  ngOnInit(): void {
      
  }

}
