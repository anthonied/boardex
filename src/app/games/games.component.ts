import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Game[];

  filteredGames: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames().subscribe(games => {
      this.games =  games;
      this.filteredGames = games;
    });
  }

  search(text:string): void {
    console.log(text);
    this.filteredGames = this.games.filter(game => game.name.indexOf(text) >= 0);
  }

}
