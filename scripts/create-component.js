#!/usr/bin/env node

/**
 * CTT Web Components - Component Scaffolding Script
 * 
 * This script generates a new component with all necessary files:
 * - Component TypeScript file with Lit
 * - Component CSS file with CTT design tokens
 * - Storybook stories file
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
const componentTs = `import { html } from 'lit';

import './${kebabName}.css';

export interface ${componentName}Props {
  /**
   * The content to display inside the component
   */
  children?: string;
  /**
   * Size variant of the component
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Color variant of the component
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: string;
}

/**
 * ${componentName} component for the CTT Design System
 */
export const ${componentName} = ({
  children = '',
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  ariaLabel = ''
}: ${componentName}Props) => {
  const classes = [
    'ctt-${kebabName}',
    \`ctt-\${kebabName}--\${size}\`,
    \`ctt-\${kebabName}--\${variant}\`,
    disabled && \`ctt-\${kebabName}--disabled\`,
    className
  ].filter(Boolean).join(' ');

  return html\`
    <div
      class=\${classes}
      ?disabled=\${disabled}
      aria-label=\${ariaLabel}
      @click=\${onClick}
    >
      <slot>\${children}</slot>
    </div>
  \`;
};
`;

// Generate CSS file
const componentCss = `/**
 * CTT ${componentName} Component - Styles for Production Use
 * Using CTT Design System tokens
 * 
 * Usage:
 * <div class="ctt-${kebabName} ctt-${kebabName}--primary ctt-${kebabName}--medium">Content</div>
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
  opacity: 0.5;
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

// Generate Storybook stories file
const storiesTs = `import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';

import type { ${componentName}Props } from './${componentName}';
import { ${componentName} } from './${componentName}';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/${componentName}',
  tags: ['autodocs'],
  render: (args) => ${componentName}(args),
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
    children: {
      control: 'text',
      description: 'The content to display inside the component',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<${componentName}Props>;

export default meta;
type Story = StoryObj<${componentName}Props>;

// Default story
export const Default: Story = {
  args: {
    children: '${componentName} Content',
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small ${componentName}',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium ${componentName}',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large ${componentName}',
  },
};

// Color variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary ${componentName}',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary ${componentName}',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary ${componentName}',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled ${componentName}',
  },
};

// Custom content
export const WithCustomContent: Story = {
  args: {
    children: '🚀 Custom Content with Emoji',
    variant: 'primary',
    size: 'large',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <span>Sizes:</span>
        \${${componentName}({ size: 'small', children: 'Small' })}
        \${${componentName}({ size: 'medium', children: 'Medium' })}
        \${${componentName}({ size: 'large', children: 'Large' })}
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span>Colors:</span>
        \${${componentName}({ variant: 'primary', children: 'Primary' })}
        \${${componentName}({ variant: 'secondary', children: 'Secondary' })}
        \${${componentName}({ variant: 'tertiary', children: 'Tertiary' })}
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span>States:</span>
        \${${componentName}({ children: 'Normal' })}
        \${${componentName}({ disabled: true, children: 'Disabled' })}
      </div>
    </div>
  \`,
};
`;

// Generate test file
const testTs = `import { describe, it, expect } from 'vitest';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('should render with default props', () => {
    const result = ${componentName}({});
    expect(result).toBeDefined();
  });

  it('should render with custom children', () => {
    const result = ${componentName}({ children: 'Test Content' });
    expect(result.strings[0]).toContain('Test Content');
  });

  it('should apply size classes correctly', () => {
    const smallResult = ${componentName}({ size: 'small' });
    expect(smallResult.strings[0]).toContain('ctt-${kebabName}--small');

    const largeResult = ${componentName}({ size: 'large' });
    expect(largeResult.strings[0]).toContain('ctt-${kebabName}--large');
  });

  it('should apply variant classes correctly', () => {
    const primaryResult = ${componentName}({ variant: 'primary' });
    expect(primaryResult.strings[0]).toContain('ctt-${kebabName}--primary');

    const secondaryResult = ${componentName}({ variant: 'secondary' });
    expect(secondaryResult.strings[0]).toContain('ctt-${kebabName}--secondary');
  });

  it('should handle disabled state', () => {
    const result = ${componentName}({ disabled: true });
    expect(result.strings[0]).toContain('ctt-${kebabName}--disabled');
  });

  it('should apply custom className', () => {
    const result = ${componentName}({ className: 'custom-class' });
    expect(result.strings[0]).toContain('custom-class');
  });
});
`;

// Generate README file
const readmeMd = `# ${componentName}

A ${componentName.toLowerCase()} component for the CTT Design System.

## Usage

\`\`\`typescript
import { ${componentName} } from '@ctt/design-system';

// Basic usage
${componentName}({ children: 'Hello World' });

// With variants
${componentName}({ 
  children: 'Click me',
  variant: 'primary',
  size: 'large'
});
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`children\` | \`string\` | \`''\` | The content to display inside the component |
| \`size\` | \`'small' \\| 'medium' \\| 'large'\` | \`'medium'\` | Size variant of the component |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'tertiary'\` | \`'primary'\` | Color variant of the component |
| \`disabled\` | \`boolean\` | \`false\` | Whether the component is disabled |
| \`onClick\` | \`() => void\` | \`undefined\` | Click handler |
| \`className\` | \`string\` | \`''\` | Custom CSS class |
| \`ariaLabel\` | \`string\` | \`''\` | Accessible label for screen readers |

## Variants

### Size
- \`small\` - Compact size for tight spaces
- \`medium\` - Default size for most use cases
- \`large\` - Prominent size for emphasis

### Color
- \`primary\` - Primary brand color
- \`secondary\` - Secondary styling with border
- \`tertiary\` - Minimal styling, text-only appearance

## Accessibility

- Supports keyboard navigation
- Includes proper ARIA labels
- Respects user preferences for reduced motion
- High contrast mode support

## Design Tokens

This component uses the following CTT Design System tokens:

- Colors: \`--ctt-core-color-*\`
- Typography: \`--ctt-core-font-*\`
- Spacing: \`--ctt-core-dimension-*\`
- Border radius: \`--ctt-base-border-radius-*\`

## Development

Run Storybook to see the component in action:

\`\`\`bash
npm run storybook
\`\`\`

Run tests:

\`\`\`bash
npm test
\`\`\`
`;

// Write all files
const files = [
  { path: path.join(componentDir, `${componentName}.ts`), content: componentTs },
  { path: path.join(componentDir, `${kebabName}.css`), content: componentCss },
  { path: path.join(componentDir, `${componentName}.stories.ts`), content: storiesTs },
  { path: path.join(componentDir, `${componentName}.test.ts`), content: testTs },
  { path: path.join(componentDir, 'README.md'), content: readmeMd },
];

try {
  files.forEach(({ path: filePath, content }) => {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created ${path.relative(projectRoot, filePath)}`);
  });

  console.log(`\n🎉 Successfully created ${componentName} component!`);
  console.log(`\nFiles created:`);
  console.log(`  📁 src/stories/${componentName}/`);
  console.log(`  ├── ${componentName}.ts`);
  console.log(`  ├── ${kebabName}.css`);
  console.log(`  ├── ${componentName}.stories.ts`);
  console.log(`  ├── ${componentName}.test.ts`);
  console.log(`  └── README.md`);
  
  console.log(`\nNext steps:`);
  console.log(`  1. Review and customize the generated files`);
  console.log(`  2. Run 'npm run storybook' to see your component`);
  console.log(`  3. Run 'npm test' to verify tests pass`);
  console.log(`  4. Add your component to the main export index if needed`);
  
} catch (error) {
  console.error('❌ Error creating component:', error.message);
  process.exit(1);
}