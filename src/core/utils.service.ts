import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public enableLoading = false;
  public sideNavOpen = false;
  public loggedIn = false;
  
}
