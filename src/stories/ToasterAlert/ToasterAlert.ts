import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './toaster-alert.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'ctt-toaster-alert': CttToasterAlert;
  }
}

@customElement('ctt-toaster-alert')
export class CttToasterAlert extends LitElement {
  static styles = css([styles] as any);

  @property({ type: String })
  type: 'toaster' | 'alert' = 'alert';

  @property({ type: String })
  variant: 'info' | 'warning' | 'error' | 'success' = 'info';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  message = '';

  @property({ type: Boolean })
  dismissable = false;

  @property({ type: Boolean })
  visible = false;

  @property({ type: String })
  position: 'top' | 'bottom' = 'top';

  @property({ type: Number })
  duration?: number;

  private _timeoutId?: number;

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    
    // Handle auto-dismiss when visible becomes true and duration is set
    if (changedProperties.has('visible') && this.visible && this.duration) {
      this._startAutoDismiss();
    }
    
    // Handle duration changes while visible
    if (changedProperties.has('duration') && this.visible && this.duration) {
      this._startAutoDismiss();
    }
  }

  private _startAutoDismiss() {
    // Clear existing timeout
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
    
    // Set new timeout if duration is provided
    if (this.duration) {
      this._timeoutId = window.setTimeout(() => {
        this._handleClose();
      }, this.duration * 1000);
    }
  }

  showToaster(params: {
    type?: 'toaster' | 'alert';
    variant?: 'info' | 'warning' | 'error' | 'success';
    headline?: string;
    message?: string;
    dismissable?: boolean;
    duration?: number;
    position?: 'top' | 'bottom';
    showFunction?: () => void;
  }) {
    this.type = params.type || 'alert';
    this.variant = params.variant || 'info';
    this.headline = params.headline || '';
    this.message = params.message || '';
    this.dismissable = params.dismissable || false;
    this.position = params.position || 'top';
    this.visible = true;
    params.showFunction?.();

    if (params.duration) {
      setTimeout(() => {
        this._handleClose();
      }, params.duration * 1000);
    }
  }

  private _handleClose(closeFunction?: () => void) {
    this.visible = false;
    // Clear timeout when manually closed
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
      this._timeoutId = undefined;
    }
    closeFunction?.();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up timeout when component is removed
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
      this._timeoutId = undefined;
    }
  }

  private _getIcon() {
    switch (this.variant) {
      case 'info':
        return 'i';
      case 'warning':
        return '!';
      case 'error':
        return 'X';
      case 'success':
        return '✓';
    }
  }

  render() {
    if (!this.visible) {
      return html``;
    }

    const classes = {
      'ctt-toaster-alert': true,
      [`ctt-toaster-alert--${this.variant}`]: true,
      [`ctt-toaster-alert--${this.type}`]: true,
      [`ctt-toaster-alert--${this.type}-${this.position}`]: this.type === 'toaster',
    };

    return html`
      <div class=${classMap(classes)}>
        <div class="icon">${this._getIcon()}</div>
        <div class="content">
          <div class="headline">${this.headline}</div>
          <div class="message">${this.message}</div>
        </div>
        ${this.dismissable
          ? html`<button class="close-button" @click=${() => this._handleClose()}>X</button>`
          : ''}
      </div>
    `;
  }
}
