import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ctt-checkbox',
  tags: ['autodocs'],
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
    onChange: {
      action: 'change',
      description: 'Fired when the checkbox value changes.',
    },
  },
};

export default meta;

type Story = StoryObj;

const Template = (args: any) => html`
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
    @change=${args.onChange}
  ></ctt-checkbox>
`;

export const Default: Story = {
  render: Template,
  args: {
    label: 'Default Checkbox',
    name: 'default-checkbox',
    value: 'default',
    checked: false,
    disabled: false,
    errorText: '',
    id: 'default-checkbox',
    className: '',
  },
};

export const Checked: Story = {
  render: Template,
  args: {
    ...Default.args,
    label: 'Checked Checkbox',
    checked: true,
    id: 'checked-checkbox',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    ...Default.args,
    label: 'Disabled Checkbox',
    disabled: true,
    id: 'disabled-checkbox',
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    ...Default.args,
    label: 'Checkbox with Error',
    errorText: 'This is an error message.',
    id: 'error-checkbox',
  },
};

export const NoLabel: Story = {
  render: Template,
  args: {
    ...Default.args,
    label: '',
    ariaLabel: 'Checkbox without a visible label',
    id: 'no-label-checkbox',
  },
};
