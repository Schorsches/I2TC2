import { MenuSelectionService } from './menu-selection.service';
import { MenuSelectionModel } from './menu-selection.model';
import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";

@Injectable()
export class MenuSelectionResolver implements Resolve<any> {

  constructor(private menuSelectionService: MenuSelectionService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      //get menu-selections from local json file
      this.menuSelectionService.getMenuSelections()
      .then(
        menuSelection => {
          return resolve({
            menuSelection: menuSelection
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}