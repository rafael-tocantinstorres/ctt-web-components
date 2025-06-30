import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Example Card Component
 * Demonstrates how to use the design system tokens and typography.
 */
@customElement('example-card')
export class ExampleCard extends LitElement {
  @property()
  title = 'Card Title'

  @property()
  description = 'This is an example card component that demonstrates how to use the design system effectively.'

  @property({ type: Boolean })
  featured = false

  render() {
    return html`
      <article class="card ${this.featured ? 'card--featured' : ''}">
        <header class="card__header">
          <h2 class="card__title">${this.title}</h2>
        </header>
        <div class="card__content">
          <p class="card__description">${this.description}</p>
          <slot></slot>
        </div>
        <footer class="card__footer">
          <button class="button button--primary" @click=${this._onAction}>
            Learn More
          </button>
          <button class="button button--secondary" @click=${this._onSecondaryAction}>
            Share
          </button>
        </footer>
      </article>
    `
  }

  private _onAction() {
    this.dispatchEvent(new CustomEvent('card-action', {
      detail: { title: this.title },
      bubbles: true
    }))
  }

  private _onSecondaryAction() {
    this.dispatchEvent(new CustomEvent('card-secondary-action', {
      detail: { title: this.title },
      bubbles: true
    }))
  }

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-family-sans);
    }

    .card {
      background-color: var(--color-bg-primary);
      border: 1px solid var(--color-border-primary);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      padding: var(--space-xl);
      transition: all var(--duration-normal) var(--easing-ease-out);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-2px);
    }

    .card--featured {
      border-color: var(--color-primary-500);
      background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
    }

    .card__header {
      margin-bottom: var(--space-lg);
    }

    .card__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      line-height: var(--line-height-tight);
      color: var(--color-text-primary);
      margin: 0;
    }

    .card--featured .card__title {
      color: var(--color-primary-700);
    }

    .card__content {
      flex: 1;
      margin-bottom: var(--space-lg);
    }

    .card__description {
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
      color: var(--color-text-secondary);
      margin: 0 0 var(--space-md) 0;
    }

    .card__footer {
      display: flex;
      gap: var(--space-sm);
      justify-content: flex-start;
      align-items: center;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-sm) var(--space-lg);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-family-sans);
      text-decoration: none;
      cursor: pointer;
      transition: all var(--duration-fast) var(--easing-ease-out);
      border: 1px solid transparent;
      min-height: 40px;
    }

    .button:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }

    .button--primary {
      background-color: var(--color-primary-600);
      color: white;
    }

    .button--primary:hover {
      background-color: var(--color-primary-700);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .button--primary:active {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }

    .button--secondary {
      background-color: transparent;
      color: var(--color-text-primary);
      border-color: var(--color-border-primary);
    }

    .button--secondary:hover {
      background-color: var(--color-bg-secondary);
      border-color: var(--color-border-secondary);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .card {
        padding: var(--space-lg);
      }

      .card__footer {
        flex-direction: column;
        align-items: stretch;
      }

      .button {
        width: 100%;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'example-card': ExampleCard
  }
}