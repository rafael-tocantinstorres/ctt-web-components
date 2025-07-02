import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ToasterAlert';
import { CttToasterAlert } from './ToasterAlert';

const meta: Meta = {
  title: 'Components/ToasterAlert',
  component: 'ctt-toaster-alert',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['alert', 'toaster'],
    },
    variant: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success'],
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    headline: { control: 'text' },
    message: { control: 'text' },
    dismissable: { control: 'boolean' },
    duration: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<CttToasterAlert>;

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
