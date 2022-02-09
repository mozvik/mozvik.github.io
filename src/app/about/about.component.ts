import { animate, AnimationBuilder, AnimationPlayer, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocaleService } from '../service/locale.service';
import { slideUp, fadeOut } from '../animations';

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
    ) { }
  
  ngOnInit(): void {
  }
 
 
}
