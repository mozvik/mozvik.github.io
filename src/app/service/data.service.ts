import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  destroyed = new Subject<void>();
  displaySize: string = ""
  currentColorTheme = "light"
  currentColorMap: any = {};

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  colorMap = {
    light: {
      background: '#fff',
      color: 'red'
    },
    dark: {
      background: '#000',
      color: 'white'
    }

  }

  

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.displaySize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      })
    
    }
    
    setColorTheme() {
      if(this.currentColorTheme == "dark"){
        this.currentColorMap = this.colorMap.light
      } 
      else {
        this.currentColorMap = this.colorMap.dark
      }
    }
  
    ngOnDestroy() {
      this.destroyed.next();
      this.destroyed.complete();
    }
  }