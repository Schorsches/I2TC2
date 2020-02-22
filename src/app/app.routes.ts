import { Routes } from '@angular/router';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';
import { MenuSelectionResolver } from './menu-selection.resolver';

export const routes: Routes = [
	{
	    path: '',
	    component: MenuSelectionComponent,
		  resolve: {
		    data: MenuSelectionResolver
			}
	}/*,
	{
	    path: 'managePlayer/:playerSlug',
	    component: ManagePlayerComponent,
	    resolve: {
	      data: ManagePlayerResolver
	  	}
	},
	{
	    path: 'manageTournament/:tournamentSlug',
	    component: ManageTournamentComponent,
	    resolve: {
	      data: ManageTournamentResolver
	  	}
	},
	{
	    path: 'manageSettings/:settingsSlug',
	    component: ManageSettingsComponent,
	    resolve: {
	      data: ManageSettingsResolver
	  	}
	}*/
];