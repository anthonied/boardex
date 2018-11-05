import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/game';
import { GameService } from 'src/app/game.service';
import { GAMES } from 'src/app/mock-games';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})

export class EditGameComponent implements OnInit {

  editedGame: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.editedGame = this.gameService.editGame;
  }

  addEditedGame():void {
    console.log("addEdit");

  }

}