import {
  trigger,
  transition,
  style,
  query,
  stagger,
  animate,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        stagger('1300ms', [
          animate(
            '600ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
