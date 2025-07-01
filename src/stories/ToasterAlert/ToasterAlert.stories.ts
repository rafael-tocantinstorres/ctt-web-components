import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ToasterAlert';
import { CttToasterAlert } from './ToasterAlert';

const meta: Meta = {
  title: 'Components/ToasterAlert',
  component: 'ctt-toaster-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success'],
    },
    headline: { control: 'text' },
    message: { control: 'text' },
    dismissable: { control: 'boolean' },
    duration: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<CttToasterAlert>;

export const Info: Story = {
  args: {
    variant: 'info',
    headline: 'Headline',
    message: 'Message description',
    dismissable: true,
    visible: true, // Ensure the toaster is visible by default
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    headline: 'Headline',
    message: 'Message description',
    dismissable: true,
    visible: true, // Ensure the toaster is visible by default
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    headline: 'Headline',
    message: 'Message description',
    dismissable: true,
    visible: true, // Ensure the toaster is visible by default
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    headline: 'Headline',
    message: 'Message description',
    dismissable: true,
    visible: true, // Ensure the toaster is visible by default
  },
};

export const WithDuration: Story = {
  render: () => {
    const toaster = document.createElement('ctt-toaster-alert') as CttToasterAlert;

    const show = () => {
      toaster.showToaster({
        variant: 'info',
        headline: 'Toaster Shown',
        message: 'This toaster was shown by calling the showToaster method.',
        dismissable: true,
        duration: 5, // Duration in seconds
      });
    };

    return html`
      <button @click=${show}>Show Toaster</button>
      ${toaster}
    `;
  },
};

export const ShowToaster: Story = {
  render: () => {
    const toaster = document.createElement('ctt-toaster-alert') as CttToasterAlert;

    const show = () => {
      toaster.showToaster({
        variant: 'info',
        headline: 'Toaster Shown',
        message: 'This toaster was shown by calling the showToaster method.',
        dismissable: true,
      });
    };

    return html`
      <button @click=${show}>Show Toaster</button>
      ${toaster}
    `;
  },
};
