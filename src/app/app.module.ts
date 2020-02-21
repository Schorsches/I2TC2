
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment.prod';
import { MatchService } from './match.service';
import { MatchComponent } from './match.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { TournamentComponent } from './tournament/tournament.component';
import { PlayerComponent } from './player/player.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { NewLeagueComponent } from './new-league/new-league.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { ViewMatchdayComponent } from './view-matchday/view-matchday.component';
import { SetMatchResultComponent } from './set-match-result/set-match-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    LeagueComponent,
    TournamentComponent,
    PlayerComponent,
    NewPlayerComponent,
    EditPlayerComponent,
    NewTournamentComponent,
    NewLeagueComponent,
    ManageTournamentComponent,
    ViewMatchdayComponent,
    SetMatchResultComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
