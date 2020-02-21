import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  _id: number;
  _name: string;

  constructor(_id: number, _name: string) { 
    this._id = _id;
    this._name = _name;
  }

  get id() {
    return this._id;
  }

  set name(value) {
    this._name = value;
  }

  ngOnInit(): void {
  }

}
