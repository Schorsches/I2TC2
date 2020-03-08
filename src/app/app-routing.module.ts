import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';
import { MenuSelectionResolver } from './menu-selection/menu-selection.resolver';
import { ManagePlayerResolver } from './manage-player/manage-player.resolver';


const routes: Routes = [
  {
    path: '',
    component: MenuSelectionComponent,
    resolve: {
      data: MenuSelectionResolver
    }
  },
  { path: 'managePlayers', component: ManagePlayerComponent, resolve: { data: ManagePlayerResolver} },
  { path: 'manageTournaments', component: ManagePlayerComponent },
  { path: 'manageSettings', component: ManageSettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
