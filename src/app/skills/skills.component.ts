import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../service/locale.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public localeService: LocaleService) { }

  ngOnInit(): void {
  }

}
