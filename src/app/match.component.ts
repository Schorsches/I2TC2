import { Match } from './../../../_Notes/TS_Notes';
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
    //matchId = "Match information";
    //matches = ["match#1", "match#2", "match#4"];
    matches;

    constructor(matchService: MatchService) { //dependency injection in constructor (decoupling of dependency)
        this.matches = matchService.getMatches();
    }

    getMatchId() {
        return "Match #1"
    }

    // Logic for calling an HTTP service: (logic to view information/data)
}