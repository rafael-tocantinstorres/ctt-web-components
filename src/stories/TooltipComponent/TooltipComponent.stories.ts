import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../Button/Button';

import './TooltipComponent';
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
      ?disabled=${args.disabled}
      ariaLabel=${args.ariaLabel || ''}
    >
      <ctt-button label="Hover me" size="medium" variant="primary" borderRadius="extraSmall"></ctt-button>
    </ctt-tooltip>
  `,
  parameters: {
    layout: 'centered',
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
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled'
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

export const Default: Story = {
  args: {
    text: 'This is a tooltip',
    size: 'medium',
    position: 'top',
    arrowPosition: 'middle',
    disabled: false,
    ariaLabel: '',
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

export const Disabled: Story = {
  args: {
    text: 'This tooltip is disabled',
    position: 'top',
    arrowPosition: 'middle',
    disabled: true,
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
};

export const PracticalExamples: Story = {
  render: () => html`
    <style>
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      }

      .icon-button {
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: #f5f5f5;
        cursor: pointer;
        font-size: 18px;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icon-button:hover {
        background: #e5e5e5;
        transform: translateY(-1px);
      }

      .badge {
        display: inline-block;
        padding: 6px 12px;
        background: #ef4444;
        color: white;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .badge:hover {
        background: #dc2626;
      }

      .status-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #10b981;
        cursor: pointer;
        transition: transform 0.2s;
      }

      .status-indicator:hover {
        transform: scale(1.2);
      }
    </style>

    <div class="ctt-flex ctt-flex-col ctt-gap-8 ctt-max-w-5xl ctt-p-10">
      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">User Interface Elements</h3>
        <p class="ctt-body-m" style="color: #666; margin-bottom: 16px;">Hover over elements to see tooltips with different arrow positions</p>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <ctt-tooltip text="John is a senior developer with 5+ years of experience in React and TypeScript" position="bottom" arrowPosition="start" size="large">
            <div class="ctt-flex ctt-items-center ctt-gap-3 ctt-p-4 ctt-relative" style="border: 1px solid #e5e5e5; border-radius: 8px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: box-shadow 0.2s;">
              <div class="user-avatar">JD</div>
              <div>
                <h4 class="ctt-label-m" style="margin: 0; color: #333;">John Doe</h4>
                <p class="ctt-label-s" style="margin: 4px 0 0 0; color: #666;">Senior Developer</p>
              </div>
            </div>
          </ctt-tooltip>

          <ctt-tooltip text="Currently online and available" position="top" arrowPosition="middle" size="small">
            <div class="status-indicator"></div>
          </ctt-tooltip>

          <ctt-tooltip text="You have 12 unread notifications" position="right" arrowPosition="start" size="medium">
            <span class="badge">12</span>
          </ctt-tooltip>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Toolbar Actions</h3>
        <p class="ctt-body-m" style="color: #666; margin-bottom: 16px;">Common toolbar buttons with contextual tooltips</p>
        <div class="ctt-flex ctt-gap-2 ctt-p-3" style="background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
          <ctt-tooltip text="Create new document" position="top" arrowPosition="start">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="📄" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Save current changes" position="top" arrowPosition="middle">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="💾" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Copy to clipboard" position="top" arrowPosition="middle">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="📋" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Share with team" position="top" arrowPosition="middle">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="🔗" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Delete permanently" position="top" arrowPosition="end">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="🗑️" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Mixed Positions & Arrow Alignments</h3>
        <p class="ctt-body-m" style="color: #666; margin-bottom: 16px;">Demonstrating different tooltip positions with various arrow alignments</p>
        <div class="ctt-flex ctt-gap-6 ctt-items-center ctt-flex-wrap">
          <ctt-tooltip text="Left tooltip, arrow at start" position="left" arrowPosition="start">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="⬅️" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Top tooltip, arrow at end" position="top" arrowPosition="end">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="⬆️" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Right tooltip, arrow at start" position="right" arrowPosition="start">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="➡️" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>

          <ctt-tooltip text="Bottom tooltip, arrow at end" position="bottom" arrowPosition="end">
            <ctt-button iconOnly="true" variant="primary" label="Hover me" icon="⬇️" borderRadius="extraSmall"></ctt-button>
          </ctt-tooltip>
        </div>
      </div>
    </div>
  `,
};

// Advanced combinations story
export const AdvancedCombinations: Story = {
  render: () => html`
    <style>
      .demo-card {
        padding: 20px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        text-align: center;
        transition: all 0.2s;
      }

      .demo-card:hover {
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transform: translateY(-2px);
      }
    </style>

    <div class="ctt-flex ctt-flex-col ctt-gap-8 ctt-max-w-5xl ctt-p-10">
      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Advanced Tooltip Combinations</h3>
        <div class="ctt-grid ctt-gap-6" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          <div class="demo-card">
            <div class="ctt-label-m ctt-mb-3" style="color: #666;">Large Primary Top Start</div>
            <ctt-tooltip text="This is a large primary tooltip positioned at the top with arrow at start" position="top" arrowPosition="start" size="large">
              <ctt-button label="Hover Me" size="large" variant="primary" borderRadius="extraSmall"></ctt-button>
            </ctt-tooltip>
          </div>

          <div class="demo-card">
            <div class="ctt-label-m ctt-mb-3" style="color: #666;">Small Secondary Bottom End</div>
            <ctt-tooltip text="Small secondary bottom end" position="bottom" arrowPosition="end" size="small">
              <ctt-button label="Hover Me" size="small" variant="secondary" borderRadius="extraSmall"></ctt-button>
            </ctt-tooltip>
          </div>

          <div class="demo-card">
            <div class="ctt-label-m ctt-mb-3" style="color: #666;">Medium Tertiary Left Start</div>
            <ctt-tooltip text="Medium tertiary left start" position="left" arrowPosition="start" size="medium">
              <ctt-button label="Hover Me" size="medium" variant="tertiary" borderRadius="extraSmall"></ctt-button>
            </ctt-tooltip>
          </div>

          <div class="demo-card">
            <div class="ctt-label-m ctt-mb-3" style="color: #666;">Large Primary Right End</div>
            <ctt-tooltip text="Large primary right end tooltip" position="right" arrowPosition="end" size="large">
              <ctt-button label="Hover Me" size="large" variant="primary" borderRadius="extraSmall"></ctt-button>
            </ctt-tooltip>
          </div>

          <div class="demo-card">
            <div class="ctt-label-m ctt-mb-3" style="color: #666;">Small Tertiary Top Middle</div>
            <ctt-tooltip text="Small tertiary top middle" position="top" arrowPosition="middle" size="small">
              <ctt-button label="Hover Me" size="small" variant="tertiary" borderRadius="extraSmall"></ctt-button>
            </ctt-tooltip>
          </div>

          <div class="demo-card">
            <div class="ctt-label-m ctt-mb-3" style="color: #666;">Medium Secondary Left End</div>
            <ctt-tooltip text="Medium secondary left end" position="left" arrowPosition="end" size="medium">
              <ctt-button label="Hover Me" size="medium" variant="secondary" borderRadius="extraSmall"></ctt-button>
            </ctt-tooltip>
          </div>
        </div>
      </div>
    </div>
  `,
};
