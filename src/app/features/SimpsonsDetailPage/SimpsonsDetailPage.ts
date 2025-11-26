import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../simpsons/service/SimpsonsService';

@Component({
  selector: 'app-simpsons-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './SimpsonsDetailPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsDetailPage {
  private route = inject(ActivatedRoute);
  private service = inject(SimpsonsService);

  personaje = toSignal(
    this.route.paramMap.pipe(
      map(params => +params.get('id')!),
      switchMap(id => this.service.getCharacterById(id))
    ),
    { initialValue: null }
  );
 }
