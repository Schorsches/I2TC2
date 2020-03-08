import { Injectable } from '@angular/core';
import { MenuSelectionModel } from './menu-selection.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class MenuSelectionService {
  constructor(private httpClient: HttpClient) { }

  getMenuSelections(): Promise<MenuSelectionModel[]> {
    return this.httpClient.get("./assets/menu-selection.json")
    .toPromise()
    .then((res: MenuSelectionModel[]) => {
      console.log("Test res:", res);
      return res});
  } 
}

