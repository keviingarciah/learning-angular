import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 100,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 90,
    },
    {
      id: 3,
      name: 'Krilin',
      power: 80,
    },
    {
      id: 4,
      name: 'Piccolo',
      power: 70,
    },
    {
      id: 5,
      name: 'Bulma',
      power: 10,
    },
  ]);
  powerClasses = computed(() => ({
    'text-danger': false,
    'text-warning': true,
  }));

  addCharacter() {
    if (!this.name() || !this.power()) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((current) => [...current, newCharacter]);

    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}

interface Character {
  id: number;
  name: string;
  power: number;
}
