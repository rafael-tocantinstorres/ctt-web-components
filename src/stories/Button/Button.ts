import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './button.css?inline';

@customElement('ctt-button')
export class CttButton extends LitElement {
  static styles = css([styles] as any);

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'success' | 'warning' | 'error' = 'primary';

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: String })
  label = '';

  @property({ type: Boolean })
  iconLeft = false;

  @property({ type: String })
  iconLeftElement = '';

  @property({ type: Boolean })
  iconRight = false;

  @property({ type: String })
  iconRightElement = '';

  @property({ type: String })
  borderRadius: 'pill' | 'small' | 'extraSmall' = 'pill';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  ariaLabel = '';

  private _onClick() {
    this.dispatchEvent(new CustomEvent('click'));
  }

  render() {
    const borderRadiusClass = {
      'pill': 'pill',
      'small': 'small-radius',
      'extraSmall': 'extra-small-radius'
    }[this.borderRadius] || 'pill';

    const sizeClass = {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }[this.size] || 'medium';

    const classes = [
      'ctt-button',
      `ctt-button--${sizeClass}`,
      `ctt-button--${this.variant}`,
      `ctt-button--${borderRadiusClass}`
    ].join(' ');

    const renderContent = () => {
      const parts = [];
      
      if (this.iconLeft && this.iconLeftElement) {
        parts.push(html`<span class="ctt-button__icon ctt-button__icon--left">${this.iconLeftElement}</span>`);
      }
      
      if (this.label) {
        parts.push(html`<span class="ctt-button__label">${this.label}</span>`);
      }
      
      if (this.iconRight && this.iconRightElement) {
        parts.push(html`<span class="ctt-button__icon ctt-button__icon--right">${this.iconRightElement}</span>`);
      }
      
      return parts;
    };

    const accessibleName = this.ariaLabel || this.label;
    const hasVisibleLabel = this.label && this.label.trim().length > 0;

    return html`
      <button
        type="button"
        class=${classes}
        ?disabled=${this.disabled}
        aria-label=${!hasVisibleLabel && accessibleName ? accessibleName : ''}
        @click=${this._onClick}
      >
        ${renderContent()}
      </button>
    `;
  }
}
