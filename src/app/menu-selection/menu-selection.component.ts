import { MenuSelectionService } from './menu-selection.service';
import { MenuSelectionResolver } from './menu-selection.resolver';
import { Component, OnInit } from '@angular/core';
import { MenuSelectionModel } from './menu-selection.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.css']
})
export class MenuSelectionComponent implements OnInit {
  menuSelections: MenuSelectionModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      console.log("RouteData:", routeData);
      let data = routeData['data'];
      console.log("Data:", data);
      //this.menuSelections = data.
    });
  }

}
