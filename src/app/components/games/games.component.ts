import { Component, OnInit } from '@angular/core';

import { Game } from '../../game';
import { GameService } from '../../game.service';
import { GAMES } from '../../mock-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Game[] = GAMES;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames().subscribe(games => this.games =  games);
  }

}
