import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import type { RadioButtonProps } from './RadioButton';
import { RadioButton } from './RadioButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  render: (args) => RadioButton(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text to display next to the radio button',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the radio button input (required for grouping)',
    },
    value: {
      control: 'text',
      description: 'The value attribute for the radio button input',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the radio button',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<RadioButtonProps>;

export default meta;
type Story = StoryObj<RadioButtonProps>;

// Default story
export const Default: Story = {
  args: {
    label: 'Default Radio Button',
    name: 'default-group',
    value: 'default',
  },
};

// States
export const Checked: Story = {
  args: {
    label: 'Checked Radio Button',
    name: 'checked-group',
    value: 'checked',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio Button',
    name: 'disabled-group',
    value: 'disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Radio Button',
    name: 'disabled-checked-group',
    value: 'disabled-checked',
    disabled: true,
    checked: true,
  },
};

// Error state
export const WithError: Story = {
  args: {
    label: 'Radio Button with Error',
    name: 'error-group',
    value: 'error',
    errorText: 'This field is required',
  },
};

export const CheckedWithError: Story = {
  args: {
    label: 'Checked Radio Button with Error',
    name: 'checked-error-group',
    value: 'checked-error',
    checked: true,
    errorText: 'This selection is invalid',
  },
};

// Radio Button Group example
export const RadioButtonGroup: Story = {
  render: () => html`
    <div class="ctt-radio-group">
      <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Choose your favorite color:</h3>
      ${RadioButton({ 
        label: 'Red', 
        name: 'color', 
        value: 'red',
        checked: true
      })}
      ${RadioButton({ 
        label: 'Blue', 
        name: 'color', 
        value: 'blue'
      })}
      ${RadioButton({ 
        label: 'Green', 
        name: 'color', 
        value: 'green'
      })}
      ${RadioButton({ 
        label: 'Yellow (Disabled)', 
        name: 'color', 
        value: 'yellow',
        disabled: true
      })}
    </div>
  `,
};

// Horizontal Radio Button Group
export const HorizontalGroup: Story = {
  render: () => html`
    <div class="ctt-radio-group ctt-radio-group--horizontal">
      <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Size:</h3>
      ${RadioButton({ 
        label: 'Small', 
        name: 'size', 
        value: 'small'
      })}
      ${RadioButton({ 
        label: 'Medium', 
        name: 'size', 
        value: 'medium',
        checked: true
      })}
      ${RadioButton({ 
        label: 'Large', 
        name: 'size', 
        value: 'large'
      })}
    </div>
  `,
};

// All states showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Normal States:</h3>
        <div class="ctt-radio-group">
          ${RadioButton({ 
            label: 'Unchecked', 
            name: 'normal', 
            value: 'unchecked'
          })}
          ${RadioButton({ 
            label: 'Checked', 
            name: 'normal', 
            value: 'checked',
            checked: true
          })}
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Disabled States:</h3>
        <div class="ctt-radio-group">
          ${RadioButton({ 
            label: 'Disabled Unchecked', 
            name: 'disabled', 
            value: 'disabled-unchecked',
            disabled: true
          })}
          ${RadioButton({ 
            label: 'Disabled Checked', 
            name: 'disabled', 
            value: 'disabled-checked',
            disabled: true,
            checked: true
          })}
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Error States:</h3>
        <div class="ctt-radio-group">
          ${RadioButton({ 
            label: 'Error Unchecked', 
            name: 'error', 
            value: 'error-unchecked',
            errorText: 'This field is required'
          })}
          ${RadioButton({ 
            label: 'Error Checked', 
            name: 'error-checked', 
            value: 'error-checked',
            checked: true,
            errorText: 'This selection is invalid'
          })}
        </div>
      </div>
    </div>
  `,
};
