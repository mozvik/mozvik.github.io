import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() text: string = '';
  @Input() active: boolean = false;
  @Output() clicked = new EventEmitter<boolean>()

  public isHovered: boolean = false;
  public spans: any[] = [{
    letter: '',
    duration: 0,
    delay: 0
  }]

  constructor() { }

  ngOnInit(): void {
    const letters = this.text.split('')
    for (const letter of letters) {
      this.spans.push({
        letter: letter,
        duration: (Math.random() * 150) + 200,
        delay: (Math.random() * 150) + 100
      })
    }
  }
}
