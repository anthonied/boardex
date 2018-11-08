import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from './game';

import { MessageService } from './message.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService, private database:AngularFirestore) { }

  editGame: Game;
  games: Game[];

  getGames(): void {
    this.messageService.add('GameService: fetched games');
    this.database.collection<Game>('games').valueChanges().subscribe(games => this.games = games);
  }

  getGame(id: number): Observable<Game> {
    this.messageService.add('GameService: fetched game id=${id}');
    return of(this.games.find(game => game.id === id));
  }

  
  deleteGame(game:Game): void {
    const index = this.games.indexOf(game);
    console.log(index);

    if (index !== -1) {
      this.games.splice(index, 1);
    }
    
  }

  add(game:Game):void {
    this.games.push(game);
  }

}
