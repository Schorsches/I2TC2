// Inspired on: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'breadcrumb',
  styleUrls: [ './breadcrumb.component.scss' ],
  templateUrl: './breadcrumb.component.html',
  encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];
	public _routerSubscription: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this._routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .switchMap(route => route.data)
      .subscribe((event) => {
        if(event['data'] && event['data'].breadcrumbs){
          this.breadcrumbs = event['data'].breadcrumbs;
        }
        else
        {
          // Empty breadcrumbs
          this.breadcrumbs = [];
        }
      });
  }

	ngOnDestroy(): void {
    if(this._routerSubscription){
      this._routerSubscription.unsubscribe();
    }
  }
}