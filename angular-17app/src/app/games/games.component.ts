import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

    games:any=[
        {id:1,name:"Call of duty"},
        {id:2,name:"GTA 5"},
        {id:3,name:"GTA 1"},
        {id:4,name:"GTA 2"},
        {id:5,name:"GTA 3"},
    ]
}
