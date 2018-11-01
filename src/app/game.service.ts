import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from './game';
import { GAMES } from './mock-games';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService) { }

  editGame: Game;

  getGames(): Observable<Game[]> {
    this.messageService.add('GameService: fetched games');
    return of (GAMES);
  }

  getGame(id: number): Observable<Game> {
    this.messageService.add('GameService: fetched game id=${id}');
    return of(GAMES.find(game => game.id === id));
  }

  add(game:Game):void {
    GAMES.push(game);
  }

}
