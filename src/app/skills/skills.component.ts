import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  vis: boolean = false

  constructor(public localeService: LocaleService) { }

  ngOnInit(): void {
  }

  entering(e: any) {
    this.vis = true
    console.log('this.vis :>> ', this.vis);
  }
  leaving(e: any) {
    this.vis = false
    console.log('this.vis :>> ', this.vis);
  }

}
