import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './ToasterAlert';
import type { CttToasterAlert } from './ToasterAlert';

const meta = {
  title: 'Components/ToasterAlert',
  tags: ['autodocs'],
  component: 'ctt-toaster-alert',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A toaster alert component for displaying notifications and alerts with different variants and positioning options.',
      },
    },
    viewport: {
      defaultViewport: 'tablet',
    },
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 300px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['alert', 'toaster'],
      description: 'Type of alert (alert or toaster)',
    },
    variant: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success'],
      description: 'Visual variant of the alert',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: 'Position of the alert (for toaster type)',
    },
    headline: {
      control: 'text',
      description: 'Headline text for the alert',
    },
    message: {
      control: 'text',
      description: 'Message text for the alert',
    },
    dismissable: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds',
    },
    visible: {
      control: 'boolean',
      description: 'Whether the alert is visible',
    },
  },
  args: {},
} satisfies Meta<CttToasterAlert>;

export default meta;
type Story = StoryObj<CttToasterAlert>;

// Default story
export const Default: Story = {
  args: {
    type: 'alert',
    variant: 'info',
    headline: 'Information Alert',
    message: 'This is an alert that can be placed anywhere in your layout.',
    dismissable: true,
    visible: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic info alert with headline and message.',
      },
    },
  },
};

// Alert Type Stories
export const AlertInfo: Story = {
  args: {
    type: 'alert',
    variant: 'info',
    headline: 'Information Alert',
    message: 'This is an alert that can be placed anywhere in your layout.',
    dismissable: true,
    visible: true,
  },
};

export const AlertWarning: Story = {
  args: {
    type: 'alert',
    variant: 'warning',
    headline: 'Warning Alert',
    message: 'This is a warning alert with important information.',
    dismissable: true,
    visible: true,
  },
};

export const AlertError: Story = {
  args: {
    type: 'alert',
    variant: 'error',
    headline: 'Error Alert',
    message: 'This is an error alert indicating something went wrong.',
    dismissable: true,
    visible: true,
  },
};

export const AlertSuccess: Story = {
  args: {
    type: 'alert',
    variant: 'success',
    headline: 'Success Alert',
    message: 'This is a success alert confirming an action was completed.',
    dismissable: true,
    visible: true,
  },
};

// Toaster Type Stories
export const ToasterTopInfo: Story = {
  args: {
    type: 'toaster',
    variant: 'info',
    position: 'top',
    headline: 'Top Toaster',
    message: 'This toaster appears at the top-right of the page.',
    dismissable: true,
    visible: true,
  },
};

export const ToasterBottomSuccess: Story = {
  args: {
    type: 'toaster',
    variant: 'success',
    position: 'bottom',
    headline: 'Bottom Toaster',
    message: 'This toaster appears at the bottom-right of the page.',
    dismissable: true,
    visible: true,
  },
};

// Interactive Examples
export const ToasterWithDuration: Story = {
  render: () => {
    const toaster = document.createElement('ctt-toaster-alert') as CttToasterAlert;

    const showTopToaster = () => {
      toaster.showToaster({
        type: 'toaster',
        variant: 'info',
        position: 'top',
        headline: 'Auto-dismiss Toaster',
        message: 'This toaster will automatically disappear in 5 seconds.',
        dismissable: true,
        duration: 5,
      });
    };

    const showBottomToaster = () => {
      toaster.showToaster({
        type: 'toaster',
        variant: 'success',
        position: 'bottom',
        headline: 'Bottom Toaster',
        message: 'This toaster appears at the bottom of the page.',
        dismissable: true,
      });
    };

    return html`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button @click=${showTopToaster}>Show Top Toaster (5s duration)</button>
        <button @click=${showBottomToaster}>Show Bottom Toaster</button>
      </div>
      ${toaster}
    `;
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const toaster = document.createElement('ctt-toaster-alert') as CttToasterAlert;

    const showAlert = () => {
      toaster.showToaster({
        type: 'alert',
        variant: 'warning',
        headline: 'Alert Example',
        message: 'This is an alert that stays in place.',
        dismissable: true,
      });
    };

    const showToaster = () => {
      toaster.showToaster({
        type: 'toaster',
        variant: 'info',
        position: 'top',
        headline: 'Toaster Example',
        message: 'This is a toaster that appears fixed on the page.',
        dismissable: true,
      });
    };

    return html`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <button @click=${showAlert}>Show Alert (inline)</button>
        <button @click=${showToaster}>Show Toaster (fixed position)</button>
      </div>
      ${toaster}
    `;
  },
};
