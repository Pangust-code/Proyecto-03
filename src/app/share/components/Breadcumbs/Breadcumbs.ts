import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumbs',
  imports: [],
  templateUrl: './Breadcumbs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcumbs {
  @Input() items: { label: string; link?: string }[] = [];
}
