
//import { FirebaseService } from './firebase.service';
import { NgModule }       from '@angular/core';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { NewLeagueComponent } from './new-league/new-league.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { ViewMatchdayComponent } from './view-matchday/view-matchday.component';
import { SetMatchResultComponent } from './set-match-result/set-match-result.component';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';

import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { MenuSelectionResolver } from './menu-selection/menu-selection.resolver';
import { MenuSelectionService } from './menu-selection/menu-selection.service';

import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { ManagePlayerService } from './manage-player/manage-player.service';
import { ManagePlayerResolver } from './manage-player/manage-player.resolver';

import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MenuSelectionService,
    MenuSelectionResolver,
    ManagePlayerResolver,
    ManagePlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
