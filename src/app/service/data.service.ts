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
      primary: '#1ba098',
      bgInput: '#f6f6f6',
      colorInput: '#2d3032'
    },
    dark: {
      bgMain: '#0b0c10',
      bgAlt:'#1f2833',
      color: '#c5c6c7',
      primary: '#45a294',
      bgInput: '#c5c6c7',
      colorInput: '#0b0c10'
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
        this.currentColorMap = this.colorMap.dark
      } 
      else {
        this.currentColorMap = this.colorMap.light
      }
    }
  
    ngOnDestroy() {
      this.destroyed.next();
      this.destroyed.complete();
    }
  }