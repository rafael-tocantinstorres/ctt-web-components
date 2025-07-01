import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: (args) => Checkbox(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text to display next to the checkbox',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the checkbox input',
    },
    value: {
      control: 'text',
      description: 'The value attribute for the checkbox input',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the checkbox',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers when visual label is not provided',
    },
    ariaLabelledby: {
      control: 'text',
      description: 'IDs of elements that describe this checkbox',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

// Default story
export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    name: 'default',
    value: 'default-value',
  },
};

// Checked state
export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    name: 'checked',
    value: 'checked-value',
    checked: true,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    name: 'disabled',
    value: 'disabled-value',
    disabled: true,
  },
};

// Disabled and checked
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Checkbox',
    name: 'disabled-checked',
    value: 'disabled-checked-value',
    disabled: true,
    checked: true,
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'Checkbox with Error',
    name: 'error',
    value: 'error-value',
    errorText: 'This field is required',
  },
};

// Error and checked
export const ErrorChecked: Story = {
  args: {
    label: 'Error Checked Checkbox',
    name: 'error-checked',
    value: 'error-checked-value',
    checked: true,
    errorText: 'Please review your selection',
  },
};

// With custom ID and class
export const WithCustomAttributes: Story = {
  args: {
    label: 'Custom Checkbox',
    name: 'custom',
    value: 'custom-value',
    id: 'my-custom-checkbox',
    className: 'my-custom-class',
  },
};

// Long label text
export const LongLabel: Story = {
  args: {
    label: 'This is a very long label text that should wrap properly and demonstrate how the checkbox handles longer content without breaking the layout',
    name: 'long-label',
    value: 'long-label-value',
  },
};

// Checkbox group example
export const CheckboxGroup: Story = {
  render: () => html`
    <div class="ctt-checkbox-group">
      <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Select your preferences:</h3>
      ${Checkbox({ 
        label: 'Email notifications', 
        name: 'notifications', 
        value: 'email',
        checked: true 
      })}
      ${Checkbox({ 
        label: 'SMS notifications', 
        name: 'notifications', 
        value: 'sms' 
      })}
      ${Checkbox({ 
        label: 'Push notifications', 
        name: 'notifications', 
        value: 'push',
        checked: true 
      })}
      ${Checkbox({ 
        label: 'Marketing emails', 
        name: 'marketing', 
        value: 'marketing',
        disabled: true 
      })}
    </div>
  `,
};

// All states showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <h4 style="margin: 0; font-size: 16px; font-weight: 600;">Normal States:</h4>
        ${Checkbox({ label: 'Unchecked', name: 'normal', value: '1' })}
        ${Checkbox({ label: 'Checked', name: 'normal', value: '2', checked: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <h4 style="margin: 0; font-size: 16px; font-weight: 600;">Disabled States:</h4>
        ${Checkbox({ label: 'Disabled Unchecked', name: 'disabled', value: '1', disabled: true })}
        ${Checkbox({ label: 'Disabled Checked', name: 'disabled', value: '2', disabled: true, checked: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <h4 style="margin: 0; font-size: 16px; font-weight: 600;">Error States:</h4>
        ${Checkbox({ label: 'Error Unchecked', name: 'error', value: '1', errorText: 'This field is required' })}
        ${Checkbox({ label: 'Error Checked', name: 'error', value: '2', checked: true, errorText: 'Please review your selection' })}
      </div>
    </div>
  `,
};

// Test case for accessibility - no visible label but with aria-label
export const NoVisibleLabel: Story = {
  args: {
    name: 'no-visible-label',
    value: 'no-visible-label-value',
    ariaLabel: 'Accessible checkbox without visible label',
    // label is intentionally omitted but ariaLabel is provided
  },
};
