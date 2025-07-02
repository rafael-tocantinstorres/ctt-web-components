import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './Button';
import type { CttButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
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
      ?iconOnly=${args.iconOnly}
      .icon=${args.icon}
      .borderRadius=${args.borderRadius}
      ?disabled=${args.disabled}
      .ariaLabel=${args.ariaLabel}
      @click=${fn()}
    ></ctt-button>
  `,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible button component with multiple variants, sizes, and icon support for various use cases.',
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
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the button',
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['pill', 'small', 'extraSmall'],
      description: 'Border radius style of the button',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    iconLeft: { 
      control: 'boolean',
      description: 'Show icon on the left side of the button',
    },
    iconLeftElement: {
      control: 'text',
      description: 'Icon content for left icon (emoji, text, or HTML)',
      if: { arg: 'iconLeft', eq: true },
    },
    iconRight: { 
      control: 'boolean',
      description: 'Show icon on the right side of the button',
    },
    iconRightElement: {
      control: 'text',
      description: 'Icon content for right icon (emoji, text, or HTML)',
      if: { arg: 'iconRight', eq: true },
    },
    iconOnly: { 
      control: 'boolean',
      description: 'Show only icon without label (requires ariaLabel for accessibility)',
    },
    icon: {
      control: 'text',
      description: 'Icon content for icon-only button (emoji, text, or HTML)',
      if: { arg: 'iconOnly', eq: true },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers (required for icon-only buttons)',
    },
  },
  args: {},
} satisfies Meta<CttButton>;

export default meta;
type Story = StoryObj<CttButton>;

// Default story
export const Default: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic button with primary variant.',
      },
    },
  },
};

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
  parameters: {
    docs: {
      description: {
        story: 'Button with both left and right icons.',
      },
    },
  },
};

export const IconLeft: Story = {
  args: {
    variant: 'primary',
    label: 'Download',
    iconLeft: true,
    iconLeftElement: '⬇️',
  },
};

export const IconRight: Story = {
  args: {
    variant: 'primary',
    label: 'Next',
    iconRight: true,
    iconRightElement: '→',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    iconOnly: true,
    icon: '❤️',
    ariaLabel: 'Like this item',
  },
};

export const IconOnlySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    iconOnly: true,
    icon: '✏️',
    ariaLabel: 'Edit',
  },
};

export const IconOnlyLarge: Story = {
  args: {
    variant: 'ghost',
    size: 'large',
    iconOnly: true,
    icon: '🔍',
    ariaLabel: 'Search',
  },
};

export const IconOnlyDisabled: Story = {
  args: {
    variant: 'primary',
    iconOnly: true,
    icon: '🔒',
    ariaLabel: 'Locked',
    disabled: true,
  },
};

export const IconShowcase: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Icon Left</span>
        <ctt-button
          variant="primary"
          label="Download"
          .iconLeft=${true}
          .iconLeftElement=${'⬇️'}
        ></ctt-button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Icon Right</span>
        <ctt-button
          variant="secondary"
          label="Next"
          .iconRight=${true}
          .iconRightElement=${'→'}
        ></ctt-button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Icon Only - Small</span>
        <ctt-button
          variant="tertiary"
          size="small"
          .iconOnly=${true}
          .icon=${'✏️'}
          ariaLabel="Edit"
        ></ctt-button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Icon Only - Medium</span>
        <ctt-button
          variant="primary"
          size="medium"
          .iconOnly=${true}
          .icon=${'❤️'}
          ariaLabel="Like"
        ></ctt-button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Icon Only - Large</span>
        <ctt-button
          variant="ghost"
          size="large"
          .iconOnly=${true}
          .icon=${'🔍'}
          ariaLabel="Search"
        ></ctt-button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Both Icons</span>
        <ctt-button
          variant="primary"
          label="Deploy"
          .iconLeft=${true}
          .iconLeftElement=${'🚀'}
          .iconRight=${true}
          .iconRightElement=${'✨'}
        ></ctt-button>
      </div>
    </div>
  `,
};

export const ClickEvents: Story = {
  render: () => {
    let clickCount = 0;
    let lastClickedButton = '';
    
    const updateDisplay = () => {
      const display = document.getElementById('click-display');
      if (display) {
        display.innerHTML = `
          <p><strong>Total Clicks:</strong> ${clickCount}</p>
          <p><strong>Last Clicked:</strong> ${lastClickedButton || 'None'}</p>
        `;
      }
    };

    const handleClick = (buttonName: string) => {
      clickCount++;
      lastClickedButton = buttonName;
      updateDisplay();
      console.log(`Button "${buttonName}" clicked! Total clicks: ${clickCount}`);
    };

    // Use setTimeout to ensure the DOM is ready
    setTimeout(updateDisplay, 0);

    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="padding: 1rem; background: #f5f5f5; border-radius: 8px; border: 1px solid #ddd;">
          <h3 style="margin: 0 0 1rem 0; color: #333;">Click Event Tracker</h3>
          <div id="click-display" style="color: #666;">
            <p><strong>Total Clicks:</strong> 0</p>
            <p><strong>Last Clicked:</strong> None</p>
          </div>
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ctt-button
            variant="primary"
            label="Primary Action"
            @click=${() => handleClick('Primary Action')}
          ></ctt-button>
          
          <ctt-button
            variant="secondary"
            label="Secondary Action"
            @click=${() => handleClick('Secondary Action')}
          ></ctt-button>
          
          <ctt-button
            variant="tertiary"
            label="Save"
            .iconLeft=${true}
            .iconLeftElement=${'💾'}
            @click=${() => handleClick('Save with Icon')}
          ></ctt-button>
          
          <ctt-button
            variant="ghost"
            .iconOnly=${true}
            .icon=${'❤️'}
            ariaLabel="Like"
            @click=${() => handleClick('Like (Icon Only)')}
          ></ctt-button>
          
          <ctt-button
            variant="primary"
            label="Delete"
            .iconRight=${true}
            .iconRightElement=${'🗑️'}
            @click=${() => handleClick('Delete with Icon')}
          ></ctt-button>
          
          <ctt-button
            variant="secondary"
            label="Reset Counter"
            @click=${() => {
              clickCount = 0;
              lastClickedButton = '';
              updateDisplay();
              console.log('Counter reset!');
            }}
          ></ctt-button>
        </div>
        
        <div style="padding: 1rem; background: #e8f4fd; border-radius: 8px; border: 1px solid #b8daff;">
          <h4 style="margin: 0 0 0.5rem 0; color: #0056b3;">💡 Try This:</h4>
          <ul style="margin: 0; padding-left: 1.5rem; color: #004085;">
            <li>Click any button to see the event tracking in action</li>
            <li>Open your browser's developer console to see console.log outputs</li>
            <li>Try clicking different button variants and icon combinations</li>
            <li>Use the "Reset Counter" button to start over</li>
          </ul>
        </div>
      </div>
    `;
  },
};

export const ClickEventHandlers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div style="padding: 1rem; background: #fff3cd; border-radius: 8px; border: 1px solid #ffeeba;">
        <h3 style="margin: 0 0 1rem 0; color: #856404;">Event Handling Examples</h3>
        <p style="margin: 0; color: #856404;">
          These examples show different ways to handle button click events. Check the browser console for outputs.
        </p>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div style="padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4 style="margin: 0 0 1rem 0; color: #495057;">Simple Alert</h4>
          <ctt-button
            variant="primary"
            label="Show Alert"
            @click=${() => alert('Hello from CTT Button!')}
          ></ctt-button>
        </div>
        
        <div style="padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4 style="margin: 0 0 1rem 0; color: #495057;">Console Logging</h4>
          <ctt-button
            variant="secondary"
            label="Log Message"
            .iconLeft=${true}
            .iconLeftElement=${'📝'}
            @click=${() => {
              console.log('Button clicked at:', new Date().toLocaleTimeString());
              console.log('Event from CTT Button component');
            }}
          ></ctt-button>
        </div>
        
        <div style="padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4 style="margin: 0 0 1rem 0; color: #495057;">Form Submission</h4>
          <ctt-button
            variant="tertiary"
            label="Submit Form"
            .iconRight=${true}
            .iconRightElement=${'✉️'}
            @click=${(e: Event) => {
              e.preventDefault();
              console.log('Form submission prevented');
              console.log('Custom form handling logic would go here');
            }}
          ></ctt-button>
        </div>
        
        <div style="padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4 style="margin: 0 0 1rem 0; color: #495057;">Toggle State</h4>
          <ctt-button
            variant="ghost"
            .iconOnly=${true}
            .icon=${'🔄'}
            ariaLabel="Toggle state"
            @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const currentIcon = button.querySelector('.ctt-button__icon')?.textContent;
              console.log('Toggle button clicked, current icon:', currentIcon);
            }}
          ></ctt-button>
        </div>
        
        <div style="padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4 style="margin: 0 0 1rem 0; color: #495057;">Custom Event Data</h4>
          <ctt-button
            variant="primary"
            label="Send Data"
            @click=${() => {
              const customData = {
                timestamp: Date.now(),
                buttonType: 'ctt-button',
                action: 'data-send',
                user: 'demo-user'
              };
              console.log('Custom event data:', customData);
            }}
          ></ctt-button>
        </div>
        
        <div style="padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4 style="margin: 0 0 1rem 0; color: #495057;">Error Handling</h4>
          <ctt-button
            variant="primary"
            label="Handle Error"
            .iconLeft=${true}
            .iconLeftElement=${'⚠️'}
            @click=${() => {
              try {
                // Simulate an operation that might fail
                throw new Error('Simulated error for demonstration');
              } catch (error) {
                console.error('Button click error:', error);
                alert('Error handled gracefully!');
              }
            }}
          ></ctt-button>
        </div>
      </div>
    </div>
  `,
};
