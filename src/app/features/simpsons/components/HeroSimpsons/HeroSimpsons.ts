import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-simpsons',
  imports: [],
  templateUrl: './HeroSimpsons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSimpsons {
  @Input() simpsonsCount: number = 0;
  @Input() totalPages: number = 0;
}
