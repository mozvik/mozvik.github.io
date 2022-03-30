import { animate, animation, AnimationMetadata, group, keyframes, query, style } from "@angular/animations";

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
      transform: "rotateZ({{z1}}deg) translate({{x1}}px,{{y1}}px)", offset: 0
    }),
    style({
      transform: "rotateZ({{z2}}deg) translate({{x2}}px,{{y2}}px)", offset: 0.2
    }),
    style({
      transform: "rotateZ({{z3}}deg)", offset: 0.5
    }),
    style({
      transform: "rotateZ({{z4}}deg) translate({{x3}}px,{{y3}}px)", offset: 0.8
    }),
    style({
      transform: "rotateZ({{z5}}deg) translate({{x4}}px,{{y4}}px)", offset: 1
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
