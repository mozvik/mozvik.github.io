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
  activeMenuItem: number = 0;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  colorMap = {
    light: {
      bgMain: '#f6f6f6',
      bgAlt:'#e1e2e2',
      color: '#2d3032',
      primary: '#1ba098'
    },
    dark: {
      bgMain: '#f6f6f6',
      bgAlt:'#e1e2e2',
      color: '#2d3032',
      primary: '#1ba098'
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