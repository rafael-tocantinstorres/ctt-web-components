import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './TextareaInput';

// Sample data for stories
const resizeOptions = ['none', 'both', 'horizontal', 'vertical'] as const;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/TextareaInput',
  tags: ['autodocs'],
  render: (args) => html`
    <textarea-input
      label=${args.label}
      value=${args.value}
      name=${args.name}
      placeholder=${args.placeholder}
      errorText=${args.errorText}
      ?disabled=${args.disabled}
      ?required=${args.required}
      rows=${args.rows}
      cols=${args.cols}
      resize=${args.resize}
      ariaDescribedBy=${args.ariaDescribedBy}
      @textarea-input=${fn()}
      @textarea-change=${fn()}
      @textarea-focus=${fn()}
      @textarea-blur=${fn()}
    ></textarea-input>
  `,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible textarea input component that supports multiple rows, resize options, and validation states.',
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
      <div style="min-height: 300px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
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
    label: 'Message',
    placeholder: 'Enter your message...',
    rows: 4,
    resize: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic textarea input with label and placeholder.',
      },
    },
  },
};

// With Label and Value
export const WithValue: Story = {
  args: {
    label: 'Description',
    value: 'This is a sample textarea with some content already filled in.',
    placeholder: 'Enter description...',
    rows: 4,
    resize: 'vertical',
  },
};

// Required Field
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 4,
    resize: 'vertical',
  },
};

// With Error
export const WithError: Story = {
  args: {
    label: 'Comments',
    value: 'Invalid content',
    errorText: 'This field contains invalid characters',
    placeholder: 'Enter your comments...',
    rows: 4,
    resize: 'vertical',
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
    placeholder: 'Cannot edit this field',
    rows: 4,
    resize: 'vertical',
  },
};

// Different Sizes
export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    rows: 8,
    placeholder: 'This textarea has 8 rows...',
    resize: 'vertical',
  },
};

export const WithColumns: Story = {
  args: {
    label: 'Fixed Width',
    cols: 50,
    rows: 6,
    placeholder: 'This textarea has fixed columns...',
    resize: 'vertical',
  },
};

// Different Resize Options
export const ResizeNone: Story = {
  args: {
    label: 'No Resize',
    resize: 'none',
    placeholder: 'This textarea cannot be resized',
    rows: 4,
  },
};

export const ResizeHorizontal: Story = {
  args: {
    label: 'Horizontal Resize',
    resize: 'horizontal',
    placeholder: 'This textarea can only be resized horizontally',
    rows: 4,
  },
};

export const ResizeBoth: Story = {
  args: {
    label: 'Both Resize',
    resize: 'both',
    placeholder: 'This textarea can be resized in both directions',
    rows: 4,
  },
};

// No Label
export const NoLabel: Story = {
  args: {
    placeholder: 'Textarea without label',
    rows: 4,
    resize: 'vertical',
  },
};

// All States Showcase
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <h3>Basic Textarea</h3>
      <textarea-input 
        label="Normal State" 
        placeholder="Enter text..."
      ></textarea-input>
      
      <h3>Required Field</h3>
      <textarea-input 
        label="Required Field" 
        placeholder="This field is required"
        ?required=${true}
      ></textarea-input>
      
      <h3>With Error</h3>
      <textarea-input 
        label="Error State" 
        value="Invalid input"
        errorText="This field has an error"
        placeholder="Enter valid text..."
      ></textarea-input>
      
      <h3>Disabled State</h3>
      <textarea-input 
        label="Disabled Field" 
        value="Cannot edit this"
        ?disabled=${true}
        placeholder="Disabled textarea"
      ></textarea-input>
      
      <h3>Large Textarea</h3>
      <textarea-input 
        label="Large Text Area" 
        rows=${8}
        placeholder="Large textarea with 8 rows..."
      ></textarea-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different textarea states and configurations.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 800px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};
