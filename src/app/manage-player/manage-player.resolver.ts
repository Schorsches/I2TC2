import { ManagePlayerService } from './manage-player.service';
import { ManagePlayerModel } from './manage-player.model';
import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";

@Injectable()
export class ManagePlayerResolver implements Resolve<any> {

  constructor(private managePlayerService: ManagePlayerService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      //get menu-selections from local json file
      this.managePlayerService.getManagePlayerSelection()
      .then(
        managePlayerSelection => {
          return resolve({
            managePlayerSelection: managePlayerSelection
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}