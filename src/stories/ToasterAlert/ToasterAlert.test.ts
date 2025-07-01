import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { CttToasterAlert } from './ToasterAlert';
import './ToasterAlert.ts';

describe('CttToasterAlert', () => {
  let element: CttToasterAlert;

  beforeEach(async () => {
    element = document.createElement('ctt-toaster-alert');
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should not be visible by default', () => {
    expect(element.shadowRoot?.querySelector('.ctt-toaster-alert')).toBeNull();
  });

  it('should render with default props when showToaster is called', async () => {
    element.showToaster({});
    await element.updateComplete;
    const container = element.shadowRoot?.querySelector('.ctt-toaster-alert');
    expect(container).not.toBeNull();
    expect(container?.classList.contains('ctt-toaster-alert--info')).toBe(true);
  });

  it('should render with a custom message and headline', async () => {
    element.showToaster({ headline: 'Test Headline', message: 'Test Message' });
    await element.updateComplete;
    const headline = element.shadowRoot?.querySelector('.headline');
    const message = element.shadowRoot?.querySelector('.message');
    expect(headline?.textContent).toBe('Test Headline');
    expect(message?.textContent).toBe('Test Message');
  });

  it('should apply variant classes correctly', async () => {
    element.showToaster({ variant: 'warning' });
    await element.updateComplete;
    let container = element.shadowRoot?.querySelector('.ctt-toaster-alert');
    expect(container?.classList.contains('ctt-toaster-alert--warning')).toBe(true);

    element.showToaster({ variant: 'error' });
    await element.updateComplete;
    container = element.shadowRoot?.querySelector('.ctt-toaster-alert');
    expect(container?.classList.contains('ctt-toaster-alert--error')).toBe(true);
  });

  it('should show a dismiss button if dismissable is true', async () => {
    element.showToaster({ dismissable: true });
    await element.updateComplete;
    const closeButton = element.shadowRoot?.querySelector('.close-button');
    expect(closeButton).not.toBeNull();
  });

  it('should not show a dismiss button by default', async () => {
    element.showToaster({});
    await element.updateComplete;
    const closeButton = element.shadowRoot?.querySelector('.close-button');
    expect(closeButton).toBeNull();
  });
});
