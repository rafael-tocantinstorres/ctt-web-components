import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './textarea-input.css?inline';

/**
 * Textarea Input Component
 * A web component for textarea input fields following the CTT design system.
 */

declare global {
  interface HTMLElementTagNameMap {
    'textarea-input': TextareaInput
  }
}
@customElement('textarea-input')
export class TextareaInput extends LitElement {
  static styles = css([styles] as any)
  @property()
  label = ''

  @property()
  value = ''

  @property()
  name = ''

  @property()
  placeholder = ''

  @property()
  errorText = ''

  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean })
  required = false

  @property({ type: Number })
  rows = 4

  @property({ type: Number })
  cols = 0

  @property()
  resize = 'vertical'

  @property()
  ariaDescribedBy = ''

  render() {
    const textareaId = this._generateId()
    const labelId = this.label ? `${textareaId}-label` : undefined
    const errorId = this.errorText ? `${textareaId}-error` : undefined
    const hasError = Boolean(this.errorText)

    const ariaDescribedByValue = [this.ariaDescribedBy, errorId]
      .filter(Boolean)
      .join(' ') || undefined

    return html`
      <div class="ctt-textarea-field ${hasError ? 'ctt-textarea-field--error' : ''} ${this.disabled ? 'ctt-textarea-field--disabled' : ''}">
        ${this.label ? html`
          <label 
            id=${labelId}
            for=${textareaId}
            class="ctt-textarea-field__label"
          >
            ${this.label}${this.required ? html`<span class="ctt-textarea-field__required" aria-label="required">*</span>` : ''}
          </label>
        ` : ''}
        
        <textarea
          id=${textareaId}
          name=${this.name}
          class="ctt-textarea-field__textarea ${hasError ? 'ctt-textarea-field__textarea--error' : ''} ${this.disabled ? 'ctt-textarea-field__textarea--disabled' : ''}"
          style="resize: ${this.resize}"
          .value=${this.value}
          placeholder=${this.placeholder || undefined}
          ?disabled=${this.disabled}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols || undefined}
          aria-invalid=${hasError ? 'true' : 'false'}
          aria-describedby=${ariaDescribedByValue}
          aria-labelledby=${this.label ? labelId : undefined}
          @input=${this._onInput}
          @change=${this._onChange}
          @focus=${this._onFocus}
          @blur=${this._onBlur}
        ></textarea>
        
        ${hasError ? html`
          <div 
            id=${errorId}
            class="ctt-textarea-field__error"
            role="alert"
            aria-live="polite"
          >
            ${this._errorIcon}
            <span class="ctt-textarea-field__error-text">${this.errorText}</span>
          </div>
        ` : ''}
      </div>
    `
  }

  private _generateId() {
    return `ctt-textarea-${Math.random().toString(36).substr(2, 9)}`
  }

  private _onInput(event: Event) {
    const target = event.target as HTMLTextAreaElement
    this.value = target.value
    this.dispatchEvent(new CustomEvent('textarea-input', {
      detail: { value: this.value },
      bubbles: true
    }))
  }

  private _onChange(event: Event) {
    const target = event.target as HTMLTextAreaElement
    this.value = target.value
    this.dispatchEvent(new CustomEvent('textarea-change', {
      detail: { value: this.value },
      bubbles: true
    }))
  }

  private _onFocus(event: Event) {
    this.dispatchEvent(new CustomEvent('textarea-focus', {
      detail: { value: this.value },
      bubbles: true
    }))
  }

  private _onBlur(event: Event) {
    this.dispatchEvent(new CustomEvent('textarea-blur', {
      detail: { value: this.value },
      bubbles: true
    }))
  }

  private get _errorIcon() {
    return html`
      <svg 
        class="ctt-textarea-field__error-icon" 
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
    `
  }
}