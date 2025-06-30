import { html, nothing } from 'lit';

import './input-field.css';

export interface InputFieldProps {
  /**
   * The label text for the input field
   */
  label?: string;
  /**
   * The current value of the input
   */
  value?: string;
  /**
   * The name attribute for the input
   */
  name?: string;
  /**
   * The type of input (text, email, password, etc.)
   */
  type?: string;
  /**
   * Placeholder text for the input
   */
  placeholder?: string;
  /**
   * Error message to display
   */
  error?: string | null;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Size variant of the input field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The id attribute for the input
   */
  id?: string | null;
  /**
   * Input event handler
   */
  onInput?: (event: Event) => void;
  /**
   * Change event handler
   */
  onChange?: (event: Event) => void;
  /**
   * Focus event handler
   */
  onFocus?: (event: Event) => void;
  /**
   * Blur event handler
   */
  onBlur?: (event: Event) => void;
  /**
   * Custom aria-describedby attribute
   */
  ariaDescribedBy?: string | null;
}

/**
 * InputField component for the CTT Design System
 */
export const InputField = ({
  label = '',
  value = '',
  name = '',
  type = 'text',
  placeholder = '',
  error = null,
  disabled = false,
  required = false,
  size = 'medium',
  id = null,
  onInput = undefined,
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  ariaDescribedBy = null
}: InputFieldProps) => {
  
  // Generate unique IDs
  const inputId = id || `ctt-input-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = label ? `${inputId}-label` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  
  // Determine states
  const hasError = Boolean(error);
  const isDisabled = disabled;
  
  // Build aria-describedby value
  const ariaDescribedByValue = [ariaDescribedBy, errorId].filter(Boolean).join(' ') || nothing;
  
  // Build CSS classes for container
  const containerClasses = {
    'ctt-input-field': true,
    [`ctt-input-field--${size}`]: true,
    'ctt-input-field--error': hasError,
    'ctt-input-field--disabled': isDisabled
  };
  
  // Build CSS classes for input
  const inputClasses = {
    'ctt-input-field__input': true,
    'ctt-input-field__input--error': hasError,
    'ctt-input-field__input--disabled': isDisabled
  };
  
  // Error icon
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
  
  // Helper function to build class string from object
  const classMap = (classes: Record<string, boolean>) => {
    return Object.entries(classes)
      .filter(([_, condition]) => condition)
      .map(([className, _]) => className)
      .join(' ');
  };
  
  return html`
    <div class=${classMap(containerClasses)}>
      ${label ? html`
        <label 
          id=${labelId}
          for=${inputId}
          class="ctt-input-field__label"
        >
          ${label}${required ? html`<span class="ctt-input-field__required" aria-label="required">*</span>` : nothing}
        </label>
      ` : nothing}
      
      <input
        id=${inputId}
        name=${name}
        type=${type}
        class=${classMap(inputClasses)}
        .value=${value}
        placeholder=${placeholder || nothing}
        ?disabled=${isDisabled}
        ?required=${required}
        aria-invalid=${hasError ? 'true' : 'false'}
        aria-describedby=${ariaDescribedByValue}
        aria-labelledby=${label ? labelId : nothing}
        @input=${onInput}
        @change=${onChange}
        @focus=${onFocus}
        @blur=${onBlur}
      />
      
      ${hasError ? html`
        <div 
          id=${errorId}
          class="ctt-input-field__error"
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-input-field__error-text">${error}</span>
        </div>
      ` : nothing} 
    </div>
  `;
};
