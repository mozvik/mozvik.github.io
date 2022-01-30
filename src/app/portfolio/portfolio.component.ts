import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public localeService: LocaleService) { }

  ngOnInit(): void {
  }

}
