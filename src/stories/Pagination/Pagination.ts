import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../DropdownInput/DropdownInput';
import '../Button/Button';
import styles from './Pagination.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'ctt-pagination': Pagination;
  }
}

@customElement('ctt-pagination')
export class Pagination extends LitElement {
  static styles = css([styles] as any);

  @property({ type: Number })
  currentPage = 1;

  @property({ type: Number })
  totalPages = 1;

  @property({ type: Number })
  itemsPerPage = 10;

  @property({ type: Number })
  totalItems = 0;

  @property({ type: Array })
  itemsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
  ];

  @state()
  private pages: (number | string)[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.updatePages();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (
      changedProperties.has('currentPage') ||
      changedProperties.has('totalPages')
    ) {
      this.updatePages();
    }
  }

  private updatePages() {
    const pageNumbers: (number | string)[] = [];

    if (this.totalPages <= 5) {
      // If 5 or fewer pages, show all pages
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      if (this.currentPage <= 2) {
        // Pattern: [1] [2] ... [last]
        pageNumbers.push(2);
        if (this.totalPages > 3) {
          pageNumbers.push('...');
        }
        pageNumbers.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 1) {
        // Pattern: [1] ... [second-to-last] [last]
        pageNumbers.push('...');
        pageNumbers.push(this.totalPages - 1);
        pageNumbers.push(this.totalPages);
      } else {
        // Pattern: [1] ... [current-1] [current] [current+1] ... [last]
        pageNumbers.push('...');
        pageNumbers.push(this.currentPage - 1);
        pageNumbers.push(this.currentPage);
        pageNumbers.push(this.currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(this.totalPages);
      }
    }

    this.pages = pageNumbers;
  }

  private navigate(page: number) {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.dispatchEvent(
      new CustomEvent('page-changed', { detail: { page } })
    );
  }

  private handleItemsPerPageChange(e: CustomEvent) {
    const newItemsPerPage = e.detail.value;
    this.itemsPerPage = newItemsPerPage;
    this.dispatchEvent(
      new CustomEvent('items-per-page-changed', {
        detail: { itemsPerPage: newItemsPerPage },
      })
    );
  }

  render() {
    const firstItem = (this.currentPage - 1) * this.itemsPerPage + 1;
    const lastItem = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);

    return html`
      <div class="pagination-container">
        <div class="pagination--items-per-page">
          <span>Resultados por página</span>
          <ctt-dropdown-input
            .options=${this.itemsPerPageOptions}
            .value=${this.itemsPerPage}
            size="small"
            @change=${this.handleItemsPerPageChange}
          >
          </ctt-dropdown-input>
        </div>
        <div class="pagination--items-per-page-info">
          <div class="pagination--page-info">
            <span>${firstItem} a ${lastItem}, de ${this.totalItems}</span>
          </div>
          <div class="pagination--navigation">
            <ctt-button
              variant="ghost"
              size="small"
              borderRadius="extraSmall"
              iconOnly
              icon="<"
              @click=${() => this.navigate(this.currentPage - 1)}
              ?disabled=${this.currentPage === 1}
            >
            </ctt-button>
            ${this.pages.map(page =>
              typeof page === 'number'
                ? html`
                    <ctt-button
                      size="small"
                      borderRadius="extraSmall"
                      variant=${this.currentPage === page ? 'primary' : 'ghost'}
                      label=${page.toString()}
                      @click=${() => this.navigate(page)}
                    >
                    </ctt-button>
                  `
                : html`<span class="ellipsis">...</span>`
            )}
            <ctt-button
              variant="ghost"
              size="small"
              borderRadius="extraSmall"
              iconOnly
              icon=">"
              @click=${() => this.navigate(this.currentPage + 1)}
              ?disabled=${this.currentPage === this.totalPages}
            >
            </ctt-button>
          </div>
        </div>
      </div>
    `;
  }
}
