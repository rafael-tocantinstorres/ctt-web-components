import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './toggle-switch.css?inline';

/**
 * ToggleSwitch component for the CTT Design System
 */

declare global {
  interface HTMLElementTagNameMap {
    'ctt-toggle-switch': ToggleSwitch;
  }
}
@customElement('ctt-toggle-switch')
export class ToggleSwitch extends LitElement {
  static styles = css([styles] as any);
  /**
   * Whether the toggle switch is checked
   */
  @property({ type: Boolean })
  checked = false;

  /**
   * Whether the toggle switch is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * The label text for the toggle switch
   */
  @property()
  label = '';

  /**
   * Whether to show the label
   */
  @property({ type: Boolean, attribute: 'show-label' })
  showLabel = true;

  /**
   * Accessible label for screen readers when visual label is not provided
   */
  @property({ attribute: 'aria-label' })
  ariaLabel = '';

  /**
   * IDs of elements that describe this toggle switch
   */
  @property({ attribute: 'aria-labelledby' })
  ariaLabelledby = '';

  connectedCallback() {
    super.connectedCallback();
    this._checkAccessibilityWarnings();
  }

  render() {
    const hasVisibleLabel = this.showLabel && this.label && this.label.trim() !== '';
    
    return html`
      ${hasVisibleLabel ? html`
        <label 
          part="root" 
          class="ctt-toggle-switch__root"
          ?data-disabled=${this.disabled}
        >
          <input
            part="control"
            class="ctt-toggle-switch__control"
            type="checkbox"
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._handleChange}
            aria-labelledby=${this.ariaLabelledby || undefined}
          />
          <span part="thumb" class="ctt-toggle-switch__thumb"></span>
          <span 
            part="label" 
            class="ctt-toggle-switch__label"
          >
            ${this.label}
          </span>
        </label>
      ` : html`
        <div 
          part="root" 
          class="ctt-toggle-switch__root"
          ?data-disabled=${this.disabled}
        >
          <input
            part="control"
            class="ctt-toggle-switch__control"
            type="checkbox"
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._handleChange}
            aria-label=${this.ariaLabel || undefined}
            aria-labelledby=${this.ariaLabelledby || undefined}
          />
          <span part="thumb" class="ctt-toggle-switch__thumb"></span>
        </div>
      `}
    `;
  }

  private _handleChange(event: Event) {
    if (!this.disabled) {
      const target = event.target as HTMLInputElement;
      this.checked = target.checked;
      
      // Dispatch custom event
      this.dispatchEvent(new CustomEvent('toggle-change', {
        detail: { 
          checked: this.checked,
          originalEvent: event
        },
        bubbles: true
      }));
    }
  }

  private _checkAccessibilityWarnings() {
    // Determine if we have accessible labeling
    const hasVisibleLabel = this.showLabel && this.label && this.label.trim() !== '';
    const hasAriaLabel = this.ariaLabel && this.ariaLabel.trim() !== '';
    const hasAriaLabelledby = this.ariaLabelledby && this.ariaLabelledby.trim() !== '';
    
    // Warn if no accessible label is provided (in development)
    if (import.meta.env?.DEV) {
      if (!hasVisibleLabel && !hasAriaLabel && !hasAriaLabelledby) {
        console.warn('ToggleSwitch component: No accessible label provided. Please provide either a visible "label" with "show-label", "aria-label", or "aria-labelledby" attribute.');
      }
    }
  }
}
