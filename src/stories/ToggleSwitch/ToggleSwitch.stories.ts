import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './ToggleSwitch';
import type { ToggleSwitch } from './ToggleSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/ToggleSwitch',
  tags: ['autodocs'],
  component: 'ctt-toggle-switch',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A toggle switch component that supports accessibility features, labels, and disabled states.',
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
      <div style="min-height: 200px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
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
    role: {
      control: 'text',
      description: 'The role attribute for the input element',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input element',
    },
  },
  args: {},
} satisfies Meta<ToggleSwitch>;

export default meta;
type Story = StoryObj<ToggleSwitch>;

// Default story
export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic toggle switch with label.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Interactive toggle switch that logs events to the console.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 250px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
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
  parameters: {
    docs: {
      description: {
        story: 'Toggle switch with external description using aria-labelledby.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 250px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};
