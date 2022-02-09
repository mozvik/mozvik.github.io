import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[observeIntersection]'
})
export class ObserveIntersectionDirective {

  @Input() rootMargin: string = '0px'
  @Input() threshold: Array<number> = [1]
  
  @Output() enter = new EventEmitter<boolean>()
  @Output() leave = new EventEmitter<boolean>()
  
  private intersectionObserver?: IntersectionObserver
  
  private options = {
    rootMargin: '0px',
    threshold: [1.0]
  }

  constructor(private ele: ElementRef) { }

  ngOnInit() {
    this.options.rootMargin = this.rootMargin
    this.options.threshold = this.threshold
  }
  
  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersect, this.options);
    this.intersectionObserver.observe(this.ele.nativeElement)
  }

  private handleIntersect = (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.enter.emit(true)
      }
      else {
        this.leave.emit(false)
      }
    })
  }

  ngOnDestroy() {
    this.intersectionObserver?.unobserve(this.ele.nativeElement)
  }
}
