# CTT Web Components - Development Scripts

This directory contains development scripts to help with component creation and maintenance.

## Component Scaffolding

### create-component.js

Creates a new component with all necessary files following the CTT Design System patterns.

#### Usage

```bash
# Using npm script (recommended)
npm run create-component ComponentName

# Or directly with Node.js
node scripts/create-component.js ComponentName
```

#### Example

```bash
npm run create-component Card
```

This will create:
```
src/stories/Card/
├── Card.ts           # Lit Web Component with TypeScript
├── Card.css          # Component styles with CTT tokens
├── Card.stories.ts   # Storybook stories (consistent pattern)
├── Card.test.ts      # Vitest tests with @open-wc/testing
└── README.md         # Component documentation
```

#### Generated Component Features

✅ **Lit Web Component** with TypeScript & decorators  
✅ **CTT Design System tokens** integration  
✅ **Consistent Storybook stories** following established pattern  
✅ **Custom element registration** (`@customElement`)  
✅ **Reactive properties** with `@property` decorators  
✅ **CSS with accessibility** features  
✅ **Comprehensive unit tests** with @open-wc/testing  
✅ **Component documentation**  
✅ **Responsive design** considerations  
✅ **Theme support** (size, variant props)  
✅ **Event handling** with custom events  
✅ **Keyboard navigation** support  
✅ **Shadow DOM** encapsulation  

#### Component Structure

Each generated component includes:

**Lit Web Component (`ComponentName.ts`)**
- Lit HTML templates with Shadow DOM
- Custom element registration (`@customElement`)
- Reactive properties with `@property` decorators
- Event handling with custom events
- Accessibility attributes and keyboard navigation
- CSS class management and styling

**CSS Styles (`ComponentName.css`)**
- CTT Design System tokens
- Size variants (small, medium, large)
- Color variants (primary, secondary, tertiary)
- Disabled states
- Focus management
- High contrast support
- Reduced motion support

**Storybook Stories (`ComponentName.stories.ts`)**
- Consistent pattern following DropdownInput example
- Default story with documentation
- All size variants
- All color variants
- Disabled state
- Interactive examples
- AllVariants showcase with decorators
- Proper argTypes with descriptions
- Layout and parameters configuration

**Unit Tests (`ComponentName.test.ts`)**
- @open-wc/testing framework
- Shadow DOM testing
- Reactive property tests
- Event dispatching tests
- Keyboard navigation tests
- Accessibility tests

**Documentation (`README.md`)**
- Usage examples
- Props table
- Variant descriptions
- Accessibility notes
- Design token references

#### Naming Conventions

- Component names should be **PascalCase** (e.g., `MyComponent`)
- CSS classes use **kebab-case** with `ctt-` prefix (e.g., `ctt-my-component`)
- File names follow the component name pattern

#### CTT Design System Integration

Generated components automatically include:

- **Color tokens**: `--ctt-core-color-*`
- **Typography tokens**: `--ctt-core-font-*`
- **Spacing tokens**: `--ctt-core-dimension-*`
- **Border radius tokens**: `--ctt-base-border-radius-*`
- **Semantic color meanings**
- **Consistent component architecture**

#### Usage Example

After generating a component called `Card`, you can use it in HTML:

```html
<!-- Basic usage -->
<ctt-card label="Hello World"></ctt-card>

<!-- With variants -->
<ctt-card 
  label="Submit" 
  variant="primary" 
  size="large">
</ctt-card>

<!-- With event handling -->
<ctt-card 
  label="Click me" 
  @click="handleClick">
</ctt-card>
```

And in TypeScript:

```typescript
import './stories/Card/Card';

// Component is automatically registered as 'ctt-card'
const card = document.createElement('ctt-card');
card.label = 'Dynamic Card';
card.variant = 'secondary';
card.addEventListener('click', (e) => {
  console.log('Card clicked:', e.detail);
});
```

#### After Generation

1. **Review the generated files** and customize as needed
2. **Run Storybook** to see your component: `npm run storybook`
3. **Run tests** to ensure everything works: `npm test`
4. **Import the component** in your application
5. **Add any specific CTT Design System tokens** your component needs

#### Best Practices

- **Follow the existing Button component** as a reference for advanced patterns
- **Use semantic HTML** elements when appropriate
- **Include proper ARIA attributes** for accessibility
- **Test with keyboard navigation**
- **Verify high contrast mode** appearance
- **Document any custom design tokens** in the component CSS
- **Add comprehensive Storybook stories** for all use cases