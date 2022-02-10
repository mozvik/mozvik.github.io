import { animate, animation, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { revealAnimation } from '../animations';
import { DataService } from '../service/data.service';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('reveal', [
      state('true',
        style({ opacity: 1 })
      ),
      state('false',
        style({ opacity: 0 })
      ),
      transition('* => true', [
        useAnimation(revealAnimation)
      ]),
      transition('* => false', [
        animate(1100)
      ]),]),
    trigger('revealTitle', [
      state('true',
          style({ opacity: 1 , transform: 'translateX(4rem)'})
        ),
        state('false',
          style({ opacity: 0 , transform: 'translateX(100%)'})
        ),
        transition('false <=> true', [
          animate('1100ms ease')
        ]),
      ])
  ]
})
export class PortfolioComponent implements OnInit {

  public projectMetadata: any[] = []
  public duration: any[] = []
  public projectShow: boolean = false
  public titleShow: boolean = false
  
  constructor(
    public localeService: LocaleService,
    public dataService: DataService) { }

  ngOnInit(): void {
    this.initProjects();
  }
  
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.initProjects()
  }

  private initProjects(): void {
    this.projectMetadata = []
    this.duration = []
    for (let i = 0; i < this.localeService.currentLanguageData.portfolio.projects.length; i++) {

      const x = Math.round(Math.random() * 40)
      const y = Math.round(Math.random() * 80)
      const speed = (Math.random() * 1.25) + 1.25
      const duration = (Math.random() * 400) + 600
      const delay = (Math.random() * 100) + 200

      this.duration.push({
        duration: duration,
        delay: delay})

      if (this.dataService.displaySize == "Large" || this.dataService.displaySize == "XLarge"  ) {
        if ((i+1) % 2 != 0) {
          this.projectMetadata.push({
            x: x,
            y: y,
            speed: speed,
            hovered: false })
        } else {
          this.projectMetadata.push({
            x: x + 80,
            y: y,
            speed: speed,
            hovered: false })
        }
      }
      else {
        this.projectMetadata.push({
          x: x,
          y: y,
          speed: speed,
          hovered: false })
      }
    }
  }
}
