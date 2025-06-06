import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
  styles: `
  button {
    margin: 5px;
    cursor: pointer;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, // Use OnPush strategy for better performance, user Zoneless
})
export class HeroPageComponent {
  title = 'Hero Page';

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} is ${this.age()} years old`;
    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
