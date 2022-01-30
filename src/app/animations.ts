import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => AboutPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('AboutPage => SkillsPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('SkillsPage => PortfolioPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('PortfolioPage => ContactPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    





    transition('AboutPage => HomePage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('SkillsPage => AboutPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('PortfolioPage => SkillsPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ContactPage => PortfolioPage', [
      style({
        position: 'relative',
       
      }),
      query(':enter, :leave', [
        style({
         
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100vh)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
     ])
   
    // transition('* <=> FilterPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
  ]);