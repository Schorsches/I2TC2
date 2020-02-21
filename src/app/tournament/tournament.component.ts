import { PlayerComponent } from './../player/player.component';
import { MatchComponent } from './../match.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  _id: number;
  _players: PlayerComponent[];
  _matches: MatchComponent[];

  constructor(_id:number, _players: PlayerComponent[], _matches: MatchComponent[]) {
    this._id = 1;
    let playerA = new PlayerComponent(1,"Georg");
    let PlayerB = new PlayerComponent(2,"Sebastian");
    let PlayerC = new PlayerComponent(3,"Bernd");
    _players.push(playerA);
    _players.push(PlayerB);
    _players.push(PlayerC);
    let matchOne = new MatchComponent();
  }

  ngOnInit(): void {
  }

}
