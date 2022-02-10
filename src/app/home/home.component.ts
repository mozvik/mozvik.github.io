import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private lang: string = ''
  private counterFirstLine: number = 0;
  private counterSecondLine: number = 0;
  private counterThirdLine: number = 0;

  public firstLineDone: boolean = false;
  public secondLineDone: boolean = false;
  public thirdLineDone: boolean = false;
  public textArrayFirstLine: string[] = [];
  public textArraySecondLine: string[] = [];
  public textArrayThirdLine: string[] = [];


  constructor( public localeService: LocaleService) { }

  ngOnInit(): void {
    this.lang = this.localeService.currentLanguage
    setTimeout(this.typewriter, 2600);
  }

  typewriter = () => {
    if (this.lang != this.localeService.currentLanguage ) {
      this.lang = this.localeService.currentLanguage
      this.textArrayFirstLine[0] = this.textArraySecondLine[0] = this.textArrayThirdLine[0] = ''
      this.counterFirstLine = this.counterSecondLine = this.counterThirdLine = 0;
      this.firstLineDone = this.secondLineDone = this.thirdLineDone = false;
    }

    if (this.secondLineDone) {
      this.textArrayThirdLine[0] = this.localeService.currentLanguageData.home.t3.substring(0, this.counterThirdLine)

      if (this.counterThirdLine++ != this.localeService.currentLanguageData.home.t3.length) {
        setTimeout(this.typewriter, 80);
      } 
      else {
        setTimeout(() => (this.thirdLineDone = true), 800);
      }
    }

    if (this.firstLineDone && !this.secondLineDone) {
      
      this.textArraySecondLine[0] = this.localeService.currentLanguageData.home.t2.substring(0, this.counterSecondLine)
      
      if (this.counterSecondLine++ != this.localeService.currentLanguageData.home.t2.length) {
        setTimeout(this.typewriter, 100);
      } 
      else {
        setTimeout(() => (this.secondLineDone = true), 100);
        setTimeout(this.typewriter, 100);
      }
    }

    if (!this.firstLineDone) {
      this.textArrayFirstLine[0] = this.localeService.currentLanguageData.home.t1.substring(0, this.counterFirstLine)
      
      if (this.counterFirstLine++ != this.localeService.currentLanguageData.home.t1.length ) {
        setTimeout(this.typewriter, 100);
      } else {
        setTimeout(() => (this.firstLineDone = true), 100);
        setTimeout(this.typewriter, 1400);
      }
    }
  }
}
