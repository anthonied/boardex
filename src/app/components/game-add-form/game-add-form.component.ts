import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/game';
import { GameService } from 'src/app/game.service';
import { GAMES } from 'src/app/mock-games';

@Component({
  selector: 'app-game-add-form',
  templateUrl: './game-add-form.component.html',
  styleUrls: ['./game-add-form.component.css']
})
export class GameAddFormComponent implements OnInit {

  newGame:Game = {} as Game;

  constructor(private gameService:GameService) { }

  ngOnInit() {
  }

  addClicked():void {
    console.log(this.newGame);
    this.newGame.id = GAMES.length;
    this.gameService.add(this.newGame);
  }

}
