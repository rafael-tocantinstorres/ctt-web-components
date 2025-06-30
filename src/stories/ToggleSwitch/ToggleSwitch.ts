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
  className = ''
}: ToggleSwitchProps) => {
  
  // Generate unique ID
  const ToggleSwitchId = id || `ctt-toggle-switch-${Math.random().toString(36).substr(2, 9)}`;
  
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
        />
        <span part="thumb" class="ctt-toggle-switch__thumb"></span>
        ${showLabel && label ? html`
          <span 
            part="label" 
            class="ctt-toggle-switch__label"
          >
            ${label}
          </span>
        ` : ''}
      </label>
    </div>
  `;
};
