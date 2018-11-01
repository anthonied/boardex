import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameBuyComponent } from './game-buy/game-buy.component';
import { GameAddFormComponent } from './components/game-add-form/game-add-form.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'},
  { path: 'games', component: GamesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newGame', component: GameAddFormComponent },
  { path: 'detail/:id', component: GameDetailComponent},
  { path: 'buy/:id', component: GameBuyComponent},
  { path: 'editGame', component: EditGameComponent}
]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})
export class AppRoutingModule { }
