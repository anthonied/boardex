import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-buy',
  templateUrl: './game-buy.component.html',
  styleUrls: ['./game-buy.component.css']
})
export class GameBuyComponent implements OnInit {

  @Input() game: Game;

  constructor(
    private route:ActivatedRoute,
    private gameService: GameService,
    private location:Location
    ) { }

  ngOnInit() {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id).subscribe(game => this.game = game);
  }

  goBack(): void {
    this.location.back();
  }

}
