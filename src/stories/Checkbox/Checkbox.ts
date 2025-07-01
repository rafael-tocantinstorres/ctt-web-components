import { html } from 'lit';

import './checkbox.css';

export interface CheckboxProps {
  /**
   * The label text to display next to the checkbox
   */
  label?: string;
  /**
   * The name attribute for the checkbox input
   */
  name?: string;
  /**
   * The value attribute for the checkbox input
   */
  value?: string;
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Whether the checkbox is disabled
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
   * The id attribute for the checkbox
   */
  id?: string;
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Accessible label for screen readers when visual label is not provided
   */
  ariaLabel?: string;
  /**
   * IDs of elements that describe this checkbox
   */
  ariaLabelledby?: string;
}

/**
 * Checkbox component for the CTT Design System
 */
export const Checkbox = ({
  label = '',
  name = '',
  value = '',
  checked = false,
  disabled = false,
  errorText = '',
  onChange,
  id,
  className = '',
  ariaLabel,
  ariaLabelledby
}: CheckboxProps) => {
  
  // Generate unique error ID if error text exists
  const checkboxId = id || `ctt-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = errorText ? `${checkboxId}-error` : undefined;
  
  // Determine if we have accessible labeling
  const hasVisibleLabel = label && label.trim() !== '';
  const hasAriaLabel = ariaLabel && ariaLabel.trim() !== '';
  const hasAriaLabelledby = ariaLabelledby && ariaLabelledby.trim() !== '';
  
  // Warn if no accessible label is provided (in development)
  if (import.meta.env?.DEV) {
    if (!hasVisibleLabel && !hasAriaLabel && !hasAriaLabelledby) {
      console.warn('Checkbox component: No accessible label provided. Please provide either a "label", "ariaLabel", or "ariaLabelledby" prop.');
    }
  }

  // Build CSS classes
  const classes = [
    'ctt-checkbox',
    errorText && 'ctt-checkbox--error',
    disabled && 'ctt-checkbox--disabled',
    className
  ].filter(Boolean).join(' ');

  // Handle change event
  const handleChange = (event: Event) => {
    if (onChange) {
      onChange(event);
    }
  };

  // Checkmark icon (using a simple SVG)
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

  // Error icon
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

  // Build aria attributes for the input
  const inputAriaAttributes = {
    'aria-invalid': errorText ? 'true' : 'false',
    'aria-describedby': errorId,
    'aria-label': hasVisibleLabel ? undefined : ariaLabel,
    'aria-labelledby': ariaLabelledby
  };

  return html`
    <div class=${classes} id=${checkboxId}>
      ${hasVisibleLabel ? html`
        <label class="ctt-checkbox__root">
          <div class="ctt-checkbox__container">
            <input
              class="ctt-checkbox__control"
              type="checkbox"
              name=${name}
              value=${value}
              .checked=${checked}
              ?disabled=${disabled}
              @change=${handleChange}
              aria-invalid=${inputAriaAttributes['aria-invalid']}
              aria-describedby=${inputAriaAttributes['aria-describedby']}
              aria-labelledby=${inputAriaAttributes['aria-labelledby']}
            />
            ${checkmarkIcon}
          </div>
          <span class="ctt-checkbox__label">${label}</span>
        </label>
      ` : html`
        <div class="ctt-checkbox__root">
          <div class="ctt-checkbox__container">
            <input
              class="ctt-checkbox__control"
              type="checkbox"
              name=${name}
              value=${value}
              .checked=${checked}
              ?disabled=${disabled}
              @change=${handleChange}
              aria-invalid=${inputAriaAttributes['aria-invalid']}
              aria-describedby=${inputAriaAttributes['aria-describedby']}
              aria-label=${inputAriaAttributes['aria-label']}
              aria-labelledby=${inputAriaAttributes['aria-labelledby']}
            />
            ${checkmarkIcon}
          </div>
        </div>
      `}
      ${errorText ? html`
        <div 
          class="ctt-checkbox__error" 
          id=${errorId}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-checkbox__error-text">${errorText}</span>
        </div>
      ` : ''}
    </div>
  `;
};
