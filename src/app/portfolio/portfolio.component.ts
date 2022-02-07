import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projectMetadata: any[] = []

  constructor(public localeService: LocaleService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.initProjects();
  }
  
  @HostListener('window:resize', ['$event']) onResize(event: any) {
   
     this.initProjects()
  }
  private initProjects(): void {
    this.projectMetadata = []
    for (let i = 0; i < this.localeService.currentLanguageData.portfolio.projects.length; i++) {
      const item = this.localeService.currentLanguageData.portfolio.projects[i];
      const x = Math.round(Math.random() * 40)
      const y = Math.round(Math.random() * 80)
      const speed = (Math.random() * .9) + .7

      if (this.dataService.displaySize == "Large" || this.dataService.displaySize == "XLarge"  ) {
        if ((i+1) % 2 != 0) {
          this.projectMetadata.push({
            x: x,
            y: y,
            speed: speed,
            hovered: false
            }
            )
        } else {
          this.projectMetadata.push({
            x: x + 80,
            y: y,
            speed: speed,
            hovered: false
          }
          )
        }
      }
      else {
        this.projectMetadata.push({
          x: x,
          y: y,
          speed: speed,
          hovered: false
          }
          )
      }
        
      
    }
    
  }
}
