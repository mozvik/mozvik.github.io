import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {


  constructor( public localeService: LocaleService) { }

  ngOnInit(): void {

  }
  onScroll(e: any) {
    console.log('e :>> ', e);
  }
}
