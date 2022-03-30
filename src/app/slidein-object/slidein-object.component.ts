import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidein-object',
  templateUrl: './slidein-object.component.html',
  styleUrls: ['./slidein-object.component.css']
})
export class SlideinObjectComponent implements OnInit {

  @Input() visible: boolean = false
  @Input() speed: number = 1
  @Input() xStart: number = 0
  @Input() xStop: number = 10000

  @ViewChild('slideinElement', { static: true }) private slideinElement: ElementRef = new ElementRef(1);
  
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.onScroll(null)
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    
    if (this.visible) {
       this.xPosition = this.slideinElement?.nativeElement.getBoundingClientRect().left   
      this.yPosition = this.slideinElement?.nativeElement.getBoundingClientRect().top   

      const moveTo = (window.innerHeight - this.yPosition) * this.speed + this.xStart
      if ( this.xStop > moveTo) {
        this.xPosition = moveTo
      }
      else {
        this.xPosition = this.xStop
      }
    }
  }
  public xPosition: number = 0
  public yPosition: number = 0

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.onScroll(null)
  }

}
