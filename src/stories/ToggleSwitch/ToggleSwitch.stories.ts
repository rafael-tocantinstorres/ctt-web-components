import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import type { ToggleSwitchProps } from './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/ToggleSwitch',
  tags: ['autodocs'],
  render: (args) => ToggleSwitch(args),
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle switch is disabled',
    },
    label: {
      control: 'text',
      description: 'The label text for the toggle switch',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the toggle switch',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<ToggleSwitchProps>;

export default meta;
type Story = StoryObj<ToggleSwitchProps>;

// Default story
export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
  },
};

// Checked state
export const Checked: Story = {
  args: {
    label: 'Enabled feature',
    checked: true,
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    checked: false,
  },
};

// With label but hidden
export const HiddenLabel: Story = {
  args: {
    label: 'Hidden label',
    showLabel: false,
    checked: true,
  },
};

// Disabled unchecked
export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    checked: false,
  },
};

// Disabled checked
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    checked: true,
  },
};

// With custom ID
export const WithCustomId: Story = {
  args: {
    label: 'Custom ID toggle',
    id: 'custom-toggle-id',
    checked: false,
  },
};

// With custom class
export const WithCustomClass: Story = {
  args: {
    label: 'Custom styled toggle',
    className: 'my-custom-toggle',
    checked: true,
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3>Basic Toggle Switches</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${ToggleSwitch({ 
          label: 'Unchecked toggle', 
          checked: false 
        })}
        ${ToggleSwitch({ 
          label: 'Checked toggle', 
          checked: true 
        })}
      </div>
      
      <h3>Disabled States</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${ToggleSwitch({ 
          label: 'Disabled unchecked', 
          disabled: true,
          checked: false 
        })}
        ${ToggleSwitch({ 
          label: 'Disabled checked', 
          disabled: true,
          checked: true 
        })}
      </div>
      
      <h3>Without Labels</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${ToggleSwitch({ 
          showLabel: false,
          checked: false 
        })}
        ${ToggleSwitch({ 
          showLabel: false,
          checked: true 
        })}
      </div>
      
      <h3>Long Labels</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${ToggleSwitch({ 
          label: 'Enable advanced notifications with detailed settings and custom preferences', 
          checked: false 
        })}
        ${ToggleSwitch({ 
          label: 'Allow background data synchronization when the application is not in use', 
          checked: true 
        })}
      </div>
    </div>
  `,
};
