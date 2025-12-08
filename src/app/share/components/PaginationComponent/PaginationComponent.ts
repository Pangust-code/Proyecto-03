import { ChangeDetectionStrategy, Component, computed, Input, inject, signal, effect } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../../../../app/features/service/PaginationService';

@Component({
  selector: 'app-pagination-component',
  imports: [],
  standalone: true,
  templateUrl: './PaginationComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() pages: number = 0;

  private router = inject(Router);
  private paginationService = inject(PaginationService);

  // internal reactive signals so computed recomputes correctly
  pagesSignal = signal(this.pages);
  activePage = signal(this.paginationService.currentPage());

  // keep activePage in sync with PaginationService
  constructor() {
    effect(() => {
      this.activePage.set(this.paginationService.currentPage());
    });
  }

  getPagesList = computed(() => {
    const totalPages = this.pagesSignal();
    const current = this.activePage();

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const start = Math.max(1, current - 2);
    const end = Math.min(totalPages, start + 4);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  ngOnChanges() {
    this.pagesSignal.set(this.pages);
  }

  previousPage() {
    if (this.activePage() > 1) {
      const newPage = this.activePage() - 1;
      this.navigateTo(newPage);
    }
  }

  nextPage() {
    if (this.activePage() < this.pagesSignal()) {
      const newPage = this.activePage() + 1;
      this.navigateTo(newPage);
    }
  }
  navigateTo(page: number) {
    this.router.navigate([], { queryParams: { page }, queryParamsHandling: 'merge' });
  }

 }
