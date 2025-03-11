import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games',
  imports: [FormsModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  nameGame: string = '';

  games: any = [
    { id: 1, name: 'Call of duty' },
    { id: 2, name: 'GTA 5' },
    { id: 3, name: 'GTA 1' },
    { id: 4, name: 'GTA 2' },
    { id: 5, name: 'GTA 3' },
  ];

  handleAddGame() {
    this.games.push({
      id: this.games.length + 1,
      name: this.nameGame,
    });
  }

  handleDeleteGame(id: number) {
    this.games = this.games.filter((item: any) => item.id !== id);
  }
}
