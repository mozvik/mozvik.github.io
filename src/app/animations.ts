import { animate, animateChild, animation, AnimationMetadata, group, keyframes, query, state, style, transition, trigger, useAnimation } from "@angular/animations";

// export const slideAnimation =
//   trigger('routeAnimations', [
//     transition(':increment', slideInOut('bottom') ),
//     transition(':decrement', slideInOut('top') ),
//   ]);


function slideInOut(direction: string) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          [direction]: 0,
          width: '100%',
          height: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ [direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('1000ms ease-out', style({ [direction]: '0%'}))
        ])
      ]),
    ];
}
  
export const revealAnimation = animation([
  animate('{{ duration }}ms {{ delay }}ms')
  
]);

export const floating = animation([
  
  animate('{{ time }}ms', keyframes([
    style({
      transform: 'rotateZ({{z1}}deg)', offset: 0
    }),
    style({
      transform: "rotateZ({{z2}}deg)", offset: 0.2
    }),
    style({
      transform: "rotateZ({{z3}}deg)", offset: 0.5
    }),
    style({
      transform: "rotateZ({{z4}}deg)", offset: 0.8
    }),
    style({
      transform: "rotateZ({{z5}}deg)", offset: 1
    }),
  ]))  
])







export const slideIn: AnimationMetadata[] = [
  style({ opacity: 0, transform: 'translateX(100%)' }),
  animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
]
export const slideOut: AnimationMetadata[] = [
  style({ opacity: 1, transform: 'translateX(0)' }),
  animate('300ms', style({ opacity: 0, transform: 'translateX(100%)' })),
]
export const slideUp: AnimationMetadata[] = [
  style({ opacity: 0, transform: 'translateY(100%)' }),
  animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
]
export const slideDown: AnimationMetadata[] = [
  style({ opacity: 1, transform: 'translateY(0)' }),
  animate('300ms', style({ opacity: 0, transform: 'translateY(100%)' })),
]
export const fadeOut: AnimationMetadata[] = [
  style({ opacity: 1 }),
  animate('300ms', style({ opacity: 0 })),
]


// export const slideInOut =
//   trigger('routeAnimations', [
//     transition('HomePage => AboutPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('AboutPage => SkillsPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('SkillsPage => PortfolioPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('PortfolioPage => ContactPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(-100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
    





//     transition('AboutPage => HomePage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(-100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('SkillsPage => AboutPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(-100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('PortfolioPage => SkillsPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(-100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('ContactPage => PortfolioPage', [
//       style({
//         position: 'relative',
       
//       }),
//       query(':enter, :leave', [
//         style({
         
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       ]),
//       query(':enter', [
//         style({ transform: 'translateY(-100vh)' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('1000ms ease-out', style({ transform: 'translateY(100vh)' }))
//         ]),
//         query(':enter', [
//           animate('1000ms ease-out', style({ transform: 'translateY(0px)' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//      ])
   
//     // transition('* <=> FilterPage', [
//     //   style({ position: 'relative' }),
//     //   query(':enter, :leave', [
//     //     style({
//     //       position: 'absolute',
//     //       top: 0,
//     //       left: 0,
//     //       width: '100%'
//     //     })
//     //   ]),
//     //   query(':enter', [
//     //     style({ left: '-100%' })
//     //   ]),
//     //   query(':leave', animateChild()),
//     //   group([
//     //     query(':leave', [
//     //       animate('200ms ease-out', style({ left: '100%' }))
//     //     ]),
//     //     query(':enter', [
//     //       animate('300ms ease-out', style({ left: '0%' }))
//     //     ])
//     //   ]),
//     //   query(':enter', animateChild()),
//     // ])
//   ]);