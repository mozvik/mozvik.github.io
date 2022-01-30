import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { slideInAnimation } from './animations';
import { DataService } from './service/data.service';
import { LocaleService } from './service/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  
  
  activeView = 0
  scrollingDirection = ""
  //menuItems: any
  name: any
  //checked = false;

  
  constructor(public dataService: DataService,
    public localeService: LocaleService,
    private route: ActivatedRoute,
    private router: Router) { 
    
  }
//   @HostListener('window:scroll', ['$event'])
// onWindowScroll(e: any) {
   

// }
  ngOnInit(): void {
    this.localeService.setLocaleData()
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
  
  prepareRoute(outlet: RouterOutlet) {

    return  outlet?.activatedRouteData?.['animation'];
  }
  onScroll(e: any) {
    if (e.deltaY < 0 && this.activeView > 0) {
      this.activeView--
      this.router.navigate(['/' + this.localeService.currentLanguageData.menuItems[this.activeView].link]);
      this.scrollingDirection = "up"
    } else
      if (e.deltaY > 0 && this.activeView < this.localeService.currentLanguageData.menuItems.length - 1) {
        this.activeView++
        this.router.navigate(['/' + this.localeService.currentLanguageData.menuItems[this.activeView].link]);
        this.scrollingDirection = "down"
    }
  }
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
