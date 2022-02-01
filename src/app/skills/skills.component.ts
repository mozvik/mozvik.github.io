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

  isVisible(e: any) {
    this.vis = e
    console.log('this.vis :>> ', this.vis);
  }
}
