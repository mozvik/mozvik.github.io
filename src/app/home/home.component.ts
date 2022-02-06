import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('firstLine', { static: true }) private firstLine: ElementRef = new ElementRef(1);
  @ViewChild('secondLine', { static: true }) private secondLine: ElementRef = new ElementRef(1);
  public letters: string[] = [];
  public counter: number = 0;
  public counter2: number = 0;
  private typewriter_text: string = "Thank you for your interest";
  private errorAt: number = 0;
  private error: number = 0;
  private firstLineDone: boolean = false;
  // public firstLine: string = "";
  private textArray: string[] = [];
  private textArray2: string[] = [];

  constructor( public localeService: LocaleService) { }

  ngOnInit(): void {
    this.error = Math.round(Math.random());
    this.errorAt = Math.round(Math.random() * (this.localeService.currentLanguageData.home.t1.length - 6)) + 1
    this.textArray.push(this.localeService.currentLanguageData.home.t1)
    this.textArray2.push(this.localeService.currentLanguageData.home.t2)
    // console.log('this.errorAt :>> ', this.errorAt);
    //this.typingCallback(this);
    this.firstLine.nativeElement.innerHTML = '<span>\u2581</span>'
    setTimeout(this.typewriter, 1000);
    
  }
  

  // typingCallback(that: this) {
  //   const totalLength = that.lineToType.length;
  //   const currentLength = that.firstLine.length;
  //   console.log('currentLength, this.errorAt :>> ', currentLength, that.errorAt);
  //   if (currentLength == that.errorAt) {
      
  //   }
  //   else if (currentLength < totalLength) {
  //     that.firstLine += that.lineToType[currentLength];
  //     setTimeout(that.typingCallback, 100, that);
  //   } else {
      
  //   }
  // }
  typewriter = () => {

    if (this.firstLineDone) {
      this.firstLine.nativeElement.innerHTML = this.textArray
      this.secondLine.nativeElement.innerHTML = this.textArray2[0].substring(0, this.counter2) + '<span>\u2581</span>';

      
      if (this.counter2++ != this.textArray2[0].length) {
        setTimeout(this.typewriter, 100);
      } 
    }


    if (!this.firstLineDone) {
      this.firstLine.nativeElement.innerHTML = this.textArray[0].substring(0, this.counter) + '<span>\u2581</span>';

      if (this.counter++ != this.textArray[0].length ) {
        setTimeout(this.typewriter, 100);
      } else {
        this.firstLineDone = true
        
        setTimeout(this.typewriter, 1200);
      }
    }
      





    

  }
  
}
