import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './checkbox.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'ctt-checkbox': CttCheckbox;
  }
}


@customElement('ctt-checkbox')
export class CttCheckbox extends LitElement {
  static styles = css([styles] as any);

  @property({ type: String })
  label = '';

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  errorText = '';

  @property({ type: String })
  id = `ctt-checkbox-${Math.random().toString(36).substring(2, 9)}`;

  @property({ type: String })
  className = '';

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  @property({ type: String, attribute: 'aria-labelledby' })
  ariaLabelledby: string | null = null;

  private _handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          checked: this.checked,
          value: this.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  connectedCallback() {
    super.connectedCallback();
    if (import.meta.env?.DEV) {
      if (!this.label && !this.ariaLabel && !this.ariaLabelledby) {
        console.warn('Checkbox component: No accessible label provided. Please provide either a "label", "ariaLabel", or "ariaLabelledby" prop.');
      }
    }
  }

  render() {
    const errorId = this.errorText ? `${this.id}-error` : undefined;
    const hasVisibleLabel = this.label && this.label.trim() !== '';

    const classes = [
      'ctt-checkbox',
      this.errorText && 'ctt-checkbox--error',
      this.disabled && 'ctt-checkbox--disabled',
      this.className
    ].filter(Boolean).join(' ');

    const checkmarkIcon = html`
      <svg 
        class="ctt-checkbox__checkmark" 
        viewBox="0 0 12 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M2.5 6L4.5 8L9.5 3" 
          stroke="currentColor" 
          stroke-width="1.5" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    `;

    const errorIcon = html`
      <svg 
        class="ctt-checkbox__error-icon" 
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

    const inputAriaAttributes = {
      'aria-invalid': this.errorText ? 'true' : 'false',
      'aria-describedby': errorId,
      'aria-label': hasVisibleLabel ? undefined : this.ariaLabel,
      'aria-labelledby': this.ariaLabelledby
    };

    const inputElement = html`
      <input
        class="ctt-checkbox__control"
        type="checkbox"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
        aria-invalid=${inputAriaAttributes['aria-invalid']}
        aria-describedby=${inputAriaAttributes['aria-describedby']}
        aria-label=${inputAriaAttributes['aria-label']}
        aria-labelledby=${inputAriaAttributes['aria-labelledby']}
      />
    `;

    return html`
      <div class=${classes} id=${this.id}>
        <label class="ctt-checkbox__root">
          <div class="ctt-checkbox__container">
            ${inputElement}
            ${checkmarkIcon}
          </div>
          ${hasVisibleLabel ? html`<span class="ctt-checkbox__label">${this.label}</span>` : ''}
        </label>
        ${this.errorText ? html`
          <div 
            class="ctt-checkbox__error" 
            id=${errorId}
            role="alert"
            aria-live="polite"
          >
            ${errorIcon}
            <span class="ctt-checkbox__error-text">${this.errorText}</span>
          </div>
        ` : ''}
      </div>
    `;
  }
}