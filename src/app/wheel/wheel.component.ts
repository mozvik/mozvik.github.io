import { transition, trigger, useAnimation } from '@angular/animations';
import { MapType } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { floating } from '../animations';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css'],
  animations: [
    trigger('floating', [
      transition('* <=> *', [
        useAnimation(floating
          
         )
        
               
        ])])
  ]
})
export class WheelComponent implements OnInit {

  public brands = [
    { name: 'sql', x: 0, y: 0, bgImg:'mysql.png', animationOptions: {}},
    { name: 'c#', x: 0, y: 0, bgImg:'c-sharp.png', animationOptions: {}},
    { name: 'javascript', x: 0, y: 0, bgImg:'js.png', animationOptions: {}},
    { name: 'angular', x: 0, y: 0, bgImg:'angular.png', animationOptions: {}},
    { name: 'vue.js', x: 0, y: 0, bgImg:'vue.png', animationOptions: {}},
    { name: 'bootstrap', x: 0, y: 0, bgImg:'bootstrap.png', animationOptions: {}},
    { name: 'tailwind', x: 0, y: 0, bgImg:'tailwind.png', animationOptions: {}},
    { name: 'php', x: 0, y: 0, bgImg:'php.png', animationOptions: {}},
    { name: '.net', x: 0, y: 0, bgImg:'core.png', animationOptions: {}},


  ]
  wheelStyles = {     
    'transform':  '',  
   
};
  public state: string = "start"
  public animationOptions = [{}]
  
  private origo = { x: 0, y: 0 }
  private wheelRadiusX: number = 0
  private wheelRadiusY: number = 0


  @ViewChild('wheel', { static: true }) private wheel: ElementRef = new ElementRef(1);
  

  constructor() { }

  ngOnInit(): void {
    this.onResize(null)
    this.randomizeAnimation()
  }
  

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.wheelRadiusX = this.wheel.nativeElement.getBoundingClientRect().width / 2
    this.wheelRadiusY = this.wheel.nativeElement.getBoundingClientRect().height / 2

     this.calcBrandPoints()
  }
  
  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    const degree = window.scrollY/360 
   
    this.calcBrandPoints(degree)
   
  }

  
  private calcRadian( degree:number): number{
    return degree / (180 / Math.PI)
  }
  private calcPoint(radiusX: number, radiusY:number, pointAngleRadian: number): any {
    return { x: Math.cos(pointAngleRadian) * radiusX, y: Math.sin(pointAngleRadian) * radiusY}
  }
  
  private calcBrandPoints( startingDegree:number = 0) {
    for (let i = 0; i < this.brands.length; i++) {
      const item = this.brands[i]
      const point = this.calcPoint(
        this.wheelRadiusX,
        this.wheelRadiusY,
        this.calcRadian(((360 / this.brands.length) * (startingDegree+i))))
      item.x = point.x + this.wheelRadiusX - 50
      item.y = point.y + this.wheelRadiusY - 50
    }
  }

  private randomizeAnimation() {
    for (const item of this.brands) {
      const random1 = (Math.random() * 2.0) + 1.35
      const random2 = (Math.random() * 2.0) + 1.35

      item.animationOptions ={  
        time: (Math.random() * 4000) + 5000,
        z1: (Math.random() * 0.5) - 0.25,
        z2: Math.floor((Math.random() * 2)) - 1 === -1 ? random1 * -1 : random1,
        z3: (Math.random() * 0.5) - 0.25,
        z4: Math.floor((Math.random() * 2)) - 1 === -1 ? random2 * -1 : random2,
        z5: (Math.random() * 0.5) - 0.25,
      }


    }

  }
  onEnd(e: any) {

      if (e.toState === "start") {
          this.state = "end";
      } else {
        this.state = "start";
      }
    }

}