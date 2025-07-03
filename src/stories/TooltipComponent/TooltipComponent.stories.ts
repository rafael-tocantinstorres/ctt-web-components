import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import './TooltipComponent';
import '../Button/Button';
import type { CttTooltip } from './TooltipComponent';

const meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  render: (args) => html`
    <ctt-tooltip
      text=${args.text}
      size=${args.size}
      position=${args.position}
      arrowPosition=${args.arrowPosition}
      ariaLabel=${args.ariaLabel || ''}
    >
      <ctt-button label="Hover me" size="medium" variant="primary" borderRadius="extraSmall"></ctt-button>
    </ctt-tooltip>
  `,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that provides contextual information on hover or focus, with customizable positioning and styling.',
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
      <div style="min-height: 250px; display: flex; align-items: center; justify-content: center; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    text: { 
      control: 'text',
      description: 'The tooltip text to display'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the tooltip'
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the trigger'
    },
    arrowPosition: {
      control: { type: 'select' },
      options: ['start', 'middle', 'end'],
      description: 'Position of the tooltip arrow within the tooltip'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers'
    },
  },
  args: {},
} satisfies Meta<CttTooltip>;

export default meta;
type Story = StoryObj<CttTooltip>;

// Default story
export const Default: Story = {
  args: {
    text: 'This is a tooltip',
    size: 'medium',
    position: 'top',
    arrowPosition: 'middle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip with default positioning and styling.',
      },
    },
  },
};

// Individual variant stories
export const Primary: Story = {
  args: {
    text: 'Primary tooltip',
    position: 'top',
    arrowPosition: 'middle',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary tooltip',
    position: 'top',
    arrowPosition: 'middle',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'Tertiary tooltip',
    position: 'top',
    arrowPosition: 'middle',
  },
};

// Size variants
export const Small: Story = {
  args: {
    text: 'Small tooltip',
    size: 'small',
    position: 'top',
    arrowPosition: 'middle',
  },
};

export const Medium: Story = {
  args: {
    text: 'Medium tooltip',
    size: 'medium',
    position: 'top',
    arrowPosition: 'middle',
  },
};

export const Large: Story = {
  args: {
    text: 'Large tooltip',
    size: 'large',
    position: 'top',
    arrowPosition: 'middle',
  },
};

// Position variants
export const TopPosition: Story = {
  args: {
    text: 'Tooltip appears on top',
    position: 'top',
    arrowPosition: 'middle',
  },
};

export const BottomPosition: Story = {
  args: {
    text: 'Tooltip appears on bottom',
    position: 'bottom',
    arrowPosition: 'middle',
  },
};

export const LeftPosition: Story = {
  args: {
    text: 'Tooltip appears on left',
    position: 'left',
    arrowPosition: 'middle',
  },
};

export const RightPosition: Story = {
  args: {
    text: 'Tooltip appears on right',
    position: 'right',
    arrowPosition: 'middle',
  },
};

// Arrow position variants
export const ArrowStart: Story = {
  args: {
    text: 'Arrow at start position',
    position: 'top',
    arrowPosition: 'start',
  },
};

export const ArrowMiddle: Story = {
  args: {
    text: 'Arrow at middle position',
    position: 'top',
    arrowPosition: 'middle',
  },
};

export const ArrowEnd: Story = {
  args: {
    text: 'Arrow at end position',
    position: 'top',
    arrowPosition: 'end',
  },
};

// Comprehensive demonstration stories
export const AllVariants: Story = {
  render: () => html`
    <div class="ctt-flex ctt-flex-col ctt-gap-8 ctt-max-w-5xl ctt-p-10">
      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Color Variants</h3>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Primary tooltip" position="top">
              <ctt-button label="Primary" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Secondary tooltip" position="top">
              <ctt-button label="Secondary" size="medium" variant="secondary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Tertiary tooltip" position="top">
              <ctt-button label="Tertiary" size="medium" variant="tertiary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Size Variants</h3>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Small tooltip" position="top" size="small">
              <ctt-button label="Small" size="small" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Medium tooltip" position="top" size="medium">
              <ctt-button label="Medium" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Large tooltip" position="top" size="large">
              <ctt-button label="Large" size="large" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Position Variants</h3>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Tooltip appears on top" position="top">
              <ctt-button label="Top" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Tooltip appears on bottom" position="bottom">
              <ctt-button label="Bottom" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Tooltip appears on left" position="left">
              <ctt-button label="Left" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Tooltip appears on right" position="right">
              <ctt-button label="Right" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Arrow Position Variants</h3>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Arrow at start" position="top" arrowPosition="start">
              <ctt-button label="Arrow Start" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Arrow at middle" position="top" arrowPosition="middle">
              <ctt-button label="Arrow Middle" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="Arrow at end" position="top" arrowPosition="end">
              <ctt-button label="Arrow End" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">State Variants</h3>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="This tooltip is enabled" position="top">
              <ctt-button label="Enabled" size="medium" variant="primary" borderRadius="small"></ctt-button>
            </ctt-tooltip>
          </div>
          <div class="ctt-text-center ctt-min-w-max">
            <ctt-tooltip text="This tooltip is disabled" position="top" disabled>
              <ctt-button label="Disabled" size="medium" variant="primary" borderRadius="small" disabled></ctt-button>
            </ctt-tooltip>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all tooltip variants, sizes, positions, and arrow alignments.',
      },
    },
  },
  decorators: [
    (story) => html`
      <div style="min-height: 600px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
};