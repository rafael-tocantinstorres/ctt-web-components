# ToasterAlert

A flexible notification component for the CTT Design System that supports both inline alerts and floating toaster notifications.

## Usage

```html
<!-- Basic Alert (inline) -->
<ctt-toaster-alert 
  type="alert"
  variant="info"
  headline="Information"
  message="This is an inline alert."
  visible="true">
</ctt-toaster-alert>

<!-- Toaster (fixed position) -->
<ctt-toaster-alert 
  type="toaster"
  variant="success"
  position="top"
  headline="Success!"
  message="Your action was completed successfully."
  visible="true"
  dismissable="true">
</ctt-toaster-alert>
```

```typescript
// Programmatic usage
const toaster = document.querySelector('ctt-toaster-alert');

// Show as alert
toaster.showToaster({
  type: 'alert',
  variant: 'warning',
  headline: 'Warning',
  message: 'Please review your input.',
  dismissable: true
});

// Show as toaster with auto-dismiss
toaster.showToaster({
  type: 'toaster',
  variant: 'success',
  position: 'top',
  headline: 'Saved!',
  message: 'Your changes have been saved.',
  dismissable: true,
  duration: 5 // Auto-dismiss after 5 seconds
});
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'alert' \| 'toaster'` | `'alert'` | Display type - alert (inline) or toaster (fixed position) |
| `variant` | `'info' \| 'warning' \| 'error' \| 'success'` | `'info'` | Visual variant for different message types |
| `position` | `'top' \| 'bottom'` | `'top'` | Position for toaster type (top-right or bottom-right) |
| `headline` | `string` | `''` | Main title text |
| `message` | `string` | `''` | Description or body text |
| `dismissable` | `boolean` | `false` | Whether to show a close button |
| `visible` | `boolean` | `false` | Whether the component is visible |

## Types

### Alert
- **Position**: Relative - can be placed anywhere in your layout
- **Width**: Responsive (100% with max-width)
- **Use case**: Form validation, page-level messages, embedded notifications

### Toaster
- **Position**: Fixed (top-right or bottom-right)
- **Width**: Fixed (320px, responsive on mobile)
- **Use case**: Success confirmations, temporary notifications, system messages
- **Animation**: Slides in from the right with fade effect

## Variants

- `info` - Informational messages (blue theme)
- `warning` - Warning messages (orange theme)
- `error` - Error messages (red theme)
- `success` - Success messages (green theme)

## Methods

### showToaster(params)

Programmatically show the toaster/alert with the specified parameters.

```typescript
showToaster({
  type?: 'alert' | 'toaster',        // Display type
  variant?: 'info' | 'warning' | 'error' | 'success', // Visual variant
  position?: 'top' | 'bottom',       // Position for toaster type
  headline?: string,                 // Title text
  message?: string,                  // Body text
  dismissable?: boolean,             // Show close button
  duration?: number,                 // Auto-dismiss duration in seconds
  showFunction?: () => void          // Callback when shown
})
```

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
