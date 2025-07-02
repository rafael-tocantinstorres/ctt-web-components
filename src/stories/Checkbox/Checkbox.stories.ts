import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: (args) => html`
    <ctt-checkbox
      .label=${args.label}
      .name=${args.name}
      .value=${args.value}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      .errorText=${args.errorText}
      .id=${args.id}
      .className=${args.className}
      .ariaLabel=${args.ariaLabel}
      .ariaLabelledby=${args.ariaLabelledby}
      @change=${fn()}
    ></ctt-checkbox>
  `,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A checkbox component that supports labels, error states, and accessibility features.',
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
    label: {
      control: 'text',
      description: 'The label text to display next to the checkbox.',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the checkbox input.',
    },
    value: {
      control: 'text',
      description: 'The value attribute for the checkbox input.',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled.',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display.',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the checkbox.',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers when a visual label is not provided.',
    },
    ariaLabelledby: {
      control: 'text',
      description: 'IDs of elements that describe this checkbox.',
    },
  },
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Default story
export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    name: 'default-checkbox',
    value: 'default',
    id: 'default-checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic checkbox with label.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    name: 'checked-checkbox',
    value: 'checked',
    checked: true,
    id: 'checked-checkbox',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    name: 'disabled-checkbox',
    value: 'disabled',
    disabled: true,
    id: 'disabled-checkbox',
  },
};

export const WithError: Story = {
  args: {
    label: 'Checkbox with Error',
    name: 'error-checkbox',
    value: 'error',
    errorText: 'This is an error message.',
    id: 'error-checkbox',
  },
};

export const NoLabel: Story = {
  args: {
    name: 'no-label-checkbox',
    value: 'no-label',
    ariaLabel: 'Checkbox without a visible label',
    id: 'no-label-checkbox',
  },
};
