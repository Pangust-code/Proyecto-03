import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  imports: [],
  templateUrl: './BarraProgreso.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraProgreso {
  progreso = signal<number>(0);

  actualizarProgreso(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    this.progreso.set(nuevoValor);

  }


 }
