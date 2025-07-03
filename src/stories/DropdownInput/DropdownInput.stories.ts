import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import './DropdownInput';
import type { DropdownInput } from './DropdownInput';

// Sample options for stories
const sampleOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
];

const sampleOptionsWithDescriptions = [
  { label: 'Basic Plan', value: 'basic', description: 'Perfect for individuals and small projects' },
  { label: 'Pro Plan', value: 'pro', description: 'Great for small teams and growing businesses' },
  { label: 'Enterprise Plan', value: 'enterprise', description: 'For large organizations with advanced needs' },
  { label: 'Custom Plan', value: 'custom', description: 'Tailored to your specific requirements', disabled: true },
];

// Example data with different property names
const users = [
  { name: 'John Doe', id: 'user1', bio: 'Senior Software Engineer', inactive: false },
  { name: 'Jane Smith', id: 'user2', bio: 'Product Manager', inactive: false },
  { name: 'Bob Johnson', id: 'user3', bio: 'UX Designer', inactive: true },
  { name: 'Alice Brown', id: 'user4', bio: 'DevOps Engineer', inactive: false },
  { name: 'Charlie Wilson', id: 'user5', bio: 'Data Scientist', inactive: false },
];

const products = [
  { title: 'MacBook Pro', sku: 'MB001', details: 'High-performance laptop for professionals', unavailable: false },
  { title: 'iPhone 15', sku: 'IP001', details: 'Latest smartphone with advanced features', unavailable: false },
  { title: 'iPad Air', sku: 'IA001', details: 'Versatile tablet (Currently out of stock)', unavailable: true },
  { title: 'Apple Watch', sku: 'AW001', details: 'Smart wearable device for health tracking', unavailable: false },
  { title: 'AirPods Pro', sku: 'AP001', details: 'Premium wireless earbuds', unavailable: false },
];

const countries = [
  { label: 'United States', value: 'US', description: 'North America' },
  { label: 'Canada', value: 'CA', description: 'North America' },
  { label: 'United Kingdom', value: 'UK', description: 'Europe' },
  { label: 'Germany', value: 'DE', description: 'Europe' },
  { label: 'France', value: 'FR', description: 'Europe' },
  { label: 'Japan', value: 'JP', description: 'Asia' },
  { label: 'Australia', value: 'AU', description: 'Oceania' },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/DropdownInput',
  tags: ['autodocs'],
  component: 'ctt-dropdown-input',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible dropdown input component that supports single and multiple selections, custom option objects, and various display modes.',
      },
    },
    viewport: {
      defaultViewport: 'tablet',
    },
    // Add custom styling to give more height to story containers
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 300px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the dropdown field',
    },
    name: {
      control: 'text',
      description: 'The name attribute for form integration',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    options: {
      control: 'object',
      description: 'Array of options to display',
    },
    value: {
      control: 'text',
      description: 'The current selected value(s)',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple selections are allowed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the dropdown is required',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    hasDescription: {
      control: 'boolean',
      description: 'Whether to show descriptions for options that have them',
    },
    labelKey: {
      control: 'text',
      description: 'Property name to use for the option label (for custom option objects)',
    },
    valueKey: {
      control: 'text',
      description: 'Property name to use for the option value (for custom option objects)',
    },
    descriptionKey: {
      control: 'text',
      description: 'Property name to use for the option description (for custom option objects)',
    },
    disabledKey: {
      control: 'text',
      description: 'Property name to use for the option disabled state (for custom option objects)',
    },
  },
  args: {},
} satisfies Meta<DropdownInput>;

export default meta;
type Story = StoryObj<DropdownInput>;

// Default story
export const Default: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Choose your favorite fruit',
    options: sampleOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic dropdown with simple options.',
      },
    },
  },
};

// With selected value
export const WithSelectedValue: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Choose your favorite fruit',
    options: sampleOptions,
    value: 'banana',
  },
};

// With descriptions
export const WithDescriptions: Story = {
  args: {
    label: 'Choose your plan',
    placeholder: 'Select a plan',
    options: sampleOptionsWithDescriptions,
    hasDescription: true,
  },
  decorators: [
    (story) => html`
      <div style="min-height: 350px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};

// Multiple selection
export const MultipleSelection: Story = {
  args: {
    label: 'Select fruits',
    placeholder: 'Choose multiple fruits',
    options: sampleOptions,
    multiple: true,
    value: ['apple', 'cherry'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection dropdown with checkboxes.',
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

// Property mapping - Users
export const PropertyMappingUsers: Story = {
  args: {
    label: 'Select team member',
    placeholder: 'Choose a user',
    options: users as any,
    labelKey: 'name' as any,
    valueKey: 'id' as any,
    descriptionKey: 'bio' as any,
    disabledKey: 'inactive' as any,
    hasDescription: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using custom property names for option objects. Uses `name` for label, `id` for value, `bio` for description, and `inactive` for disabled state.',
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

// Property mapping - Products
export const PropertyMappingProducts: Story = {
  args: {
    label: 'Select product',
    placeholder: 'Choose a product',
    options: products as any,
    labelKey: 'title' as any,
    valueKey: 'sku' as any,
    descriptionKey: 'details' as any,
    disabledKey: 'unavailable' as any,
    hasDescription: true,
  },
  decorators: [
    (story) => html`
      <div style="min-height: 350px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};

// Property mapping - Multiple selection
export const PropertyMappingMultiple: Story = {
  args: {
    label: 'Select multiple products',
    placeholder: 'Choose products',
    options: products as any,
    labelKey: 'title' as any,
    valueKey: 'sku' as any,
    descriptionKey: 'details' as any,
    disabledKey: 'unavailable' as any,
    hasDescription: true,
    multiple: true,
    value: ['MB001', 'IP001'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection dropdown using custom property mapping. Uses `title` for label, `sku` for value, `details` for description, and `unavailable` for disabled state.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 400px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};

// Required field
export const Required: Story = {
  args: {
    label: 'Required field',
    placeholder: 'This field is required',
    options: sampleOptions,
    required: true,
  },
};

// With error
export const WithError: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Choose your favorite fruit',
    options: sampleOptions,
    errorText: 'Please select a valid option',
    value: 'invalid',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled dropdown',
    placeholder: 'Cannot select',
    options: sampleOptions,
    disabled: true,
  },
};

// Size variants
export const Small: Story = {
  args: {
    label: 'Small dropdown',
    placeholder: 'Small size',
    options: sampleOptions,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large dropdown',
    placeholder: 'Large size',
    options: sampleOptions,
    size: 'large',
  },
};

// Open state
export const OpenState: Story = {
  args: {
    label: 'Open dropdown',
    placeholder: 'This dropdown starts closed but can be opened',
    options: sampleOptions,
  },
};

// Multiple selection - Static (for styling verification)
export const MultipleSelectionStatic: Story = {
  args: {
    label: 'Multiple selection (static)',
    placeholder: 'Choose multiple options',
    options: sampleOptions,
    multiple: true,
    value: ['apple', 'cherry'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Static view of multiple selection dropdown for styling verification.',
      },
    },
  },
};

// No label
export const NoLabel: Story = {
  args: {
    placeholder: 'Dropdown without label',
    options: sampleOptions,
  },
};

// Countries with descriptions
export const CountrySelector: Story = {
  args: {
    label: 'Select Country',
    placeholder: 'Choose your country',
    options: countries,
    hasDescription: true,
  },
  decorators: [
    (story) => html`
      <div style="min-height: 400px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};

// Search functionality showcase
export const SearchableDropdown: Story = {
  args: {
    label: 'Searchable Dropdown',
    placeholder: 'Type to search or select',
    options: [...sampleOptions, ...countries],
    hasDescription: true,
  },
  decorators: [
    (story) => html`
      <div style="min-height: 450px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};

// Multiple selection with pre-selected values
export const MultipleWithValue: Story = {
  args: {
    label: 'Multiple options',
    placeholder: 'Select multiple',
    options: sampleOptions.slice(0, 4),
    multiple: true,
    value: ['apple', 'cherry'],
  },
};
