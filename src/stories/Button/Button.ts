import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './button.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'ctt-button': CttButton;
  }
}

@customElement('ctt-button')
export class CttButton extends LitElement {
  static styles = css([styles] as any);

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'primary';

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

  @property({ type: Boolean })
  iconOnly = false;

  @property({ type: String })
  icon = '';

  @property({ type: String })
  borderRadius: 'pill' | 'small' | 'extraSmall' = 'pill';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  ariaLabel = '';

  private _onClick(event: Event) {
    // Prevent the native click event from bubbling up to avoid double firing
    event.stopPropagation();
    
    // Dispatch our custom click event that can be caught by parent components
    this.dispatchEvent(new CustomEvent('click', {
      bubbles: true,
      composed: true
    }));
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
      `ctt-button--${borderRadiusClass}`,
      this.iconOnly && 'ctt-button--icon-only'
    ].filter(Boolean).join(' ');

    const renderContent = () => {
      const parts = [];
      
      // Handle icon-only buttons
      if (this.iconOnly && this.icon) {
        parts.push(html`<span class="ctt-button__icon ctt-button__icon--only">${this.icon}</span>`);
        return parts;
      }
      
      // Handle left icon
      if (this.iconLeft && this.iconLeftElement) {
        parts.push(html`<span class="ctt-button__icon ctt-button__icon--left">${this.iconLeftElement}</span>`);
      }
      
      // Handle label
      if (this.label && !this.iconOnly) {
        parts.push(html`<span class="ctt-button__label">${this.label}</span>`);
      }
      
      // Handle right icon
      if (this.iconRight && this.iconRightElement) {
        parts.push(html`<span class="ctt-button__icon ctt-button__icon--right">${this.iconRightElement}</span>`);
      }
      
      return parts;
    };

    const accessibleName = this.ariaLabel || this.label;
    const hasVisibleLabel = this.label && this.label.trim().length > 0 && !this.iconOnly;
    const needsAriaLabel = this.iconOnly || (!hasVisibleLabel && accessibleName);

    return html`
      <button
        type="button"
        class=${classes}
        ?disabled=${this.disabled}
        aria-label=${needsAriaLabel && accessibleName ? accessibleName : ''}
        @click=${this._onClick}
      >
        ${renderContent()}
      </button>
    `;
  }
}
