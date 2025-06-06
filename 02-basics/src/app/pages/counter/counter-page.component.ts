import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
  button {
    margin: 5px;
    cursor: pointer;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, // Use OnPush strategy for better performance, user Zoneless
})
export class CounterPageComponent {
  counter = 10;
  conuterSignal = signal(10);

  constructor() {
    setInterval(() => {
      //this.counter += 1; ZoneJS will detect this change and trigger change detection, withput ussing ChangeDetectionStrategy.OnPush
      this.conuterSignal.update((current) => current + 1); // Zoneless will detect this change and trigger change detection, with ChangeDetectionStrategy.OnPush
      console.log('Tick');
    }, 1000);
  }

  increaseBy(value: number) {
    this.counter += value;

    this.conuterSignal.update((current) => current + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;

    this.conuterSignal.update((current) => current - value);
  }

  reset() {
    this.counter = 0;

    this.conuterSignal.set(0);
  }
}
