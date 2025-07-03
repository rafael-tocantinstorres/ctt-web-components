#!/usr/bin/env node

/**
 * CTT Web Components - Component Scaffolding Script
 * 
 * This script generates a new component with all necessary files:
 * - Component TypeScript file with Lit Web Components
 * - Component CSS file with CTT design tokens
 * - Storybook stories file following consistent pattern
 * - Basic test structure
 * 
 * Usage:
 * node scripts/create-component.js ComponentName
 * npm run create-component ComponentName
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get component name from command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name');
  console.log('Usage: node scripts/create-component.js ComponentName');
  process.exit(1);
}

// Validate component name (should be PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Component name should be in PascalCase (e.g., MyComponent)');
  process.exit(1);
}

// Convert PascalCase to kebab-case
const kebabName = componentName.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1);
const camelName = componentName.charAt(0).toLowerCase() + componentName.slice(1);

// Define paths
const projectRoot = path.resolve(__dirname, '..');
const componentDir = path.join(projectRoot, 'src', 'stories', componentName);

// Check if component already exists
if (fs.existsSync(componentDir)) {
  console.error(`❌ Component ${componentName} already exists`);
  process.exit(1);
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Generate TypeScript component file
const componentTs = `import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './${componentName}.css';

/**
 * ${componentName} Web Component
 * 
 * A customizable ${componentName.toLowerCase()} component for the CTT Design System.
 * 
 * @element ctt-${kebabName}
 * 
 * @fires click - Dispatched when the component is clicked
 * @fires change - Dispatched when the component value changes
 * 
 * @slot - Main content slot
 * 
 * @csspart component - The main component wrapper
 * 
 * @cssprop --ctt-${kebabName}-background - Background color
 * @cssprop --ctt-${kebabName}-color - Text color
 * @cssprop --ctt-${kebabName}-border - Border style
 */
@customElement('ctt-${kebabName}')
export class ${componentName} extends LitElement {
  static styles = css\`:host { display: inline-block; }\`;

  /**
   * Size variant of the component
   */
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Color variant of the component
   */
  @property({ type: String })
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Whether the component is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * The text content to display
   */
  @property({ type: String })
  label = '';

  /**
   * Accessible label for screen readers
   */
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel = '';

  /**
   * Name attribute for form elements
   */
  @property({ type: String })
  name = '';

  /**
   * Value attribute for form elements
   */
  @property({ type: String })
  value = '';

  private _handleClick() {
    if (this.disabled) return;
    
    this.dispatchEvent(new CustomEvent('click', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const classes = [
      'ctt-${kebabName}',
      \`ctt-\${kebabName}--\${this.size}\`,
      \`ctt-\${kebabName}--\${this.variant}\`,
      this.disabled && \`ctt-\${kebabName}--disabled\`,
    ].filter(Boolean).join(' ');

    return html\`
      <div
        part="component"
        class=\${classes}
        ?disabled=\${this.disabled}
        aria-label=\${this.ariaLabel || this.label}
        role="button"
        tabindex=\${this.disabled ? '-1' : '0'}
        @click=\${this._handleClick}
        @keydown=\${this._handleKeyDown}
      >
        <slot>\${this.label}</slot>
      </div>
    \`;
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._handleClick();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ctt-${kebabName}': ${componentName};
  }
}
`;

// Generate CSS file
const componentCss = `/**
 * CTT ${componentName} Component - Styles for Production Use
 * Using CTT Design System tokens
 * 
 * Usage:
 * <ctt-${kebabName} size="medium" variant="primary" label="Content"></ctt-${kebabName}>
 */

/* ${componentName}-specific CSS Custom Properties */
:root {
  /* ${componentName} Spacing - Using core dimension tokens */
  --ctt-${kebabName}-padding-small: var(--ctt-core-dimension-50);     /* 8px */
  --ctt-${kebabName}-padding-medium: var(--ctt-core-dimension-100);   /* 16px */
  --ctt-${kebabName}-padding-large: var(--ctt-core-dimension-150);    /* 24px */

  /* ${componentName} Border Radius */
  --ctt-${kebabName}-border-radius: var(--ctt-base-border-radius-m);

  /* ${componentName} Transitions */
  --ctt-${kebabName}-transition: all 0.2s ease-in-out;
}

/* Base ${componentName} Styles */
.ctt-${kebabName} {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Typography */
  font-family: var(--ctt-core-font-family-body);
  font-weight: var(--ctt-core-font-weight-regular);
  line-height: var(--ctt-core-line-height-base);
  
  /* Spacing */
  padding: var(--ctt-${kebabName}-padding-medium);
  
  /* Border */
  border: 1px solid transparent;
  border-radius: var(--ctt-${kebabName}-border-radius);
  
  /* Transitions */
  transition: var(--ctt-${kebabName}-transition);
  
  /* Cursor */
  cursor: pointer;
  
  /* Text selection */
  user-select: none;
}

/* Size Variants */
.ctt-${kebabName}--small {
  padding: var(--ctt-${kebabName}-padding-small);
  font-size: var(--ctt-core-font-size-s);
}

.ctt-${kebabName}--medium {
  padding: var(--ctt-${kebabName}-padding-medium);
  font-size: var(--ctt-core-font-size-base);
}

.ctt-${kebabName}--large {
  padding: var(--ctt-${kebabName}-padding-large);
  font-size: var(--ctt-core-font-size-l);
}

/* Color Variants */
.ctt-${kebabName}--primary {
  background-color: var(--ctt-core-color-brand-primary);
  color: var(--ctt-core-color-neutral-0);
  border-color: var(--ctt-core-color-brand-primary);
}

.ctt-${kebabName}--primary:hover {
  background-color: var(--ctt-core-color-brand-primary-dark);
  border-color: var(--ctt-core-color-brand-primary-dark);
}

.ctt-${kebabName}--secondary {
  background-color: var(--ctt-core-color-neutral-0);
  color: var(--ctt-core-color-brand-primary);
  border-color: var(--ctt-core-color-brand-primary);
}

.ctt-${kebabName}--secondary:hover {
  background-color: var(--ctt-core-color-neutral-50);
}

.ctt-${kebabName}--tertiary {
  background-color: transparent;
  color: var(--ctt-core-color-brand-primary);
  border-color: transparent;
}

.ctt-${kebabName}--tertiary:hover {
  background-color: var(--ctt-core-color-neutral-50);
}

/* Disabled State */
.ctt-${kebabName}--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* Focus State */
.ctt-${kebabName}:focus {
  outline: 2px solid var(--ctt-core-color-focus);
  outline-offset: 2px;
}

/* Active State */
.ctt-${kebabName}:active {
  transform: translateY(1px);
}

/* Accessibility - High Contrast Mode */
@media (prefers-contrast: high) {
  .ctt-${kebabName} {
    border-width: 2px;
  }
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .ctt-${kebabName} {
    transition: none;
  }
}
`;

// Generate Storybook stories file following the consistent pattern
const storiesTs = `import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';
import { html } from 'lit';

import './${componentName}';
import type { ${componentName} } from './${componentName}';

// Sample data for stories
const sampleVariants = ['primary', 'secondary', 'tertiary'] as const;
const sampleSizes = ['small', 'medium', 'large'] as const;
const sampleLabels = [
  'Click me',
  'Submit',
  'Cancel',
  'Save changes',
  'Get started',
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/${componentName}',
  tags: ['autodocs'],
  render: (args) => html\`<ctt-${kebabName}
    size=\${args.size}
    variant=\${args.variant}
    ?disabled=\${args.disabled}
    label=\${args.label}
    name=\${args.name}
    value=\${args.value}
    aria-label=\${args.ariaLabel}
    @click=\${fn()}
    @change=\${fn()}
  ></ctt-${kebabName}>\`,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible ${componentName.toLowerCase()} component that supports different sizes, variants, and states.',
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
    (story) => html\`
      <div style="min-height: 200px; padding: 20px;">
        \${story()}
      </div>
    \`,
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the component',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Color variant of the component',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
    },
    label: {
      control: 'text',
      description: 'The text content to display',
    },
    name: {
      control: 'text',
      description: 'Name attribute for form elements',
    },
    value: {
      control: 'text',
      description: 'Value attribute for form elements',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  args: {},
} satisfies Meta<${componentName}>;

export default meta;
type Story = StoryObj<${componentName}>;

// Default story
export const Default: Story = {
  args: {
    label: '${componentName} Component',
    size: 'medium',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic ${componentName.toLowerCase()} with default settings.',
      },
    },
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small ${componentName}',
    variant: 'primary',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium ${componentName}',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large ${componentName}',
    variant: 'primary',
  },
};

// Color variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary ${componentName}',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary ${componentName}',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary ${componentName}',
    size: 'medium',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled ${componentName}',
    variant: 'primary',
    size: 'medium',
  },
};

// Interactive examples
export const Interactive: Story = {
  args: {
    label: 'Click me!',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive ${componentName.toLowerCase()} that responds to clicks.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => html\`
    <div class="ctt-flex ctt-flex-col ctt-gap-8 ctt-max-w-4xl ctt-p-6">
      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Size Variants</h3>
        <div class="ctt-flex ctt-gap-4 ctt-items-center ctt-flex-wrap">
          <ctt-${kebabName} size="small" variant="primary" label="Small"></ctt-${kebabName}>
          <ctt-${kebabName} size="medium" variant="primary" label="Medium"></ctt-${kebabName}>
          <ctt-${kebabName} size="large" variant="primary" label="Large"></ctt-${kebabName}>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">Color Variants</h3>
        <div class="ctt-flex ctt-gap-4 ctt-items-center ctt-flex-wrap">
          <ctt-${kebabName} variant="primary" label="Primary"></ctt-${kebabName}>
          <ctt-${kebabName} variant="secondary" label="Secondary"></ctt-${kebabName}>
          <ctt-${kebabName} variant="tertiary" label="Tertiary"></ctt-${kebabName}>
        </div>
      </div>

      <div class="ctt-flex ctt-flex-col ctt-gap-4">
        <h3 class="ctt-title-m">State Variants</h3>
        <div class="ctt-flex ctt-gap-4 ctt-items-center ctt-flex-wrap">
          <ctt-${kebabName} variant="primary" label="Normal"></ctt-${kebabName}>
          <ctt-${kebabName} variant="primary" label="Disabled" disabled></ctt-${kebabName}>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all ${componentName.toLowerCase()} variants and states.',
      },
    },
  },
  decorators: [
    (story) => html\`
      <div style="min-height: 400px; padding: 20px;">
        \${story()}
      </div>
    \`,
  ],
};
`;

// Generate test file
const testTs = `import { describe, it, expect, beforeEach } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './${componentName}';
import type { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  let element: ${componentName};

  beforeEach(async () => {
    element = await fixture(html\`<ctt-${kebabName}></ctt-${kebabName}>\`);
  });

  it('should render with default properties', () => {
    expect(element).to.exist;
    expect(element.size).to.equal('medium');
    expect(element.variant).to.equal('primary');
    expect(element.disabled).to.be.false;
  });

  it('should render with custom label', async () => {
    element.label = 'Test Label';
    await element.updateComplete;
    
    const content = element.shadowRoot?.textContent?.trim();
    expect(content).to.include('Test Label');
  });

  it('should apply size classes correctly', async () => {
    element.size = 'small';
    await element.updateComplete;
    
    const componentDiv = element.shadowRoot?.querySelector('.ctt-${kebabName}');
    expect(componentDiv?.classList.contains('ctt-${kebabName}--small')).to.be.true;
  });

  it('should apply variant classes correctly', async () => {
    element.variant = 'secondary';
    await element.updateComplete;
    
    const componentDiv = element.shadowRoot?.querySelector('.ctt-${kebabName}');
    expect(componentDiv?.classList.contains('ctt-${kebabName}--secondary')).to.be.true;
  });

  it('should handle disabled state', async () => {
    element.disabled = true;
    await element.updateComplete;
    
    const componentDiv = element.shadowRoot?.querySelector('.ctt-${kebabName}');
    expect(componentDiv?.classList.contains('ctt-${kebabName}--disabled')).to.be.true;
    expect(componentDiv?.getAttribute('tabindex')).to.equal('-1');
  });

  it('should dispatch click event when clicked', async () => {
    let eventFired = false;
    element.addEventListener('click', () => {
      eventFired = true;
    });
    
    const componentDiv = element.shadowRoot?.querySelector('.ctt-${kebabName}');
    componentDiv?.dispatchEvent(new Event('click'));
    
    expect(eventFired).to.be.true;
  });

  it('should not dispatch events when disabled', async () => {
    element.disabled = true;
    await element.updateComplete;
    
    let eventFired = false;
    element.addEventListener('click', () => {
      eventFired = true;
    });
    
    const componentDiv = element.shadowRoot?.querySelector('.ctt-${kebabName}');
    componentDiv?.dispatchEvent(new Event('click'));
    
    expect(eventFired).to.be.false;
  });

  it('should handle keyboard events', async () => {
    let eventFired = false;
    element.addEventListener('click', () => {
      eventFired = true;
    });
    
    const componentDiv = element.shadowRoot?.querySelector('.ctt-${kebabName}');
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    componentDiv?.dispatchEvent(enterEvent);
    
    expect(eventFired).to.be.true;
  });
});
`;

// Generate README file
const readmeMd = `# ${componentName}

A ${componentName.toLowerCase()} web component for the CTT Design System.

## Usage

\`\`\`html
<!-- Basic usage -->
<ctt-${kebabName} label="Click me"></ctt-${kebabName}>

<!-- With variants -->
<ctt-${kebabName} 
  label="Submit" 
  variant="primary" 
  size="large">
</ctt-${kebabName}>

<!-- Disabled state -->
<ctt-${kebabName} 
  label="Disabled" 
  disabled>
</ctt-${kebabName}>
\`\`\`

## Properties

| Property | Type | Default | Description |
|---------|------|---------|-------------|
| \`size\` | \`'small' \\| 'medium' \\| 'large'\` | \`'medium'\` | Size variant of the component |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'tertiary'\` | \`'primary'\` | Color variant of the component |
| \`disabled\` | \`boolean\` | \`false\` | Whether the component is disabled |
| \`label\` | \`string\` | \`''\` | The text content to display |
| \`name\` | \`string\` | \`''\` | Name attribute for form elements |
| \`value\` | \`string\` | \`''\` | Value attribute for form elements |
| \`ariaLabel\` | \`string\` | \`''\` | Accessible label for screen readers |

## Events

| Event | Description | Detail |
|-------|-------------|--------|
| \`click\` | Dispatched when the component is clicked | \`{ value: string }\` |
| \`change\` | Dispatched when the component value changes | \`{ value: string }\` |

## Slots

| Slot | Description |
|------|-------------|
| Default | Main content slot |

## CSS Custom Properties

| Property | Description | Default |
|----------|-------------|---------|
| \`--ctt-${kebabName}-background\` | Background color | Theme dependent |
| \`--ctt-${kebabName}-color\` | Text color | Theme dependent |
| \`--ctt-${kebabName}-border\` | Border style | Theme dependent |

## CSS Parts

| Part | Description |
|------|-------------|
| \`component\` | The main component wrapper |

## Variants

### Size
- \`small\` - Compact size for tight spaces
- \`medium\` - Default size for most use cases  
- \`large\` - Prominent size for emphasis

### Color
- \`primary\` - Main brand color, used for primary actions
- \`secondary\` - Outlined style, used for secondary actions
- \`tertiary\` - Minimal style, used for tertiary actions

## Accessibility

- Supports keyboard navigation (Enter and Space keys)
- Proper ARIA labeling
- Focus management
- Screen reader support
- High contrast mode support
- Respects reduced motion preferences

## Examples

### Basic Examples

\`\`\`html
<!-- Different sizes -->
<ctt-${kebabName} size="small" label="Small"></ctt-${kebabName}>
<ctt-${kebabName} size="medium" label="Medium"></ctt-${kebabName}>
<ctt-${kebabName} size="large" label="Large"></ctt-${kebabName}>

<!-- Different variants -->
<ctt-${kebabName} variant="primary" label="Primary"></ctt-${kebabName}>
<ctt-${kebabName} variant="secondary" label="Secondary"></ctt-${kebabName}>
<ctt-${kebabName} variant="tertiary" label="Tertiary"></ctt-${kebabName}>
\`\`\`

### With Event Handling

\`\`\`html
<ctt-${kebabName} 
  label="Click me" 
  @click="\${handleClick}">
</ctt-${kebabName}>
\`\`\`

\`\`\`typescript
function handleClick(event: CustomEvent) {
  console.log('Component clicked:', event.detail);
}
\`\`\`

### Form Integration

\`\`\`html
<ctt-${kebabName} 
  name="${camelName}" 
  value="submit"
  label="Submit Form">
</ctt-${kebabName}>
\`\`\`
`;

// Write all files
try {
  // Component TypeScript file
  fs.writeFileSync(path.join(componentDir, `${componentName}.ts`), componentTs);
  console.log(`✅ Created ${componentName}.ts`);

  // Component CSS file
  fs.writeFileSync(path.join(componentDir, `${componentName}.css`), componentCss);
  console.log(`✅ Created ${componentName}.css`);

  // Stories file
  fs.writeFileSync(path.join(componentDir, `${componentName}.stories.ts`), storiesTs);
  console.log(`✅ Created ${componentName}.stories.ts`);

  // Test file
  fs.writeFileSync(path.join(componentDir, `${componentName}.test.ts`), testTs);
  console.log(`✅ Created ${componentName}.test.ts`);

  // README file
  fs.writeFileSync(path.join(componentDir, 'README.md'), readmeMd);
  console.log(`✅ Created README.md`);

  console.log('');
  console.log(`🎉 Successfully created ${componentName} component!`);
  console.log('');
  console.log('📁 Files created:');
  console.log(`   src/stories/${componentName}/${componentName}.ts`);
  console.log(`   src/stories/${componentName}/${componentName}.css`);
  console.log(`   src/stories/${componentName}/${componentName}.stories.ts`);
  console.log(`   src/stories/${componentName}/${componentName}.test.ts`);
  console.log(`   src/stories/${componentName}/README.md`);
  console.log('');
  console.log('🚀 Next steps:');
  console.log('   1. Import your component in the main stories directory');
  console.log('   2. Add component-specific styling and behavior');
  console.log('   3. Run Storybook to see your component: npm run storybook');
  console.log('   4. Run tests: npm test');
  console.log('');
  console.log('💡 Usage in HTML:');
  console.log(`   <ctt-${kebabName} label="Hello World" size="medium" variant="primary"></ctt-${kebabName}>`);

} catch (error) {
  console.error('❌ Error creating component files:', error);
  process.exit(1);
}