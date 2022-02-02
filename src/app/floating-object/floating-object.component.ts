import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-object',
  templateUrl: './floating-object.component.html',
  styleUrls: ['./floating-object.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({opacity: '0'}),
        animate(1000, style({
          opacity: '*'
        }))
      ]),
      transition(':leave', [
        animate(1000), style({opacity: '0'})])
    ])
  ]
     
})
export class FloatingObjectComponent implements OnInit {

  @Input() xPosition: number = 0
  @Input() yPosition: number = 0
  @Input() zPosition: number = 0
  @Input() enterAnimation: string = "entering"
  @Input() leaveAnimation: string = "leaving"
  @Input() intersectAnimation: string = "intersecting"

  constructor() { }

  ngOnInit(): void {
  }

}
