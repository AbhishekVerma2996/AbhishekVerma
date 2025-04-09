import { computed, inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private breakpointObserver = inject(BreakpointObserver);

  private screenwidth = toSignal(
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Medium,
      Breakpoints.Small,
    ])
  );

  $small = computed(() => this.screenwidth()?.breakpoints[Breakpoints.XSmall]);
  $medium = computed(() => this.screenwidth()?.breakpoints[Breakpoints.Medium]);
  $large = computed(() => this.screenwidth()?.breakpoints[Breakpoints.XLarge]);
}
