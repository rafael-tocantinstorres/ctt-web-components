import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html, nothing } from 'lit';

import './InputField';
import '../Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/InputField',
  tags: ['autodocs'],
  component: 'ctt-input-field',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible input field component that supports various input types, validation states, and sizes.',
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
      description: 'The label text for the input field',
    },
    value: {
      control: 'text',
      description: 'The current value of the input',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the input field',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the input',
    },
    ariaDescribedBy: {
      control: 'text',
      description: 'Custom aria-describedby attribute',
    },
  },
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Default story
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic input field with email type and label.',
      },
    },
  },
};

// Grouped stories for different categories

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Input Field Sizes</h3>
      
      <ctt-input-field
        label="Small Input"
        placeholder="Small size"
        name="small"
        size="small">
      </ctt-input-field>
      
      <ctt-input-field
        label="Medium Input"
        placeholder="Medium size (default)"
        name="medium"
        size="medium">
      </ctt-input-field>
      
      <ctt-input-field
        label="Large Input"
        placeholder="Large size"
        name="large"
        size="large">
      </ctt-input-field>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the different size variants available for input fields.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 350px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Input Field Types</h3>
      
      <ctt-input-field
        label="Text Input"
        type="text"
        placeholder="Enter your full name"
        name="fullname">
      </ctt-input-field>
      
      <ctt-input-field
        label="Email Input"
        type="email"
        placeholder="Enter your email"
        name="email">
      </ctt-input-field>
      
      <ctt-input-field
        label="Password Input"
        type="password"
        placeholder="Enter your password"
        name="password">
      </ctt-input-field>
      
      <ctt-input-field
        label="Phone Input"
        type="tel"
        placeholder="Enter your phone number"
        name="phone">
      </ctt-input-field>
      
      <ctt-input-field
        label="Number Input"
        type="number"
        placeholder="Enter your age"
        name="age">
      </ctt-input-field>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Input Field States</h3>
      
      <ctt-input-field label="Empty Input" placeholder="Enter text..." name="empty"></ctt-input-field>
      <ctt-input-field label="With Value" value="Sample text" name="filled"></ctt-input-field>
      <ctt-input-field label="Required Field" placeholder="Required..." name="required" ?required=${true}></ctt-input-field>
      <ctt-input-field label="Disabled Empty" placeholder="Disabled..." name="disabled-empty" ?disabled=${true}></ctt-input-field>
      <ctt-input-field label="Disabled with Value" value="Cannot edit" name="disabled-filled" ?disabled=${true}></ctt-input-field>
    </div>
  `,
};

export const ErrorStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Input Field Error States</h3>
      
      <ctt-input-field label="Required Error" placeholder="Required..." name="error-required" ?required=${true} error="This field is required"></ctt-input-field>
      <ctt-input-field label="Validation Error" value="invalid@" name="error-validation" type="email" error="Please enter a valid email address"></ctt-input-field>
    </div>
  `,
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Search...',
    name: 'search',
    type: 'search',
  },
};

export const CustomAttributes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Input Field Custom Attributes</h3>
      
      <ctt-input-field
        label="Custom Input"
        placeholder="Input with custom ID"
        name="custom"
        id="my-custom-input-id">
      </ctt-input-field>
      
      <ctt-input-field
        label="Special Input"
        placeholder="Input with custom aria-describedby"
        name="special"
        ariaDescribedBy="custom-help-text">
      </ctt-input-field>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
      <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Contact Form</h3>
      
      <ctt-input-field
        label="Full Name"
        placeholder="Enter your full name"
        name="fullname"
        type="text"
        ?required=${true}>
      </ctt-input-field>
      
      <ctt-input-field
        label="Email Address"
        placeholder="Enter your email"
        name="email"
        type="email"
        ?required=${true}>
      </ctt-input-field>
      
      <ctt-input-field
        label="Phone Number"
        placeholder="Enter your phone number"
        name="phone"
        type="tel">
      </ctt-input-field>
      
      <ctt-input-field
        label="Company"
        placeholder="Enter your company name"
        name="company"
        type="text">
      </ctt-input-field>
      
      <ctt-button
        variant="primary"
        borderRadius="extraSmall"
        type="submit"
        label="Submit"
        size="medium"> 
      </ctt-button>  
    </form>
  `,
};
