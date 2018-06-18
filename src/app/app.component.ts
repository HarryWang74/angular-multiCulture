import { Component, Inject, ChangeDetectorRef} from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  today = new Date();
  money = 1000000;
  locale = 'en-AU';
  constructor(
    private ref: ChangeDetectorRef,
    private adapter: DateAdapter<any>,
  ){
  }

  ngOnInit() {

	}

  setToFr() {
    this.locale = 'fr';
    this.adapter.setLocale('fr');
  }

  setToAU() {
    this.locale = 'en-AU';
    this.adapter.setLocale('en-AU');
  }

  setToUk() {
    this.locale = 'en-GB';
    this.adapter.setLocale('en-GB');
  }

  setToUS() {
    this.locale = 'en-US';
    this.adapter.setLocale('en-US');
  }

  setToJP() {
    this.locale = 'ja-JP';
    this.adapter.setLocale('ja-JP');
  }
}
