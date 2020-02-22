import { Injectable } from '@angular/core';
import { MenuSelectionModel } from './menu-selection.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MenuSelectionService {
  constructor(private http: HttpClient) { }

  getMenuSelections(){
    return this.http.get("./assets/menu-selection.json")
    .toPromise();
    // .map((res:any) => res.json())
  }
}
