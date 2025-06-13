import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SideMenuOption {
  label: string;
  subLabel?: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  menuOptions: SideMenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs that are trending right now',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Search',
      subLabel: 'Search for your favorite gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
