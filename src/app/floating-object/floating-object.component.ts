import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { floating } from '../animations';

@Component({
  selector: 'app-floating-object',
  templateUrl: './floating-object.component.html',
  styleUrls: ['./floating-object.component.css'],
  animations: [
      
     trigger('slideInOut', [
      state('true',
        style({ opacity: 1 })
      ),
      state('false',
        style({ opacity: 0 })
      ),
      transition('* => true', [
        animate(300)
      ]),
      transition('* => false', [
        animate(0)
      ]),
     ]),
     
    trigger('floating', [
      transition('* => *', [
         useAnimation(floating
         )]
      )])
  ]
})
export class FloatingObjectComponent implements OnInit {

  @Input() speed: number = (Math.random() * .5) + .2
  @Input() xStart: number = 75
  @Input() yStart: number = 0
  @Input() visible: boolean = false
  @Input() vertical: boolean = true
  @Input() animation: boolean = true
 
  @ViewChild('outerElement', { static: true }) private outerElement: ElementRef = new ElementRef(1);
  @ContentChildren('outerElement') private innerElement:  QueryList<ElementRef> = new QueryList<ElementRef>();
  
  private yPosition: number = 0
  private yRatio: number = 0

  public state: string = "start";
  public animationOptions = {  
    time: 9000,
    z1: 0,
    z2: -1.5,
    z3: 0,
    z4: 1.75,
    z5: 0,
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
   
    this.yPosition = this.outerElement?.nativeElement.getBoundingClientRect().top    
    this.yRatio = this.yPosition / window.innerHeight
      
    if (this.vertical) {
      this.outerElement.nativeElement.style.top = (100 * this.yRatio * this.speed) + "%"
      this.outerElement.nativeElement.style.left = this.xStart + "%"
    } else {
      this.outerElement.nativeElement.style.left = ((this.xStart - (100 * this.yRatio)) * this.speed) + "%"
      this.outerElement.nativeElement.style.top =  this.yStart + "vh"
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.randomizeAnimation()
  }
  ngAfterContentInit() {
  
  }
  private randomizeAnimation() {
    if (!this.animation) {
      this.animationOptions.time = 0
      return
    }

    this.animationOptions.time = (Math.random() * 4000) + 5000
    this.animationOptions.z1 = this.animationOptions.z5 = this.animationOptions.z3 = (Math.random() * 0.5) - 0.25

    this.animationOptions.z2 = (Math.random() * 2.0) + 1.35
    if (Math.floor((Math.random() * 2)) - 1 === -1) {
      this.animationOptions.z2 *= -1
    }

    this.animationOptions.z4 = (Math.random() * 2.0) + 1.35
    if (Math.floor((Math.random() * 2)) - 1 === -1) {
      this.animationOptions.z4 *= -1
    }
  }


  onEnd(e: any) {
    if (this.visible) {
      if (e.toState === "start") {
          this.state = "end";
      } else {
        this.state = "start";
      }
    }
  }
  
}
