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
    this.gameService.getGames().subscribe(games => {
      this.games = games;
      this.filteredGames = games;
    });
  }

  getGames(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  delete(id:number): void {
    this.gameService.deleteGame(id);
    //decrement all the games' id's that are after the deleted game's id
    for(let game of GAMES){
      if (game.id > id) {
        game.id -= 1;
      }
    }
  }

  search(text: string): void {
    console.log(text);
    this.filteredGames = this.games.filter(game => game.name.indexOf(text) >= 0);
  }

  setEditGame(game: Game) {
    this.gameService.editGame = game;
  }
  
}
