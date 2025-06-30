import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: var(--space-2xl);
      text-align: center;
      font-family: var(--font-family-sans);
    }

    .logo {
      height: 6em;
      padding: var(--space-xl);
      will-change: filter;
      transition: filter var(--duration-slow) var(--easing-ease-out);
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em var(--color-primary-500));
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em var(--color-primary-700));
    }

    .card {
      padding: var(--space-2xl);
    }

    .read-the-docs {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }

    ::slotted(h1) {
      font-size: var(--font-size-5xl);
      line-height: var(--line-height-tight);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-lg);
    }

    a {
      font-weight: var(--font-weight-medium);
      color: var(--color-primary-600);
      text-decoration: none;
      transition: color var(--duration-fast) var(--easing-ease-out);
    }
    a:hover {
      color: var(--color-primary-700);
    }
    a:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
      border-radius: var(--radius-sm);
    }

    button {
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-primary);
      padding: var(--space-md) var(--space-xl);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-family-sans);
      background-color: var(--color-bg-secondary);
      color: var(--color-text-primary);
      cursor: pointer;
      transition: all var(--duration-fast) var(--easing-ease-out);
      box-shadow: var(--shadow-sm);
    }
    button:hover {
      border-color: var(--color-primary-500);
      background-color: var(--color-bg-tertiary);
      box-shadow: var(--shadow-md);
    }
    button:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }
    button:active {
      transform: translateY(1px);
      box-shadow: var(--shadow-sm);
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
