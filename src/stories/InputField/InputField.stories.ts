import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import type { InputFieldProps } from './InputField';
import { InputField } from './InputField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/InputField',
  tags: ['autodocs'],
  render: (args) => InputField(args),
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
  args: {
    onInput: fn(),
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<InputFieldProps>;

export default meta;
type Story = StoryObj<InputFieldProps>;

// Default story
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
  },
};

// Size variants
export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size input',
    size: 'small',
    name: 'small-input',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size input',
    size: 'medium',
    name: 'medium-input',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size input',
    size: 'large',
    name: 'large-input',
  },
};

// Input types
export const TextInput: Story = {
  args: {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    name: 'fullname',
  },
};

export const EmailInput: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
  },
};

export const PhoneInput: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'Enter your phone number',
    name: 'phone',
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
    name: 'age',
  },
};

// States
export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'johndoe',
    placeholder: 'Enter username',
    name: 'username',
  },
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    name: 'disabled',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: 'Account ID',
    value: 'USER-12345',
    name: 'account-id',
    disabled: true,
  },
};

// Error states
export const WithError: Story = {
  args: {
    label: 'Email Address',
    value: 'invalid-email',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
};

export const RequiredWithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    name: 'password',
    type: 'password',
    required: true,
    error: 'Password is required',
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    placeholder: 'Search...',
    name: 'search',
    type: 'search',
  },
};

// Custom attributes
export const WithCustomId: Story = {
  args: {
    label: 'Custom Input',
    placeholder: 'Input with custom ID',
    name: 'custom',
    id: 'my-custom-input-id',
  },
};

export const WithAriaDescribedBy: Story = {
  args: {
    label: 'Special Input',
    placeholder: 'Input with custom aria-describedby',
    name: 'special',
    ariaDescribedBy: 'custom-help-text',
  },
};

// Form example
export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
      <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Contact Form</h3>
      
      ${InputField({ 
        label: 'Full Name', 
        placeholder: 'Enter your full name',
        name: 'fullname',
        type: 'text',
        required: true
      })}
      
      ${InputField({ 
        label: 'Email Address', 
        placeholder: 'Enter your email',
        name: 'email',
        type: 'email',
        required: true
      })}
      
      ${InputField({ 
        label: 'Phone Number', 
        placeholder: 'Enter your phone number',
        name: 'phone',
        type: 'tel'
      })}
      
      ${InputField({ 
        label: 'Company', 
        placeholder: 'Enter your company name',
        name: 'company',
        type: 'text'
      })}
      
      <button type="submit" style="margin-top: 8px; padding: 12px 24px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Submit
      </button>
    </form>
  `,
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Input Field Sizes</h3>
      
      ${InputField({
        label: 'Small Input',
        placeholder: 'Small size',
        name: 'small',
        size: 'small'
      })}
      
      ${InputField({
        label: 'Medium Input',
        placeholder: 'Medium size (default)',
        name: 'medium',
        size: 'medium'
      })}
      
      ${InputField({
        label: 'Large Input',
        placeholder: 'Large size',
        name: 'large',
        size: 'large'
      })}
    </div>
  `,
};

// All states showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="margin: 0; font-size: 16px; font-weight: 600;">Normal States:</h4>
        ${InputField({ label: 'Empty Input', placeholder: 'Enter text...', name: 'empty' })}
        ${InputField({ label: 'With Value', value: 'Sample text', name: 'filled' })}
        ${InputField({ label: 'Required Field', placeholder: 'Required...', name: 'required', required: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="margin: 0; font-size: 16px; font-weight: 600;">Disabled States:</h4>
        ${InputField({ label: 'Disabled Empty', placeholder: 'Disabled...', name: 'disabled-empty', disabled: true })}
        ${InputField({ label: 'Disabled with Value', value: 'Cannot edit', name: 'disabled-filled', disabled: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="margin: 0; font-size: 16px; font-weight: 600;">Error States:</h4>
        ${InputField({ label: 'Required Error', placeholder: 'Required...', name: 'error-required', required: true, error: 'This field is required' })}
        ${InputField({ label: 'Validation Error', value: 'invalid@', name: 'error-validation', type: 'email', error: 'Please enter a valid email address' })}
      </div>
    </div>
  `,
};
