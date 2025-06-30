import { html } from 'lit';

import './button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  iconLeft?: boolean;
  iconLeftElement?: string;
  iconRight?: boolean;
  iconRightElement?: string;
  borderRadius?: 'pill' | 'small' | 'extraSmall';
  disabled?: boolean;
  ariaLabel?: string;
}

/** Primary UI component for user interaction */
export const Button = ({ 
  variant = 'primary',
  size = 'medium',
  label,
  onClick,
  iconLeft = false,
  iconLeftElement = '',
  iconRight = false,
  iconRightElement = '',
  borderRadius = 'pill',
  disabled = false,
  ariaLabel = ''
 }: ButtonProps) => {

  const borderRadiusClass = {
    'pill': 'pill',
    'small': 'small-radius',
    'extraSmall': 'extra-small-radius'
  }[borderRadius] || 'pill';

  const classes = [
    'ctt-button',
    `ctt-button--${size}`,
    `ctt-button--${variant}`,
    `ctt-button--${borderRadiusClass}`
  ].join(' ');

  const renderContent = () => {
    const parts = [];
    
    if (iconLeft && iconLeftElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--left">${iconLeftElement}</span>`);
    }
    
    if (label) {
      parts.push(html`<span class="ctt-button__label">${label}</span>`);
    }
    
    if (iconRight && iconRightElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--right">${iconRightElement}</span>`);
    }
    
    return parts;
  };

  const accessibleName = ariaLabel || label;
  const hasVisibleLabel = label && label.trim().length > 0;

  return html`
    <button
      type="button"
      class=${classes}
      ?disabled=${disabled}
      aria-label=${!hasVisibleLabel && accessibleName ? accessibleName : ''}
      @click=${onClick}
    >
      ${renderContent()}
    </button>
  `;
};
