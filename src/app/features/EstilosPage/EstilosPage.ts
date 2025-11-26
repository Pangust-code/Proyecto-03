import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from "../SignalBoxComponent/SignalBoxComponent";
import { BarraProgreso } from "../BarraProgreso/BarraProgreso";

@Component({
  selector: 'app-estilos-page',
  imports: [SignalBoxComponent, BarraProgreso],
  standalone: true,
  templateUrl: './EstilosPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstilosPage { }
