import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodigoSimulado } from "../CodigoSimulado/CodigoSimulado";
import { Tabla } from "../Tabla/Tabla";
import { Card } from "../Card/Card";
import { ComponenteSoloMovil } from "../ComponenteSoloMovil/ComponenteSoloMovil";

@Component({
  selector: 'app-daisyui-page-component',
  standalone: true,
  imports: [CommonModule, CodigoSimulado, Tabla, Card, ComponenteSoloMovil],
  templateUrl: './DaisyuiPageComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyuiPageComponent { }
