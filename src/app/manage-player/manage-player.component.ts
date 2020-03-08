import { Component, OnInit } from '@angular/core';

import { ManagePlayerService } from './manage-player.service';
import { ManagePlayerResolver } from './manage-player.resolver';
import { ManagePlayerModel } from './manage-player.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-player',
  templateUrl: './manage-player.component.html',
  styleUrls: ['./manage-player.component.css']
})
export class ManagePlayerComponent implements OnInit {
  managePlayerSelection: ManagePlayerModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      console.log("Data:", data);
      this.managePlayerSelection = data.managePlayerSelection;
    });
  }
}
