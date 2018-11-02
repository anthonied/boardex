import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';
import { GAMES } from '../mock-games';

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
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  delete(id:number): void {
    this.gameService.deleteGame(id);
    for(let item of GAMES){
      if (item.id > id) {
        item.id--;
      }
    }

    this.gameService.getGames().subscribe(games => {
      this.games =  games;
      this.filteredGames = games;
    });
  }

  search(text: string): void {
    this.filteredGames = this.games.filter(game => game.name.indexOf(text) >= 0);
  }

  setEditGame(game: Game) {
    this.gameService.editGame = game;
  }
}
