import { ChangeDetectionStrategy, Component, effect, inject, resource, signal } from '@angular/core';
import { SimpsonsService } from '../simpsons/service/SimpsonsService';
import { PaginationService } from '../service/PaginationService';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../share/components/PaginationComponent/PaginationComponent';
import { HeroSimpsons } from "../simpsons/components/HeroSimpsons/HeroSimpsons";
import { Breadcumbs } from "../../share/components/Breadcumbs/Breadcumbs";
import { BackToTop } from "../../share/components/BackToTop/BackToTop";

@Component({
  selector: 'app-simpsons-page',
  imports: [RouterLink, PaginationComponent, HeroSimpsons, Breadcumbs, BackToTop],
  templateUrl: './SimpsonsPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsPage {

  // Signal que mantiene el número total de páginas
  totalPages = signal(0);

  constructor() {
    // Effect que actualiza el número de páginas cuando hay datos válidos
    effect(() => {
      if (this.simpsonsResource.hasValue()) {
        this.totalPages.set(this.simpsonsResource.value().pages);
      }
    });
  }

  charactersPerPage(): number {
    return 5;
  }

  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  // simpsonsResource1 = toSignal(
  //   this.simpsonsService
  //     .getCharacters(this.paginationService.currentPage())
  //     .pipe(map((res) => res)),
  //   { initialValue: null }
  // );

  // /// VERISION REACTIVA con recursos
  // simpsonsResource2 = resource({
  //   params: () => ({
  //     page: this.paginationService.currentPage() - 1,
  //     limit: this.charactersPerPage(),
  //   }),
  //   loader: async ({ params }) => {
  //     return this.simpsonsService.getCharactersOptions({
  //       offset: params.page,
  //       limit: params.limit,
  //     });
  //   },
  // });

  /// VERSIUON CON RXRESOURCE
  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage(),
    }),
    stream: ({ params }) => {
      const page = Math.max(1, params.page ?? 1);
      return this.simpsonsService.getCharacters(page);
    },
  });
}
