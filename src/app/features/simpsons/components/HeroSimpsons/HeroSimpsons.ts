import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-simpsons',
  imports: [],
  templateUrl: './HeroSimpsons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSimpsons {
  simpsonsCount = input.required<number>();
  totalPages = input.required<number>();
}
