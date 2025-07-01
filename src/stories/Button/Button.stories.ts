import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { fn } from 'storybook/test';

import './Button';
import { CttButton } from './Button';

// Define a type for the story's args that includes the component's properties and actions
interface ButtonStoryArgs extends Partial<CttButton> {
  onClick?: () => void;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonStoryArgs> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <ctt-button
      .variant=${args.variant}
      .size=${args.size}
      .label=${args.label}
      ?iconLeft=${args.iconLeft}
      .iconLeftElement=${args.iconLeftElement}
      ?iconRight=${args.iconRight}
      .iconRightElement=${args.iconRightElement}
      .borderRadius=${args.borderRadius}
      ?disabled=${args.disabled}
      .ariaLabel=${args.ariaLabel}
      @click=${args.onClick}
    ></ctt-button>
  `,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['pill', 'small', 'extraSmall'],
    },
    disabled: { control: 'boolean' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    onClick: { action: 'click' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    label: 'Button with Icons',
    iconLeft: true,
    iconLeftElement: '🚀',
    iconRight: true,
    iconRightElement: '→',
  },
};
