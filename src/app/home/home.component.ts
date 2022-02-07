import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, delay, filter, from, interval, map, Observable, Subscription, take, takeUntil } from 'rxjs';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {

  private counter: number = 0;
  private counter2: number = 0;
  private counter3: number = 0;
  private lang: string = ''

  public firstLineDone: boolean = false;
  public secondLineDone: boolean = false;
  public thirdLineDone: boolean = false;
  public textArray: string[] = [];
  public textArray2: string[] = [];
  public textArray3: string[] = [];


  constructor( public localeService: LocaleService) { }

  ngOnInit(): void {
    this.lang = this.localeService.currentLanguage
    setTimeout(this.typewriter, 2600);
  }


  typewriter = () => {
    if (this.lang != this.localeService.currentLanguage ) {
      this.lang = this.localeService.currentLanguage
      this.textArray[0] = this.textArray2[0] = this.textArray3[0] = ''
      this.counter = this.counter2 = this.counter3 = 0;
      this.firstLineDone = this.secondLineDone = this.thirdLineDone = false;
      
    }

    if (this.secondLineDone) {
      this.textArray3[0] = this.localeService.currentLanguageData.home.t3.substring(0, this.counter3)

      if (this.counter3++ != this.localeService.currentLanguageData.home.t3.length) {
        setTimeout(this.typewriter, 80);
      } 
      else {
        setTimeout(() => (this.thirdLineDone = true), 800);
      }
    }

    if (this.firstLineDone && !this.secondLineDone) {
      
      this.textArray2[0] = this.localeService.currentLanguageData.home.t2.substring(0, this.counter2)
      
      if (this.counter2++ != this.localeService.currentLanguageData.home.t2.length) {
        setTimeout(this.typewriter, 100);
      } 
      else {
        setTimeout(() => (this.secondLineDone = true), 100);
        setTimeout(this.typewriter, 100);
      }
    }

    if (!this.firstLineDone) {
      this.textArray[0] = this.localeService.currentLanguageData.home.t1.substring(0, this.counter)
      
      if (this.counter++ != this.localeService.currentLanguageData.home.t1.length ) {
        setTimeout(this.typewriter, 100);
      } else {
        setTimeout(() => (this.firstLineDone = true), 100);
        setTimeout(this.typewriter, 1400);
      }
    }
  }
}
