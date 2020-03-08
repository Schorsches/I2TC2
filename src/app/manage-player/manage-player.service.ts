import { Injectable } from '@angular/core';
import { ManagePlayerModel } from './manage-player.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class ManagePlayerService {
  constructor(private httpClient: HttpClient) { }

  getManagePlayerSelection(): Promise<ManagePlayerModel[]> {
    return this.httpClient.get("./assets/managePlayer-selection.json")
    .toPromise()
    .then((res: ManagePlayerModel[]) => {
      console.log("Test res:", res);
      return res});
  } 
}