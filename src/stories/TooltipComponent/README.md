# TooltipComponent

A tooltipcomponent component for the CTT Design System.

## Usage

```typescript
import { TooltipComponent } from '@ctt/design-system';

// Basic usage
TooltipComponent({ children: 'Hello World' });

// With variants
TooltipComponent({ 
  children: 'Click me',
  variant: 'primary',
  size: 'large'
});
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | `''` | The content to display inside the component |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant of the component |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Color variant of the component |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `onClick` | `() => void` | `undefined` | Click handler |
| `className` | `string` | `''` | Custom CSS class |
| `ariaLabel` | `string` | `''` | Accessible label for screen readers |

## Variants

### Size
- `small` - Compact size for tight spaces
- `medium` - Default size for most use cases
- `large` - Prominent size for emphasis

### Color
- `primary` - Primary brand color
- `secondary` - Secondary styling with border
- `tertiary` - Minimal styling, text-only appearance

## Accessibility

- Supports keyboard navigation
- Includes proper ARIA labels
- Respects user preferences for reduced motion
- High contrast mode support

## Design Tokens

This component uses the following CTT Design System tokens:

- Colors: `--ctt-core-color-*`
- Typography: `--ctt-core-font-*`
- Spacing: `--ctt-core-dimension-*`
- Border radius: `--ctt-base-border-radius-*`

## Development

Run Storybook to see the component in action:

```bash
npm run storybook
```

Run tests:

```bash
npm test
```
