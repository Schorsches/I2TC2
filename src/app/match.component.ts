import { MatchService } from './match.service';
import { Component } from '@angular/core';

@Component({
    selector: 'match',
    template: `
        <h2>{{getMatchId()}}</h2>
        <ul>
            <li *ngFor="let match of matches">
                {{ match }}
            </li>
        </ul>
        `//Interpolation
})
export class MatchComponent {
    private _matchId: number;
	private _playerHomeId: number; //keine Anpassung nach Initialisierung
	private _playerAwayId: number;
	_playerHomeScore: number;
    _playerAwayScore: number;
    _matches;

    constructor(matchService: MatchService) { //dependency injection in constructor (decoupling of dependency)
        this._matches = matchService.getMatches();
        /*constructor(playerHomeId?: number, playerAwayId?: number) {//? = optionaler Parameter, entweder alle oder keine optional
            this.matchId = 1;
            this.playerHomeId = playerHomeId;
            this.playerAwayId = playerAwayId;
        }*/
    }

    get matchId() {
        return this._matchId;
    }

    getWinner() {
		if (this._playerHomeScore > this._playerAwayScore) {
			return this._playerHomeScore;
		} else if(this._playerAwayScore > this._playerHomeScore) {
			return this._playerAwayScore;
		}
		return 0;
	}
	
	setResult(playerHomeScore: number, playerAwayScore: number) {
		this._playerHomeScore = playerHomeScore;
		this._playerAwayScore = playerAwayScore;
	}
	
	//Properties:
	getPlayerAwayScore() {
		return this.playerAwayScore;
	}
	
	set playerAwayScore(value) {
		this._playerAwayScore = value;
	}
    // Logic for calling an HTTP service: (logic to view information/data)
}