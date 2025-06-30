import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { ButtonProps } from './Button';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
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
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

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

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning Button',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error Button',
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
