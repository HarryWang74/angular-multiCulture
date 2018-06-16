import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CultureService {
  public currentCulture = 'en-US'
  constructor() { }

  getCurrentCulture(): String {
    return this.currentCulture;
  }
}
