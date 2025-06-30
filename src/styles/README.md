# Design System

This directory contains the design system for the CTT Web Components library. The system is organized into separate CSS files for better maintainability and reusability.

## File Structure

```
src/styles/
├── index.css         # Main entry point that imports all styles
├── tokens.css        # Design tokens (colors, spacing, shadows, etc.)
├── typography.css    # Typography system (fonts, sizes, weights)
├── utilities.css     # Utility classes for common patterns
└── README.md         # This documentation file
```

## Usage

### In your main application
Import the complete design system:
```css
@import './src/styles/index.css';
```

### In Lit components
Use design tokens in your component styles:
```typescript
import { css } from 'lit';

static styles = css`
  :host {
    padding: var(--space-lg);
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
  }
  
  .title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--space-md);
  }
`;
```

### Using Typography Classes
Apply typography classes directly in your HTML:
```html
<h1 class="typography-h1">Main Heading</h1>
<p class="typography-body">Body text content</p>
<small class="typography-caption">Caption text</small>
```

### Using Utility Classes
Apply utility classes for quick styling:
```html
<div class="flex items-center space-md p-lg rounded shadow">
  <button class="bg-primary text-white p-md rounded-lg">
    Click me
  </button>
</div>
```

## Design Tokens

### Colors
- **Primary Colors**: `--color-primary-50` to `--color-primary-950`
- **Neutral Colors**: `--color-neutral-50` to `--color-neutral-950`
- **Semantic Colors**: `--color-text-primary`, `--color-bg-primary`, etc.
- **State Colors**: `--color-success-500`, `--color-warning-500`, `--color-error-500`

### Spacing
- **Space Scale**: `--space-xs` (4px) to `--space-6xl` (96px)
- Use consistent spacing throughout your components

### Typography
- **Font Families**: `--font-family-sans`, `--font-family-serif`, `--font-family-mono`
- **Font Sizes**: `--font-size-xs` (12px) to `--font-size-9xl` (128px)
- **Font Weights**: `--font-weight-light` (300) to `--font-weight-extrabold` (800)
- **Line Heights**: `--line-height-none` (1) to `--line-height-loose` (2)

### Border Radius
- **Radius Scale**: `--radius-none` to `--radius-full`

### Shadows
- **Shadow Scale**: `--shadow-sm` to `--shadow-2xl`

### Animation
- **Duration**: `--duration-fast` (150ms) to `--duration-slower` (500ms)
- **Easing**: `--easing-ease`, `--easing-ease-in-out`, etc.

## Dark Mode Support

The design system includes automatic dark mode support using:
1. `@media (prefers-color-scheme: dark)` for system preference
2. `.theme-dark` class for explicit dark mode control

To manually toggle dark mode:
```javascript
document.documentElement.classList.toggle('theme-dark');
```

## Customization

### Extending Colors
Add custom colors by extending the tokens:
```css
:root {
  --color-brand-500: #your-brand-color;
  --color-brand-600: #your-brand-color-darker;
}
```

### Custom Typography
Add custom typography styles:
```css
.typography-display {
  font-size: var(--font-size-6xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
}
```

## Best Practices

1. **Use Design Tokens**: Always use CSS custom properties instead of hardcoded values
2. **Consistent Spacing**: Use the predefined spacing scale
3. **Semantic Colors**: Use semantic color tokens (`--color-text-primary`) instead of base colors
4. **Typography Hierarchy**: Use the predefined typography classes for consistency
5. **Utility-First**: Prefer utility classes for common patterns
6. **Component-Specific Styles**: Keep complex component styles in the component files

## Development

When adding new tokens or utilities:
1. Add them to the appropriate CSS file
2. Update this documentation
3. Test with both light and dark themes
4. Ensure accessibility compliance

## Browser Support

This design system uses modern CSS features:
- CSS Custom Properties (CSS Variables)
- CSS Grid and Flexbox
- CSS `clamp()` function for responsive typography

Supported browsers: Chrome 88+, Firefox 89+, Safari 14+, Edge 88+