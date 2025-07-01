import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './radio-button.css?inline';

/**
 * RadioButton component for the CTT Design System
 */
@customElement('ctt-radio-button')
export class RadioButton extends LitElement {
  static styles = css([styles] as any);
  /**
   * The label text to display next to the radio button
   */
  @property()
  label = '';

  /**
   * The name attribute for the radio button input (required for grouping)
   */
  @property()
  name = '';

  /**
   * The value attribute for the radio button input
   */
  @property()
  value = '';

  /**
   * Whether the radio button is checked
   */
  @property({ type: Boolean })
  checked = false;

  /**
   * Whether the radio button is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Error message to display
   */
  @property({ attribute: 'error-text' })
  errorText = '';

  render() {
    // Generate unique radio button ID
    const radioId = `ctt-radio-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = this.errorText ? `${radioId}-error` : undefined;

    // Build CSS classes
    const classes = [
      'ctt-radio-button',
      this.errorText && 'ctt-radio-button--error',
      this.disabled && 'ctt-radio-button--disabled'
    ].filter(Boolean).join(' ');

    return html`
      <div class=${classes} id=${radioId}>
        <label class="ctt-radio-button__root">
          <input
            class="ctt-radio-button__control"
            type="radio"
            name=${this.name}
            value=${this.value}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._handleChange}
            aria-invalid=${this.errorText ? 'true' : 'false'}
            aria-describedby=${errorId}
          />
          <span class="ctt-radio-button__label">${this.label}</span>
        </label>
        ${this.errorText ? html`
          <div 
            class="ctt-radio-button__error" 
            id=${errorId}
            role="alert"
            aria-live="polite"
          >
            ${this._errorIcon}
            <span class="ctt-radio-button__error-text">${this.errorText}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  private _handleChange(event: Event) {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { 
        checked: (event.target as HTMLInputElement).checked,
        value: this.value,
        name: this.name
      },
      bubbles: true
    }));
  }

  private get _errorIcon() {
    return html`
      <svg 
        class="ctt-radio-button__error-icon" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8C1.33334 11.6819 4.31811 14.6667 8 14.6667Z" 
          fill="currentColor"
        />
        <path 
          d="M8 4V8.66667" 
          stroke="white" 
          stroke-width="1.33333" 
          stroke-linecap="round"
        />
        <path 
          d="M8 11.3333H8.00667" 
          stroke="white" 
          stroke-width="1.33333" 
          stroke-linecap="round"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ctt-radio-button': RadioButton;
  }
}
