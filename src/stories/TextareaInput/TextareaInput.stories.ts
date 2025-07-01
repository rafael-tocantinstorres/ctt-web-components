import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';

import './TextareaInput';
import { html } from 'lit';

// Interface for the web component properties
interface TextareaInputArgs {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  errorText: string;
  disabled: boolean;
  required: boolean;
  rows: number;
  cols: number;
  resize: 'none' | 'both' | 'horizontal' | 'vertical';
  ariaDescribedBy: string;
  onTextareaInput: (event: CustomEvent) => void;
  onTextareaChange: (event: CustomEvent) => void;
  onTextareaFocus: (event: CustomEvent) => void;
  onTextareaBlur: (event: CustomEvent) => void;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/TextareaInput',
  tags: ['autodocs'],
  render: (args: TextareaInputArgs) => html`
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
      @textarea-input=${args.onTextareaInput}
      @textarea-change=${args.onTextareaChange}
      @textarea-focus=${args.onTextareaFocus}
      @textarea-blur=${args.onTextareaBlur}
    ></textarea-input>
  `,
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
  args: {
    onTextareaInput: fn(),
    onTextareaChange: fn(),
    onTextareaFocus: fn(),
    onTextareaBlur: fn(),
  },
} satisfies Meta<TextareaInputArgs>;

export default meta;
type Story = StoryObj<TextareaInputArgs>;

// Default story
export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

// With Label and Value
export const WithValue: Story = {
  args: {
    label: 'Description',
    value: 'This is a sample textarea with some content already filled in.',
    placeholder: 'Enter description...',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

// Required Field
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    rows: 4,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

// With Error
export const WithError: Story = {
  args: {
    label: 'Comments',
    value: 'Invalid content',
    errorText: 'This field contains invalid characters',
    placeholder: 'Enter your comments...',
    name: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
    placeholder: 'Cannot edit this field',
    name: '',
    errorText: '',
    required: false,
    rows: 4,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

// Different Sizes
export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    rows: 8,
    placeholder: 'This textarea has 8 rows...',
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

export const WithColumns: Story = {
  args: {
    label: 'Fixed Width',
    cols: 50,
    rows: 6,
    placeholder: 'This textarea has fixed columns...',
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    resize: 'vertical',
    ariaDescribedBy: '',
  },
};

// Different Resize Options
export const ResizeNone: Story = {
  args: {
    label: 'No Resize',
    resize: 'none',
    placeholder: 'This textarea cannot be resized',
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    ariaDescribedBy: '',
  },
};

export const ResizeHorizontal: Story = {
  args: {
    label: 'Horizontal Resize',
    resize: 'horizontal',
    placeholder: 'This textarea can only be resized horizontally',
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    ariaDescribedBy: '',
  },
};

export const ResizeBoth: Story = {
  args: {
    label: 'Both Resize',
    resize: 'both',
    placeholder: 'This textarea can be resized in both directions',
    value: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    ariaDescribedBy: '',
  },
};

// No Label
export const NoLabel: Story = {
  args: {
    placeholder: 'Textarea without label',
    value: '',
    label: '',
    name: '',
    errorText: '',
    disabled: false,
    required: false,
    rows: 4,
    cols: 0,
    resize: 'vertical',
    ariaDescribedBy: '',
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
};
