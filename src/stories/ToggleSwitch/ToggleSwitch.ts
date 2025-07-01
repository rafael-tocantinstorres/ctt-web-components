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
  @property({ attribute: 'aria-label', reflect: false })
  ariaLabel = '';

  /**
   * IDs of elements that describe this toggle switch
   */
  @property({ attribute: 'aria-labelledby', reflect: false })
  ariaLabelledby = '';

  /**
   * The name attribute for the input element
   */
  @property()
  name = '';

   /**
   * The role attribute for the input element
   */
  @property()
  role = '';

  /**
   * Private randomized ID for the input element
   */
  private _inputId = `ctt-toggle-switch-${Math.random().toString(36).substr(2, 9)}`;

  connectedCallback() {
    super.connectedCallback();
    this._checkAccessibilityWarnings();
  }

  render() {
    const hasVisibleLabel = this.showLabel && this.label && this.label.trim() !== '';
    const hasAriaLabel = this.ariaLabel && this.ariaLabel.trim() !== '';
    const hasAriaLabelledby = this.ariaLabelledby && this.ariaLabelledby.trim() !== '';
    
    // Determine the label text for accessibility
    const labelText = hasAriaLabel ? this.ariaLabel : 
                     hasVisibleLabel ? this.label : 
                     this.label && this.label.trim() !== '' ? this.label : 
                     'Toggle switch';
    
    return html`
      <label 
        part="root" 
        class="ctt-toggle-switch__root"
        ?data-disabled=${this.disabled}
        for=${this._inputId}
        aria-label=${hasAriaLabel ? undefined : labelText}
        aria-labelledby=${hasAriaLabelledby ? this.ariaLabelledby : undefined}
      >
        <input
          part="control"
          class="ctt-toggle-switch__control"
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
          id=${this._inputId}
          name=${this.name || undefined}
          role=${this.role || 'switch'}
        />
        <span part="thumb" class="ctt-toggle-switch__thumb"></span>
        ${hasVisibleLabel ? html`
          <span 
            part="label" 
            class="ctt-toggle-switch__label"
          >
            ${this.label}
          </span>
        ` : ''}
      </label>
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
    // Check if user provided custom accessibility attributes
    const hasAriaLabel = this.ariaLabel && this.ariaLabel.trim() !== '';
    const hasAriaLabelledby = this.ariaLabelledby && this.ariaLabelledby.trim() !== '';
    const hasVisibleLabel = this.showLabel && this.label && this.label.trim() !== '';
    
    // Info message when using fallback (in development)
    if (import.meta.env?.DEV) {
      if (!hasAriaLabel && !hasAriaLabelledby && !hasVisibleLabel) {
        console.info('ToggleSwitch component: Using fallback aria-label "Toggle switch". Consider providing a more descriptive "aria-label" or "aria-labelledby" attribute.');
      }
    }
  }
}
