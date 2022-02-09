import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger(
      'inOutLeftChevron', 
      [
        state('false' , style({ transform: 'translateX(-2rem)', opacity: 0 })),
        state('true', style({ transform: 'translateX(0)', opacity: 1 })),
        transition(
          'false => true', 
          [
            
            animate('.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ]
        ),
        transition(
          'true => false', 
          [
            
            animate('.5s ease-in', style({ transform: 'translateX(-2rem)', opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'inOutRightChevron', 
      [
        state('false' , style({ transform: 'translateX(2rem)', opacity: 0 })),
        state('true', style({ transform: 'translateX(.25rem)', opacity: 1 })),
        transition(
          'false => true', 
          [
           
            animate('.5s ease-out', style({ transform: 'translateX(.25rem)', opacity: 1 }))
          ]
        ),
        transition(
          'true => false', 
          [
            
            animate('.5s ease-in', style({ transform: 'translateX(2rem)', opacity: 0 }))
          ]
        )
      ]
    )
  ]
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
