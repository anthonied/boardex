import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from './game';

import { MessageService } from './message.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService, private database: AngularFirestore) {
    this.getGames();
   }

  editGame: Game;
  games: Observable<Game[]>;

  getGames(): void {
    this.messageService.add('GameService: fetched games');
    this.games = this.database.collection<Game>('games').valueChanges();
  }





  deleteGame(game: Game): void {
  //  const index = this.games.indexOf(game);
  //  console.log(index);

  //  if (index !== -1) {
  //    this.games.splice(index, 1);
  //  }

  }

  add(game: Game): void {
    // this.games.push(game);
  }

}
