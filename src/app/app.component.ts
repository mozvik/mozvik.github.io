import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { slideAnimation } from './animations';
import { DataService } from './service/data.service';
import { LocaleService } from './service/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideAnimation]
})
export class AppComponent {

  activeView = 0
  
  
  name: any
  
  
  
  constructor(public dataService: DataService,
    public localeService: LocaleService,
  ) { 
    

  }

  ngOnInit(): void {
    this.localeService.setLocaleData()
    // this.content.nativeElement.scrollTop = 0
    // this.route.queryParams.subscribe(params => {
      //   this.name = params['name'];
      // });
    }
    ngAfterViewInit() {
   
  }
  
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  



  navigateTo(route: any[]) {
    // this.router.navigate(route);
  }
  // setScrollDirection(direction: string) {
  //   this.scrollingDirection = direction
  // }

  toggleLanguage() {
    if (this.localeService.currentLanguage === 'hu') {
      this.localeService.currentLanguage = 'en'
    } else {
      this.localeService.currentLanguage = 'hu'
    }
    this.localeService.setLocaleData()
    // this.localeService.setLocaleData('menuItems').subscribe(val=>{
    //   console.log(val),
    //   this.menuItems = val.home
    //   })
  }
}
