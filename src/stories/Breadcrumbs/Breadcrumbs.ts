import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './breadcrumbs.css?inline';

import './Breadcrumbs.css';

export interface BreadcrumbItem {
  label: string;
  state?: 'active' | 'default';
  navigate?: () => void;
}
@customElement('ctt-breadcrumbs')
export class CttBreadcrumbs extends LitElement {
static styles = css([styles] as any);

  /**
   * Array of breadcrumb items to display
   */
  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  /**
   * Accessible label for screen readers
   */
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string = 'Breadcrumb navigation';

  constructor() {
    super();
  }

  /**
   * Handle click on a breadcrumb item
   */
  private _handleItemClick(item: BreadcrumbItem, event: Event) {
    event.preventDefault();
    
    if (item.state === 'active') return;
    
    // Call the navigate function if provided
    if (item.navigate) {
      item.navigate();
    }
    
    // Dispatch custom event
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { item },
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * Handle keyboard navigation
   */
  private _handleKeyDown(item: BreadcrumbItem, event: KeyboardEvent) {
    if (item.state === 'active') return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._handleItemClick(item, event);
    }
  }

  render() {
    if (!this.items || this.items.length === 0) {
      return html``;
    }

    return html`
      <nav
        part="component"
        class="ctt-breadcrumbs"
        aria-label=${this.ariaLabel}
        role="navigation"
      >
        <ol class="ctt-breadcrumbs__list">
          ${this.items.map((item, index) => html`
            <li class="ctt-breadcrumbs__item">
              ${item.state === 'active' 
                ? html`
                    <span 
                      part="item"
                      class="ctt-breadcrumbs__link ctt-breadcrumbs__link--active"
                      aria-current="page"
                    >
                      ${item.label}
                    </span>
                  `
                : html`
                    <a 
                      part="item"
                      class="ctt-breadcrumbs__link"
                      href="#"
                      tabindex="0"
                      @click=${(e: Event) => this._handleItemClick(item, e)}
                      @keydown=${(e: KeyboardEvent) => this._handleKeyDown(item, e)}
                    >
                      ${item.label}
                    </a>
                  `
              }
              ${index < this.items.length - 1 
                ? html`<span part="separator" class="ctt-breadcrumbs__separator" aria-hidden="true">/</span>`
                : ''
              }
            </li>
          `)}
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ctt-breadcrumbs': CttBreadcrumbs;
  }
}
