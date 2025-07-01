import { html, LitElement, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './input-field.css?inline';

@customElement('ctt-input-field')
export class CttInputField extends LitElement {
  static styles = css([styles] as any);

  @property({ type: String })
  label = '';

  @property({ type: String })
  value = '';

  @property({ type: String })
  name = '';

  @property({ type: String })
  type = 'text';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  error: string | null = null;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: String })
  id: string = '';

  @property({ type: String })
  ariaDescribedBy: string | null = null;

  private get inputId() {
    return this.id || `ctt-input-${Math.random().toString(36).substr(2, 9)}`;
  }
  private get labelId() {
    return this.label ? `${this.inputId}-label` : undefined;
  }
  private get errorId() {
    return this.error ? `${this.inputId}-error` : undefined;
  }

  private get hasError() {
    return Boolean(this.error);
  }

  private get isDisabled() {
    return this.disabled;
  }

  private get ariaDescribedByValue() {
    return [this.ariaDescribedBy, this.errorId].filter(Boolean).join(' ') || nothing;
  }

  private onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('input', { detail: this.value }));
  }

  private onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
  }

  private onFocus(event: Event) {
    this.dispatchEvent(new CustomEvent('focus', { detail: event }));
  }

  private onBlur(event: Event) {
    this.dispatchEvent(new CustomEvent('blur', { detail: event }));
  }

  render() {
    const containerClasses = {
      'ctt-input-field': true,
      [`ctt-input-field--${this.size}`]: true,
      'ctt-input-field--error': this.hasError,
      'ctt-input-field--disabled': this.isDisabled,
    };

    const inputClasses = {
      'ctt-input-field__input': true,
      'ctt-input-field__input--error': this.hasError,
      'ctt-input-field__input--disabled': this.isDisabled,
    };

    const errorIcon = html`
      <svg
        class="ctt-input-field__error-icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8C1.33334 11.6819 4.31811 14.6667 8 14.6667Z"
          fill="currentColor"
        />
        <path d="M8 4V8.66667" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
        <path d="M8 11.3333H8.00667" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
      </svg>
    `;

    return html`
      <div class=${classMap(containerClasses)}>
        ${this.label
          ? html`
              <label id=${this.labelId} for=${this.inputId} class="ctt-input-field__label">
                ${this.label}${this.required ? html`<span class="ctt-input-field__required" aria-label="required">*</span>` : nothing}
              </label>
            `
          : nothing}

        <input
          id=${this.inputId}
          name=${this.name}
          type=${this.type}
          class=${classMap(inputClasses)}
          .value=${this.value}
          placeholder=${this.placeholder || nothing}
          ?disabled=${this.isDisabled}
          ?required=${this.required}
          aria-invalid=${this.hasError ? 'true' : 'false'}
          aria-describedby=${this.ariaDescribedByValue}
          aria-label=${this.label ? this.labelId : nothing}
          aria-labelledby=${this.label ? this.labelId : nothing}
          @input=${this.onInput}
          @change=${this.onChange}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />

        ${this.hasError
          ? html`
              <div id=${this.errorId} class="ctt-input-field__error" role="alert" aria-live="polite">
                ${errorIcon}
                <span class="ctt-input-field__error-text">${this.error}</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }
}
