import { Component, HostListener } from '@angular/core';

import { DataService } from './service/data.service';
import { LocaleService } from './service/locale.service';
import { IconService } from './service/icon.service';
import { animate, query, sequence, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("menuAnimation", [
      transition(":enter", [
        style({ height: 0, overflow: "hidden" }),
        query(".mobile-animation", [
          style({ opacity: 0, transform: "translateY(-50px)" })
        ]),
        sequence([
          animate("200ms", style({ height: "*" })),
          query(".mobile-animation", [
            stagger(-50, [
              animate("400ms ease", style({ opacity: 1, transform: "none" }))
            ])
          ])
        ])
      ]),
    
      transition(":leave", [
        style({ height: "*", overflow: "hidden" }),
        query(".mobile-animation", [style({ opacity: 1, transform: "none" })]),
        sequence([
          query(".mobile-animation", [
            stagger(50, [
              animate(
                "300ms ease",
                style({ opacity: 0, transform: "translateY(-50px)" })
              )
            ])
          ]),
          animate("200ms", style({ height: 0 }))
        ])
      ]),
    ]),
    
  
  
  
  ]
})
export class AppComponent {

  curtainDown: boolean = false
  
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (this.curtainDown) {
     this.toggleCurtain()
   }
  }
  
  constructor(
    public dataService: DataService,
    public localeService: LocaleService,
    private iconService: IconService,
  ) { 
    this.iconService.registerIcons();
  }

  ngOnInit(): void {
    this.dataService.setColorTheme()
    this.localeService.setLocaleData()
    }
    ngAfterViewInit() {
   
  }
 
  toggleColorTheme() {
    if(this.dataService.currentColorTheme == "dark"){
      this.dataService.currentColorTheme = "light"
    } 
    else {
      this.dataService.currentColorTheme = "dark"
    }
    this.dataService.setColorTheme()
  }

  toggleCurtain() {
    this.curtainDown = !this.curtainDown
  }

  scrollTo(section: string) {
    console.log('click  :>> ', section );
    //@ts-ignore
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
  }

  toggleLanguage() {
    if (this.localeService.currentLanguage === 'hu') {
      this.localeService.currentLanguage = 'en'
    } else {
      this.localeService.currentLanguage = 'hu'
    }
    this.localeService.setLocaleData()
  }
}
