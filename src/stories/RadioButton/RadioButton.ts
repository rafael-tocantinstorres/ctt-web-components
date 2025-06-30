import { html } from 'lit';

import './radio-button.css';

export interface RadioButtonProps {
  /**
   * The label text to display next to the radio button
   */
  label?: string;
  /**
   * The name attribute for the radio button input (required for grouping)
   */
  name?: string;
  /**
   * The value attribute for the radio button input
   */
  value?: string;
  /**
   * Whether the radio button is checked
   */
  checked?: boolean;
  /**
   * Whether the radio button is disabled
   */
  disabled?: boolean;
  /**
   * Error message to display
   */
  errorText?: string;
  /**
   * Change handler function
   */
  onChange?: (event: Event) => void;
  /**
   * The id attribute for the radio button
   */
  id?: string;
  /**
   * Custom CSS class
   */
  className?: string;
}

/**
 * RadioButton component for the CTT Design System
 */
export const RadioButton = ({
  label = '',
  name = '',
  value = '',
  checked = false,
  disabled = false,
  errorText = '',
  onChange,
  id,
  className = ''
}: RadioButtonProps) => {
  
  // Generate unique radio button ID if not provided
  const radioId = id || `ctt-radio-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = errorText ? `${radioId}-error` : undefined;

  // Build CSS classes
  const classes = [
    'ctt-radio-button',
    errorText && 'ctt-radio-button--error',
    disabled && 'ctt-radio-button--disabled',
    className
  ].filter(Boolean).join(' ');

  // Handle change event
  const handleChange = (event: Event) => {
    if (onChange) {
      onChange(event);
    }
  };

  // Error icon
  const errorIcon = html`
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

  return html`
    <div class=${classes} id=${radioId}>
      <label class="ctt-radio-button__root">
        <input
          class="ctt-radio-button__control"
          type="radio"
          name=${name}
          value=${value}
          .checked=${checked}
          ?disabled=${disabled}
          @change=${handleChange}
          aria-invalid=${errorText ? 'true' : 'false'}
          aria-describedby=${errorId}
        />
        <span class="ctt-radio-button__label">${label}</span>
      </label>
      ${errorText ? html`
        <div 
          class="ctt-radio-button__error" 
          id=${errorId}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-radio-button__error-text">${errorText}</span>
        </div>
      ` : ''}
    </div>
  `;
};
