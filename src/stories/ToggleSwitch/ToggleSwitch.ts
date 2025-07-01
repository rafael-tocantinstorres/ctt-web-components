import { html } from 'lit';

import './toggle-switch.css';

export interface ToggleSwitchProps {
  /**
   * Whether the toggle switch is checked
   */
  checked?: boolean;
  /**
   * Whether the toggle switch is disabled
   */
  disabled?: boolean;
  /**
   * The label text for the toggle switch
   */
  label?: string;
  /**
   * Whether to show the label
   */
  showLabel?: boolean;
  /**
   * Change event handler
   */
  onChange?: (event: Event) => void;
  /**
   * The id attribute for the toggle switch
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
   * IDs of elements that describe this toggle switch
   */
  ariaLabelledby?: string;
}

/**
 * ToggleSwitch component for the CTT Design System
 */
export const ToggleSwitch = ({
  checked = false,
  disabled = false,
  label = '',
  showLabel = true,
  onChange,
  id,
  className = '',
  ariaLabel,
  ariaLabelledby
}: ToggleSwitchProps) => {
  
  // Generate unique ID
  const ToggleSwitchId = id || `ctt-toggle-switch-${Math.random().toString(36).substr(2, 9)}`;
  
  // Determine if we have accessible labeling
  const hasVisibleLabel = showLabel && label && label.trim() !== '';
  const hasAriaLabel = ariaLabel && ariaLabel.trim() !== '';
  const hasAriaLabelledby = ariaLabelledby && ariaLabelledby.trim() !== '';
  
  // Warn if no accessible label is provided (in development)
  if (import.meta.env?.DEV) {
    if (!hasVisibleLabel && !hasAriaLabel && !hasAriaLabelledby) {
      console.warn('ToggleSwitch component: No accessible label provided. Please provide either a visible "label" with "showLabel: true", "ariaLabel", or "ariaLabelledby" prop.');
    }
  }
  
  // Handle change event
  const handleChange = (event: Event) => {
    if (onChange && !disabled) {
      onChange(event);
    }
  };

  // Build CSS classes
  const classes = [
    'ctt-toggle-switch',
    disabled && 'ctt-toggle-switch--disabled',
    className
  ].filter(Boolean).join(' ');

  // Additional props for spreading
  const props = {};

  return html`
    <div class=${classes} id=${ToggleSwitchId} ...=${props}>
      ${hasVisibleLabel ? html`
        <label 
          part="root" 
          class="ctt-toggle-switch__root"
          ?data-disabled=${disabled}
        >
          <input
            part="control"
            class="ctt-toggle-switch__control"
            type="checkbox"
            ?checked=${checked}
            ?disabled=${disabled}
            @change=${handleChange}
            aria-labelledby=${ariaLabelledby}
          />
          <span part="thumb" class="ctt-toggle-switch__thumb"></span>
          <span 
            part="label" 
            class="ctt-toggle-switch__label"
          >
            ${label}
          </span>
        </label>
      ` : html`
        <div 
          part="root" 
          class="ctt-toggle-switch__root"
          ?data-disabled=${disabled}
        >
          <input
            part="control"
            class="ctt-toggle-switch__control"
            type="checkbox"
            ?checked=${checked}
            ?disabled=${disabled}
            @change=${handleChange}
            aria-label=${hasVisibleLabel ? undefined : ariaLabel}
            aria-labelledby=${ariaLabelledby}
          />
          <span part="thumb" class="ctt-toggle-switch__thumb"></span>
        </div>
      `}
    </div>
  `;
};
