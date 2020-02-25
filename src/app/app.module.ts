import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuSelectionService } from './menu-selection/menu-selection.service';
import { FirebaseService } from './firebase.service';
import { routes } from './app.routes';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment.prod';
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
import { MenuSelectionResolver } from './menu-selection/menu-selection.resolver';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

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
    ManageSettingsComponent,
    BreadcrumbComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(routes,
      { useHash: false }
    )
  ],
  providers: [
    FirebaseService,
    MenuSelectionService,
    MenuSelectionResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
