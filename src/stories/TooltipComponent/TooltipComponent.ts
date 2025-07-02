import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import styles from './tooltip-component.css?inline'

/**
 * Tooltip Component
 * A wrapper component that displays a tooltip on hover or focus.
 * Can wrap any HTML content and shows contextual information.
 */

declare global {
  interface HTMLElementTagNameMap {
    'ctt-tooltip': CttTooltip;
  }
}
@customElement('ctt-tooltip')
export class CttTooltip extends LitElement {
  static styles = css([styles] as any)
  @property()
  text = 'Tooltip text'

  @property()
  size: 'small' | 'medium' | 'large' = 'medium'

  @property()
  position: 'top' | 'bottom' | 'left' | 'right' = 'top'

  @property()
  arrowPosition: 'start' | 'middle' | 'end' = 'middle'

  @property({ type: Boolean })
  disabled = false

  @property()
  ariaLabel = ''

  @state()
  private _visible = false

  private get _tooltipClasses() {
    return [
      'ctt-tooltip__content',
      `ctt-tooltip__content--${this.position}`,
      `ctt-tooltip__content--${this.size || 'medium'}`,
      `ctt-tooltip__content--arrow-${this.arrowPosition}`,
      this._visible ? 'ctt-tooltip__content--visible' : ''
    ].filter(Boolean).join(' ')
  }

  render() {
    return html`
      <div 
        class="ctt-tooltip ${this.disabled ? 'ctt-tooltip--disabled' : ''}"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
      >
        <div class="tooltip__trigger">
          <slot></slot>
        </div>
        <div 
          class="${this._tooltipClasses}"
          role="tooltip"
          aria-label="${this.ariaLabel || this.text}"
          aria-hidden="${!this._visible}"
        >
          ${this.text}
        </div>
      </div>
    `
  }

  private _handleMouseEnter() {
    if (!this.disabled) {
      this._visible = true
      this._dispatchVisibilityChange(true)
    }
  }

  private _handleMouseLeave() {
    if (!this.disabled) {
      this._visible = false
      this._dispatchVisibilityChange(false)
    }
  }

  private _handleFocusIn() {
    if (!this.disabled) {
      this._visible = true
      this._dispatchVisibilityChange(true)
    }
  }

  private _handleFocusOut() {
    if (!this.disabled) {
      this._visible = false
      this._dispatchVisibilityChange(false)
    }
  }

  private _dispatchVisibilityChange(visible: boolean) {
    this.dispatchEvent(new CustomEvent('tooltip-visibility-change', {
      detail: { 
        visible, 
        text: this.text,
        position: this.position,
        arrowPosition: this.arrowPosition
      },
      bubbles: true
    }))
  }
}