import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

// Define a type for the story's args that includes the component's properties and actions
interface ToggleSwitchStoryArgs extends Partial<ToggleSwitch> {
  onToggleChange?: () => void;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ToggleSwitchStoryArgs> = {
  title: 'Components/ToggleSwitch',
  component: 'ctt-toggle-switch',
  tags: ['autodocs'],
  render: (args) => html`
    <ctt-toggle-switch
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      .label=${args.label}
      ?show-label=${args.showLabel}
      .aria-label=${args.ariaLabel}
      .aria-labelledby=${args.ariaLabelledby}
      @toggle-change=${args.onToggleChange}
    ></ctt-toggle-switch>
  `,
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
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers when visual label is not provided',
    },
    ariaLabelledby: {
      control: 'text',
      description: 'IDs of elements that describe this toggle switch',
    },
    onToggleChange: {
      action: 'toggle-change',
    },
  },
  args: {
    onToggleChange: fn(),
  },
};

export default meta;
type Story = StoryObj<ToggleSwitchStoryArgs>;

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

// Without visible label - uses aria-label for accessibility
export const WithAriaLabel: Story = {
  args: {
    showLabel: false,
    ariaLabel: 'Enable notifications',
    checked: false,
  },
};

// With label but hidden - still accessible through the visible label when wrapped
export const HiddenLabel: Story = {
  args: {
    label: 'Hidden label',
    showLabel: false,
    ariaLabel: 'Toggle this setting',
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

// Interactive toggle - shows event handling
export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <p style="margin: 0; font-size: 14px; color: #666;">
        Toggle the switch below and check the browser console for events:
      </p>
      <ctt-toggle-switch
        label="Interactive toggle"
        @toggle-change=${(e: CustomEvent) => {
          console.log('Toggle changed:', e.detail);
        }}
      ></ctt-toggle-switch>
    </div>
  `,
};

// With aria-labelledby - references external describing element
export const WithAriaLabelledby: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <div id="toggle-description" style="font-size: 14px; color: #666;">
        Enable email notifications for important updates and security alerts
      </div>
      <ctt-toggle-switch
        show-label="false"
        aria-labelledby="toggle-description"
        checked="false"
      ></ctt-toggle-switch>
    </div>
  `,
};

// All states showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3>Basic Toggle Switches</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctt-toggle-switch
          label="Unchecked toggle"
        ></ctt-toggle-switch>
        <ctt-toggle-switch
          label="Checked toggle"
          checked
        ></ctt-toggle-switch>
      </div>
      
      <h3>Disabled States</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctt-toggle-switch
          label="Disabled unchecked"
          disabled
        ></ctt-toggle-switch>
        <ctt-toggle-switch
          label="Disabled checked"
          disabled
          checked
        ></ctt-toggle-switch>
      </div>
      
      <h3>With Accessible Labels (No Visible Text)</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctt-toggle-switch
          show-label="false"
          aria-label="Enable feature A"
        ></ctt-toggle-switch>
        <ctt-toggle-switch
          show-label="false"
          aria-label="Enable feature B"
          checked
        ></ctt-toggle-switch>
      </div>
      
      <h3>Long Labels</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctt-toggle-switch
          label="Enable advanced notifications with detailed settings and custom preferences"
        ></ctt-toggle-switch>
        <ctt-toggle-switch
          label="Allow background data synchronization when the application is not in use"
          checked
        ></ctt-toggle-switch>
      </div>
    </div>
  `,
};
