import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './components/games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameBuyComponent } from './game-buy/game-buy.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'},
  { path: 'games', component: GamesComponent },
  { path: 'newGame', component: GameAddComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: GameDetailComponent},
  { path: 'buy/:id', component: GameBuyComponent}
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})
export class AppRoutingModule { }
