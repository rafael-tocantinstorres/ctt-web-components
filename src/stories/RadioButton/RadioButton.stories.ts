import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './RadioButton';
import type { RadioButton } from './RadioButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  render: (args) => html`<ctt-radio-button
    label=${args.label}
    name=${args.name}
    value=${args.value}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    error-text=${args.errorText}
    @change=${fn()}
  ></ctt-radio-button>`,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A radio button component that supports grouping, error states, and accessibility features.',
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
  },
  args: {},
} satisfies Meta<RadioButton>;

export default meta;
type Story = StoryObj<RadioButton>;

// Default story
export const Default: Story = {
  args: {
    label: 'Default Radio Button',
    name: 'default-group',
    value: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic radio button with label.',
      },
    },
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
      <ctt-radio-button 
        label="Red" 
        name="color" 
        value="red"
        checked
      ></ctt-radio-button>
      <ctt-radio-button 
        label="Blue" 
        name="color" 
        value="blue"
      ></ctt-radio-button>
      <ctt-radio-button 
        label="Green" 
        name="color" 
        value="green"
      ></ctt-radio-button>
      <ctt-radio-button 
        label="Yellow (Disabled)" 
        name="color" 
        value="yellow"
        disabled
      ></ctt-radio-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example of grouped radio buttons with different states.',
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

// Horizontal Radio Button Group
export const HorizontalGroup: Story = {
  render: () => html`
    <div class="ctt-radio-group ctt-radio-group--horizontal">
      <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Size:</h3>
      <ctt-radio-button 
        label="Small" 
        name="size" 
        value="small"
      ></ctt-radio-button>
      <ctt-radio-button 
        label="Medium" 
        name="size" 
        value="medium"
        checked
      ></ctt-radio-button>
      <ctt-radio-button 
        label="Large" 
        name="size" 
        value="large"
      ></ctt-radio-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example of horizontally arranged radio buttons.',
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

// All states showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Normal States:</h3>
        <div class="ctt-radio-group">
          <ctt-radio-button 
            label="Unchecked" 
            name="normal" 
            value="unchecked"
          ></ctt-radio-button>
          <ctt-radio-button 
            label="Checked" 
            name="normal" 
            value="checked"
            checked
          ></ctt-radio-button>
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Disabled States:</h3>
        <div class="ctt-radio-group">
          <ctt-radio-button 
            label="Disabled Unchecked" 
            name="disabled" 
            value="disabled-unchecked"
            disabled
          ></ctt-radio-button>
          <ctt-radio-button 
            label="Disabled Checked" 
            name="disabled" 
            value="disabled-checked"
            disabled
            checked
          ></ctt-radio-button>
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Error States:</h3>
        <div class="ctt-radio-group">
          <ctt-radio-button 
            label="Error Unchecked" 
            name="error" 
            value="error-unchecked"
            error-text="This field is required"
          ></ctt-radio-button>
          <ctt-radio-button 
            label="Error Checked" 
            name="error-checked" 
            value="error-checked"
            checked
            error-text="This selection is invalid"
          ></ctt-radio-button>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all radio button states including normal, disabled, and error states.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 500px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};
