import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';

import type { TextareaInputProps } from './TextareaInput';
import { TextareaInput } from './TextareaInput';
import { html } from 'lit';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/TextareaInput',
  tags: ['autodocs'],
  render: (args) => TextareaInput(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the textarea field',
    },
    value: {
      control: 'text',
      description: 'The current value of the textarea',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    cols: {
      control: 'number',
      description: 'Number of columns',
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: 'How the textarea can be resized',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the textarea',
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
} satisfies Meta<TextareaInputProps>;

export default meta;
type Story = StoryObj<TextareaInputProps>;

// Default story
export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    value: '',
  },
};

// With Label and Value
export const WithValue: Story = {
  args: {
    label: 'Description',
    value: 'This is a sample textarea with some content already filled in.',
    placeholder: 'Enter description...',
  },
};

// Required Field
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

// With Error
export const WithError: Story = {
  args: {
    label: 'Comments',
    value: 'Invalid content',
    errorText: 'This field contains invalid characters',
    placeholder: 'Enter your comments...',
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
    placeholder: 'Cannot edit this field',
  },
};

// Different Sizes
export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    rows: 8,
    placeholder: 'This textarea has 8 rows...',
  },
};

export const WithColumns: Story = {
  args: {
    label: 'Fixed Width',
    cols: 50,
    rows: 6,
    placeholder: 'This textarea has fixed columns...',
  },
};

// Different Resize Options
export const ResizeNone: Story = {
  args: {
    label: 'No Resize',
    resize: 'none',
    placeholder: 'This textarea cannot be resized',
  },
};

export const ResizeHorizontal: Story = {
  args: {
    label: 'Horizontal Resize',
    resize: 'horizontal',
    placeholder: 'This textarea can only be resized horizontally',
  },
};

export const ResizeBoth: Story = {
  args: {
    label: 'Both Resize',
    resize: 'both',
    placeholder: 'This textarea can be resized in both directions',
  },
};

// No Label
export const NoLabel: Story = {
  args: {
    placeholder: 'Textarea without label',
    value: '',
  },
};

// All States Showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <h3>Basic Textarea</h3>
      ${TextareaInput({ 
        label: 'Normal State', 
        placeholder: 'Enter text...' 
      })}
      
      <h3>Required Field</h3>
      ${TextareaInput({ 
        label: 'Required Field', 
        placeholder: 'This field is required',
        required: true 
      })}
      
      <h3>With Error</h3>
      ${TextareaInput({ 
        label: 'Error State', 
        value: 'Invalid input',
        errorText: 'This field has an error',
        placeholder: 'Enter valid text...' 
      })}
      
      <h3>Disabled State</h3>
      ${TextareaInput({ 
        label: 'Disabled Field', 
        value: 'Cannot edit this',
        disabled: true,
        placeholder: 'Disabled textarea' 
      })}
      
      <h3>Large Textarea</h3>
      ${TextareaInput({ 
        label: 'Large Text Area', 
        rows: 8,
        placeholder: 'Large textarea with 8 rows...' 
      })}
    </div>
  `,
};
