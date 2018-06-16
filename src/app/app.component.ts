import { Component, LOCALE_ID, Inject} from '@angular/core';
import { getLocaleCurrencyName, getLocaleCurrencySymbol } from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  money = 1000000;
  curreyName = getLocaleCurrencyName(this.locale);
  currenySymbol = getLocaleCurrencySymbol(this.locale);
  
  constructor(@Inject(LOCALE_ID) public locale: string){
  }

  setToFr(){

  }

  setToAU(){

  }

  setToUk(){

  }

  setToUs(){

  }

}
