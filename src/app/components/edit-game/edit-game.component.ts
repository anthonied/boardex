import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/game';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  editedGame: Game;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  addEditedGame():void {
    console.log("addEdit");
  }

  goBack():void {
    
  }

}
