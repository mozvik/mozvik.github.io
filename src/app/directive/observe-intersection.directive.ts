import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { delay, filter, Subject } from 'rxjs';

@Directive({
  selector: '[observeIntersection]'
})
export class ObserveIntersectionDirective {

  @Input() rootMargin: string = '0px'
  @Input() threshold: Array<number> = [1]
  @Input() debounce: number = 0

  @Output() enter = new EventEmitter<any>()
  @Output() leave = new EventEmitter<any>()
  @Output() scrollDirection = new EventEmitter<String>()

  private intersectionObserver?: IntersectionObserver
  private subject = new Subject<{
    entry: IntersectionObserverEntry
    observer: IntersectionObserver
  }>()
  
  private previousY: number = 0
  private previousRatio: number = 0

  constructor(private ele: ElementRef) { }

  ngOnInit() {
    this.initObserver();
  }

  ngAfterViewInit() {
    this.startObserving();
  }


  private initObserver() {
    const options = {
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }

    this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          
        if (this.isIntersecting(entry)) {
          this.calculateScrollDirection(entry)
          this.subject.next({ entry, observer });
        }

        this.previousY = entry.boundingClientRect.y
        this.previousRatio = entry.intersectionRatio
      });
    }, options);
  }

  private isIntersecting(entry: IntersectionObserverEntry) {
     return entry.isIntersecting || entry.intersectionRatio > 0    
  }

  private calculateScrollDirection(entry: IntersectionObserverEntry) {
    const currentY = entry.boundingClientRect.y
    const currentRatio = entry.intersectionRatio
    let state = ""
    if (currentY < this.previousY) {
      if (currentRatio > this.previousRatio && this.isIntersecting(entry)) {
        state ="Scrolling down enter"
      } else {
        state ="Scrolling down leave"
      }
    } else if (currentY > this.previousY && this.isIntersecting(entry)) {
      if (currentRatio < this.previousRatio) {
        state ="Scrolling up leave"
      } else {
        state ="Scrolling up enter"
      }
    }
    
    // console.log('state :>> ', state);
    this.scrollDirection.emit(state);
  }

  private startObserving() {
    if (!this.intersectionObserver) {
      return;
    }

    this.intersectionObserver.observe(this.ele.nativeElement);

    this.subject
      .pipe(delay(this.debounce), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);
        
        if (isStillVisible) {
          // console.log('im visible :>> ', entry);
          this.enter.emit(entry);
        }
        else {
          this.leave.emit(entry);
        }
      });
  }
  

  private isVisible(element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1);
        observer.disconnect();
      });
      observer.observe(element);
    });
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }

    // this.subject.next();
    this.subject.complete();
  }
}
