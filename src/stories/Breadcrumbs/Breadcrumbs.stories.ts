import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './Breadcrumbs';
import type { CttBreadcrumbs, BreadcrumbItem } from './Breadcrumbs';

// Sample data for stories
const sampleBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', state: 'default', navigate: () => console.log('Navigate to Home') },
  { label: 'Products', state: 'default', navigate: () => console.log('Navigate to Products') },
  { label: 'Electronics', state: 'default', navigate: () => console.log('Navigate to Electronics') },
  { label: 'Smartphones', state: 'active' },
];

const simpleBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', state: 'default', navigate: () => console.log('Navigate to Home') },
  { label: 'Current Page', state: 'active' },
];

const longBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', state: 'default', navigate: () => console.log('Navigate to Home') },
  { label: 'Category', state: 'default', navigate: () => console.log('Navigate to Category') },
  { label: 'Subcategory', state: 'default', navigate: () => console.log('Navigate to Subcategory') },
  { label: 'Product Group', state: 'default', navigate: () => console.log('Navigate to Product Group') },
  { label: 'Product Type', state: 'default', navigate: () => console.log('Navigate to Product Type') },
  { label: 'Current Product', state: 'active' },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
  render: (args) => html`<ctt-breadcrumbs
    .items=${args.items}
    aria-label=${args.ariaLabel}
    @navigate=${fn()}
  ></ctt-breadcrumbs>`,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A navigation component that shows the user\'s current location in a hierarchical structure. Breadcrumbs are separated by "/" and provide easy navigation back to parent pages.',
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
      <div style="min-height: 200px; padding: 20px;">
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  args: {
    items: sampleBreadcrumbs,
    ariaLabel: 'Breadcrumb navigation',
  },
} satisfies Meta<CttBreadcrumbs>;

export default meta;
type Story = StoryObj<CttBreadcrumbs>;

// Default story
export const Default: Story = {
  args: {
    items: sampleBreadcrumbs,
    ariaLabel: 'Breadcrumb navigation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic breadcrumbs showing a typical navigation path with multiple levels.',
      },
    },
  },
};

// Simple breadcrumbs
export const Simple: Story = {
  args: {
    items: simpleBreadcrumbs,
    ariaLabel: 'Simple breadcrumb navigation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple breadcrumbs with just two levels.',
      },
    },
  },
};

// Long breadcrumbs
export const Long: Story = {
  args: {
    items: longBreadcrumbs,
    ariaLabel: 'Long breadcrumb navigation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Long breadcrumbs showing deep navigation hierarchy.',
      },
    },
  },
};

// Single item (just current page)
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Current Page', state: 'active' }],
    ariaLabel: 'Single item breadcrumb',
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with only the current page (no navigation).',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => html`
    <div class="ctt-flex ctt-flex-col ctt-gap-6 ctt-max-w-4xl ctt-p-6">
      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Click on any breadcrumb to navigate</h3>
        <p class="ctt-body-m" style="color: #666;">
          Open the browser console to see navigation events when you click on the breadcrumb items.
        </p>
        <ctt-breadcrumbs .items=${sampleBreadcrumbs} @navigate=${(e: CustomEvent) => {
          console.log('Breadcrumb navigation:', e.detail.item);
          alert(`Navigating to: ${e.detail.item.label}`);
        }}></ctt-breadcrumbs>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumbs that respond to clicks and trigger navigation events.',
      },
    },
  },
};
