import { html, nothing } from 'lit';

import './textarea-input.css';

export interface TextareaInputProps {
  /**
   * The label text for the textarea field
   */
  label?: string;
  /**
   * The current value of the textarea
   */
  value?: string;
  /**
   * The name attribute for the textarea
   */
  name?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Error message to display
   */
  errorText?: string | null;
  /**
   * Whether the textarea is disabled
   */
  disabled?: boolean;
  /**
   * Whether the textarea is required
   */
  required?: boolean;
  /**
   * Number of visible text lines
   */
  rows?: number;
  /**
   * Number of columns
   */
  cols?: number | null;
  /**
   * How the textarea can be resized
   */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  /**
   * The id attribute for the textarea
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
 * TextareaInput component for the CTT Design System
 */
export const TextareaInput = ({
  label = '',
  value = '',
  name = '',
  placeholder = '',
  errorText = null,
  disabled = false,
  required = false,
  rows = 4,
  cols = null,
  resize = 'vertical',
  id = null,
  onInput = undefined,
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  ariaDescribedBy = null
}: TextareaInputProps) => {
  
  // Generate unique IDs
  const textareaId = id || `ctt-textarea-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = label ? `${textareaId}-label` : undefined;
  const errorId = errorText ? `${textareaId}-error` : undefined;
  
  // Determine states
  const hasError = Boolean(errorText);
  const isDisabled = disabled;
  
  // Build aria-describedby value
  const ariaDescribedByValue = [ariaDescribedBy, errorId].filter(Boolean).join(' ') || nothing;
  
  // Build CSS classes for container
  const containerClasses = {
    'ctt-textarea-field': true,
    'ctt-textarea-field--error': hasError,
    'ctt-textarea-field--disabled': isDisabled
  };
  
  // Build CSS classes for textarea
  const textareaClasses = {
    'ctt-textarea-field__textarea': true,
    'ctt-textarea-field__textarea--error': hasError,
    'ctt-textarea-field__textarea--disabled': isDisabled
  };
  
  // Build CSS styles for textarea
  const textareaStyles = {
    resize: resize
  };
  
  // Build CSS styles for container and others
  const containerStyles = {};
  const labelStyles = {};
  const errorStyles = {};
  
  // Error icon
  const errorIcon = html`
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
  `;
  
  // Helper function to build class string from object
  const classMap = (classes: Record<string, boolean>) => {
    return Object.entries(classes)
      .filter(([_, condition]) => condition)
      .map(([className, _]) => className)
      .join(' ');
  };
  
  // Helper function to build style string from object
  const styleMap = (styles: Record<string, string>) => {
    return Object.entries(styles)
      .map(([property, value]) => `${property}: ${value}`)
      .join('; ');
  };
  
  // Additional props for spreading
  const props = {};
  
  return html`
    <div 
      class=${classMap(containerClasses)}
      style=${styleMap(containerStyles)}
    >
      ${label ? html`
        <label 
          id=${labelId}
          for=${textareaId}
          class="ctt-textarea-field__label"
          style=${styleMap(labelStyles)}
        >
          ${label}${required ? html`<span class="ctt-textarea-field__required" aria-label="required">*</span>` : nothing}
        </label>
      ` : nothing}
      
      <textarea
        id=${textareaId}
        name=${name}
        class=${classMap(textareaClasses)}
        style=${styleMap(textareaStyles)}
        .value=${value}
        placeholder=${placeholder || nothing}
        ?disabled=${isDisabled}
        ?required=${required}
        rows=${rows}
        cols=${cols || nothing}
        aria-invalid=${hasError ? 'true' : 'false'}
        aria-describedby=${ariaDescribedByValue}
        aria-labelledby=${label ? labelId : nothing}
        @input=${onInput}
        @change=${onChange}
        @focus=${onFocus}
        @blur=${onBlur}
        ...=${props}
      ></textarea>
      
      ${hasError ? html`
        <div 
          id=${errorId}
          class="ctt-textarea-field__error"
          style=${styleMap(errorStyles)}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-textarea-field__error-text">${errorText}</span>
        </div>
      ` : nothing}
    </div>
  `;
};
