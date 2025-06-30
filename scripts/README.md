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
├── Card.ts           # Component logic with Lit
├── card.css          # Component styles with CTT tokens
├── Card.stories.ts   # Storybook stories
├── Card.test.ts      # Vitest tests
└── README.md         # Component documentation
```

#### Generated Component Features

✅ **Lit-based component** with TypeScript  
✅ **CTT Design System tokens** integration  
✅ **Storybook stories** with all variants  
✅ **Comprehensive prop interface** with JSDoc  
✅ **CSS with accessibility** features  
✅ **Unit tests** with Vitest  
✅ **Component documentation**  
✅ **Responsive design** considerations  
✅ **Theme support** (size, variant props)  

#### Component Structure

Each generated component includes:

**TypeScript Component (`ComponentName.ts`)**
- Lit HTML templates
- Comprehensive prop interface
- Event handling
- Accessibility attributes
- CSS class management

**CSS Styles (`component-name.css`)**
- CTT Design System tokens
- Size variants (small, medium, large)
- Color variants (primary, secondary, tertiary)
- Disabled states
- Focus management
- High contrast support
- Reduced motion support

**Storybook Stories (`ComponentName.stories.ts`)**
- Default story
- All size variants
- All color variants
- Disabled state
- Custom content examples
- Combined showcase story

**Unit Tests (`ComponentName.test.ts`)**
- Basic rendering tests
- Prop validation tests
- Class application tests
- State handling tests

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

#### After Generation

1. **Review the generated files** and customize as needed
2. **Run Storybook** to see your component: `npm run storybook`
3. **Run tests** to ensure everything works: `npm test`
4. **Update the main export** if this component should be exported from the library
5. **Add any specific CTT Design System tokens** your component needs

#### Best Practices

- **Follow the existing Button component** as a reference for advanced patterns
- **Use semantic HTML** elements when appropriate
- **Include proper ARIA attributes** for accessibility
- **Test with keyboard navigation**
- **Verify high contrast mode** appearance
- **Document any custom design tokens** in the component CSS
- **Add comprehensive Storybook stories** for all use cases