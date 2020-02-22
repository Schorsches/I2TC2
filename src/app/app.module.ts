import { MenuSelectionService } from './menu-selection.service';
import { FirebaseService } from './firebase.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment.prod';
import { MatchService } from './match.service';
import { MatchComponent } from './match.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { NewLeagueComponent } from './new-league/new-league.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { ViewMatchdayComponent } from './view-matchday/view-matchday.component';
import { SetMatchResultComponent } from './set-match-result/set-match-result.component';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MenuSelectionResolver } from './menu-selection.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    LeagueComponent,
    NewPlayerComponent,
    EditPlayerComponent,
    NewTournamentComponent,
    NewLeagueComponent,
    ManageTournamentComponent,
    ViewMatchdayComponent,
    SetMatchResultComponent,
    MenuSelectionComponent,
    ManagePlayerComponent,
    ManageSettingsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, //forRoot should only be called once in your app for top level routes
      { useHash: false }
    ),
    HttpClientModule
  ],
  providers: [
    MatchService,
    FirebaseService,
    MenuSelectionService,
    MenuSelectionResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
