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
  variant: 'info' | 'warning' | 'error' | 'success' = 'info';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  message = '';

  @property({ type: Boolean })
  dismissable = false;

  @property({ type: Boolean })
  visible = false;

  showToaster(params: {
    variant?: 'info' | 'warning' | 'error' | 'success';
    headline?: string;
    message?: string;
    dismissable?: boolean;
    duration?: number;
    showFunction?: () => void;
  }) {
    this.variant = params.variant || 'info';
    this.headline = params.headline || '';
    this.message = params.message || '';
    this.dismissable = params.dismissable || false;
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
    closeFunction?.();
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
