import { MatchService } from './match.service';
import { Match } from './../../../_Notes/TS_Notes';
import { MatchComponent } from './match.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
