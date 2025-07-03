import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import styles from './dropdown-input.css?inline';

export interface DropdownOption {
  label: string;
  value: any;
  description?: string;
  disabled?: boolean;
}

/**
 * DropdownInput component for the CTT Design System
 */

declare global {
  interface HTMLElementTagNameMap {
    'ctt-dropdown-input': DropdownInput;
  }
}

@customElement('ctt-dropdown-input')
export class DropdownInput<T = DropdownOption> extends LitElement {
  static styles = css([styles] as any);

  /**
   * The label text for the dropdown field
   */
  @property()
  label = '';

  /**
   * The name attribute for form integration
   */
  @property()
  name = '';

  /**
   * Placeholder text
   */
  @property()
  placeholder = 'Select an option...';

  /**
   * Array of options to display
   */
  @property({ type: Array })
  options: T[] = [];

  /**
   * The current selected value(s)
   */
  @property()
  get value() {
    return this._value;
  }

  set value(newValue: any) {
    const oldValue = this._value;
    this._value = newValue !== null && newValue !== undefined ? newValue : (this.multiple ? [] : null);
    this.requestUpdate('value', oldValue);
  }

  private _value: any = null;

  /**
   * Whether multiple selections are allowed
   */
  @property({ type: Boolean })
  multiple = false;

  /**
   * Whether the dropdown is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Whether the dropdown is required
   */
  @property({ type: Boolean })
  required = false;

  /**
   * Error message to display
   */
  @property({ attribute: 'error-text' })
  errorText = '';

  /**
   * Size variant
   */
  @property()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether to show descriptions for options that have them
   */
  @property({ type: Boolean, attribute: 'has-description' })
  hasDescription = false;

  /**
   * Property name to use for the option label (for custom option objects)
   */
  @property({ attribute: 'label-key' })
  labelKey?: keyof T;

  /**
   * Property name to use for the option value (for custom option objects)
   */
  @property({ attribute: 'value-key' })
  valueKey?: keyof T;

  /**
   * Property name to use for the option description (for custom option objects)
   */
  @property({ attribute: 'description-key' })
  descriptionKey?: keyof T;

  /**
   * Property name to use for the option disabled state (for custom option objects)
   */
  @property({ attribute: 'disabled-key' })
  disabledKey?: keyof T;

  /**
   * Internal state for dropdown open/closed
   */
  @state()
  private _isOpen = false;

  /**
   * Flag to prevent outside click during option selection
   */
  @state()
  private _isOptionClicking = false;

  /**
   * Unique ID for the dropdown
   */
  private _dropdownId = `ctt-dropdown-${Math.random().toString(36).substr(2, 9)}`;

  connectedCallback() {
    super.connectedCallback();
    // Initialize value if not set
    if (this._value === null) {
      this._value = this.multiple ? [] : null;
    }
    // Add outside click listener
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Remove outside click listener
    document.removeEventListener('click', this._handleOutsideClick);
  }

  // Helper functions for property extraction
  private _getOptionLabel(option: T): string {
    if (this.labelKey && option) {
      return String(option[this.labelKey]);
    }
    return (option as any)?.label || '';
  }

  private _getOptionValue(option: T): any {
    if (this.valueKey && option) {
      return option[this.valueKey];
    }
    return (option as any)?.value;
  }

  private _getOptionDescription(option: T): string | undefined {
    if (this.descriptionKey && option) {
      return String(option[this.descriptionKey]);
    }
    return (option as any)?.description;
  }

  private _getOptionDisabled(option: T): boolean {
    if (this.disabledKey && option) {
      return Boolean(option[this.disabledKey]);
    }
    return Boolean((option as any)?.disabled);
  }

  private _getDisplayText(): string {
    if (!this._value || !this.options) return this.placeholder;
    
    if (this.multiple && Array.isArray(this._value)) {
      if (this._value.length === 0) return this.placeholder;
      if (this._value.length === 1) {
        const option = this.options.find(opt => this._getOptionValue(opt) === this._value[0]);
        return option ? this._getOptionLabel(option) : this.placeholder;
      }
      if (this._value.length <= 3) {
        const selectedLabels = this._value
          .map(val => {
            const option = this.options.find(opt => this._getOptionValue(opt) === val);
            return option ? this._getOptionLabel(option) : val;
          })
          .join(', ');
        return selectedLabels;
      }
      return `${this._value.length} selected`;
    }
    
    const option = this.options.find(opt => this._getOptionValue(opt) === this._value);
    return option ? this._getOptionLabel(option) : this.placeholder;
  }

  private _isOptionSelected(option: T): boolean {
    const optionValue = this._getOptionValue(option);
    if (this.multiple && Array.isArray(this._value)) {
      return this._value.includes(optionValue);
    }
    return this._value === optionValue;
  }

  private _handleTriggerClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.disabled) return;
    
    this._isOpen = !this._isOpen;
    
    // Dispatch focus/blur events
    if (this._isOpen) {
      this.dispatchEvent(new CustomEvent('focus', {
        detail: { originalEvent: e },
        bubbles: true
      }));
    } else {
      this.dispatchEvent(new CustomEvent('blur', {
        detail: { originalEvent: e },
        bubbles: true
      }));
    }
  }

  private _handleTriggerKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._handleTriggerClick(e);
    } else if (e.key === 'Escape' && this._isOpen) {
      e.preventDefault();
      this._isOpen = false;
      this.dispatchEvent(new CustomEvent('blur', {
        detail: { originalEvent: e },
        bubbles: true
      }));
    }
  }

  private _handleOptionClick(option: T, e: Event) {
    if (this._getOptionDisabled(option) || this.disabled) return;
    
    this._isOptionClicking = true; // Set flag to prevent outside click
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    const optionValue = this._getOptionValue(option);
    let newValue;
    
    if (this.multiple) {
      const currentArray = Array.isArray(this._value) ? this._value : [];
      if (currentArray.includes(optionValue)) {
        newValue = currentArray.filter(v => v !== optionValue);
      } else {
        newValue = [...currentArray, optionValue];
      }
      // Keep dropdown open for multiple selection
    } else {
      newValue = optionValue;
      // Close dropdown for single selection
      this._isOpen = false;
    }
    
    this._value = newValue;
    
    // Dispatch change event
    this.dispatchEvent(new CustomEvent('change', {
      detail: { 
        value: newValue,
        option: option,
        name: this.name
      },
      bubbles: true
    }));
    
    // Reset flag after a short delay
    setTimeout(() => {
      this._isOptionClicking = false;
    }, 100);
  }

  private _handleOptionKeydown(option: T, e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._handleOptionClick(option, e);
    }
  }

  private _handleOutsideClick = (e: Event) => {
    // Don't close if we're currently clicking an option
    if (this._isOptionClicking) {
      return;
    }
    
    if (!this.contains(e.target as Node)) {
      this._isOpen = false;
    }
  };

  private _renderOption(option: T) {
    const isSelected = this._isOptionSelected(option);
    const isDisabledOption = this._getOptionDisabled(option);
    
    const optionClasses = {
      'ctt-dropdown__option': true,
      'ctt-dropdown__option--selected': isSelected,
      'ctt-dropdown__option--disabled': isDisabledOption,
      'ctt-dropdown__option--checkbox': this.multiple,
    };

    if (this.multiple) {
      return html`
        <div 
          class=${classMap(optionClasses)}
          role="option"
          aria-selected=${isSelected ? 'true' : 'false'}
          tabindex=${isDisabledOption ? '-1' : '0'}
          @click=${(e: Event) => this._handleOptionClick(option, e)}
          @keydown=${(e: KeyboardEvent) => this._handleOptionKeydown(option, e)}
        >
          <label class="ctt-checkbox__root">
            <div class="ctt-checkbox__container">
              <input
                type="checkbox"
                .checked=${isSelected}
                ?disabled=${isDisabledOption}
                class="ctt-checkbox__control"
                @click=${(e: Event) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              />
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
            </div>
            <span class="ctt-checkbox__label">${this._getOptionLabel(option)}</span>
          </label>
          ${this.hasDescription && this._getOptionDescription(option) ? html`
            <div class="ctt-dropdown__option-description">
              ${this._getOptionDescription(option)}
            </div>
          ` : ''}
        </div>
      `;
    } else {
      return html`
        <div 
          class=${classMap(optionClasses)}
          role="option"
          aria-selected=${isSelected ? 'true' : 'false'}
          tabindex=${isDisabledOption ? '-1' : '0'}
          @click=${(e: Event) => this._handleOptionClick(option, e)}
          @keydown=${(e: KeyboardEvent) => this._handleOptionKeydown(option, e)}
        >
          <div class="ctt-dropdown__option-content">
            <div class="ctt-dropdown__option-label">
              ${this._getOptionLabel(option)}
            </div>
            ${this.hasDescription && this._getOptionDescription(option) ? html`
              <div class="ctt-dropdown__option-description">
                ${this._getOptionDescription(option)}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }
  }

  render() {
    const labelId = `${this._dropdownId}-label`;
    const errorId = `${this._dropdownId}-error`;

    const containerClasses = {
      'ctt-dropdown': true,
      [`ctt-dropdown--${this.size}`]: true,
      'ctt-dropdown--disabled': this.disabled,
      'ctt-dropdown--error': !!this.errorText,
      'ctt-dropdown--open': this._isOpen,
    };

    return html`
      <div class=${classMap(containerClasses)}>
        ${this.label ? html`
          <label 
            id=${labelId}
            for=${this._dropdownId}
            class="ctt-dropdown__label"
          >
            ${this.label}
            ${this.required ? html`
              <span class="ctt-dropdown__required" aria-label="required">*</span>
            ` : ''}
          </label>
        ` : ''}

        <input
          type="hidden"
          name=${this.name}
          .value=${this.multiple && Array.isArray(this._value) ? this._value.join(',') : (this._value || '')}
        />

        <div class="ctt-dropdown__container">
          <button
            type="button"
            id=${this._dropdownId}
            class="ctt-dropdown__trigger"
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-haspopup="listbox"
            aria-expanded=${this._isOpen ? 'true' : 'false'}
            aria-invalid=${this.errorText ? 'true' : 'false'}
            aria-describedby=${this.errorText ? errorId : ''}
            aria-labelledby=${this.label ? labelId : ''}
            @click=${this._handleTriggerClick}
            @keydown=${this._handleTriggerKeydown}
          >
            <span class="ctt-dropdown__trigger-text">
              ${this._getDisplayText()}
            </span>
            <span class="ctt-dropdown__chevron" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </span>
          </button>

          <div 
            class=${classMap({
              'ctt-dropdown__list': true,
              'ctt-dropdown__list--open': this._isOpen
            })}
            role="listbox"
            aria-multiselectable=${this.multiple ? 'true' : 'false'}
          >
            ${repeat(this.options || [], (option) => this._getOptionValue(option), (option) => this._renderOption(option))}
          </div>
        </div>

        ${this.errorText ? html`
          <div 
            id=${errorId}
            class="ctt-dropdown__error"
            role="alert"
            aria-live="polite"
          >
            <svg class="ctt-dropdown__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
            </svg>
            <span class="ctt-dropdown__error-text">${this.errorText}</span>
          </div>
        ` : ''}
      </div>
    `;
  }
}