import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-componente-solo-movil',
  imports: [],
  templateUrl: './ComponenteSoloMovil.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteSoloMovil { }
