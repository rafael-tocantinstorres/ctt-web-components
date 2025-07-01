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
  get checked() {
    return this._checked;
  }

  set checked(value: boolean) {
    const oldValue = this._checked;
    this._checked = value;
    
    // If this radio button is being checked and has a name, uncheck others in the group
    if (value && !oldValue && this.name) {
      this._uncheckOtherRadiosInGroup();
    }
    
    this.requestUpdate('checked', oldValue);
  }

  private _checked = false;

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
            @click=${this._handleClick}
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

  private _handleClick(event: Event) {
    const target = event.target as HTMLInputElement;
    
    // If clicking on an already checked radio button, prevent unchecking
    if (this.checked) {
      event.preventDefault();
      return;
    }
    
    // If this radio button has a name (group), uncheck others first
    if (this.name) {
      this._uncheckOtherRadiosInGroup();
    }
    
    // Update this component's checked state
    this.checked = true;
    
    this.dispatchEvent(new CustomEvent('change', {
      detail: { 
        checked: this.checked,
        value: this.value,
        name: this.name
      },
      bubbles: true
    }));
  }

  private _uncheckOtherRadiosInGroup() {
    // Find all radio buttons in the same group and uncheck them
    const allRadioButtons = document.querySelectorAll(`ctt-radio-button[name="${this.name}"]`) as NodeListOf<RadioButton>;
    
    allRadioButtons.forEach(radio => {
      if (radio !== this && radio._checked) {
        const oldValue = radio._checked;
        radio._checked = false;
        radio.requestUpdate('checked', oldValue);
        
        // Also update the internal input element
        const input = radio.shadowRoot?.querySelector('input[type="radio"]') as HTMLInputElement;
        if (input) {
          input.checked = false;
        }
        
        // Trigger a change event for the unchecked radio button
        radio.dispatchEvent(new CustomEvent('change', {
          detail: { 
            checked: false,
            value: radio.value,
            name: radio.name
          },
          bubbles: true
        }));
      }
    });
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
