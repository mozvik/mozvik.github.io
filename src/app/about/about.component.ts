import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('reveal', [
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
export class AboutComponent implements OnInit {

  public show: boolean = false;

  constructor(
    public localeService: LocaleService,
    public dataService: DataService,
    ) { }
  
  ngOnInit(): void {
  }
 
}
