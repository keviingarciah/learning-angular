import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListItemComponent } from './gif-list-item/gif-list-item.component';

@Component({
  selector: 'gifs-list',
  imports: [ListItemComponent],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  gifs = input.required<string[]>();
}
