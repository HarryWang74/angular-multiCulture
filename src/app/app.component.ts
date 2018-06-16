import { Component, LOCALE_ID, Inject} from '@angular/core';
import { getLocaleCurrencyName, getLocaleCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = Date.now();
  money = 1000000;
  curreyName = getLocaleCurrencyName(this.locale);
  currenySymbol = getLocaleCurrencySymbol(this.locale);
  
  constructor(@Inject(LOCALE_ID) public locale: string){
  }
}
