# Breadcrumbs

A navigation breadcrumbs web component for the CTT Design System.

## Overview

The Breadcrumbs component shows the user's current location in a hierarchical structure and provides easy navigation back to parent pages. Breadcrumbs are separated by "/" and follow CTT design system specifications.

## Usage

```html
<!-- Basic usage -->
<ctt-breadcrumbs .items="${breadcrumbItems}"></ctt-breadcrumbs>

<!-- With custom aria label -->
<ctt-breadcrumbs 
  .items="${breadcrumbItems}"
  aria-label="Product navigation">
</ctt-breadcrumbs>

<!-- With navigation event handling -->
<ctt-breadcrumbs 
  .items="${breadcrumbItems}"
  @navigate="${handleNavigation}">
</ctt-breadcrumbs>
```

## Properties

| Property | Type | Default | Description |
|---------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | `[]` | Array of breadcrumb items to display |
| `ariaLabel` | `string` | `'Breadcrumb navigation'` | Accessible label for screen readers |

## BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  label: string;                    // The text label for the breadcrumb
  state: 'default' | 'active';     // Item state
  navigate?: () => void;            // Navigation function (optional)
}
```

## Events

| Event | Description | Detail |
|-------|-------------|--------|
| `navigate` | Dispatched when a breadcrumb item is clicked | `{ item: BreadcrumbItem }` |

## CSS Custom Properties

| Property | Description | Default |
|----------|-------------|---------|
| `--ctt-breadcrumbs-color-default` | Default text color | `#333333` |
| `--ctt-breadcrumbs-color-active` | Active text color | `#DF0024` |
| `--ctt-breadcrumbs-color-hover` | Hover text color | `#C7001E` |
| `--ctt-breadcrumbs-gap` | Gap between items | `4px` |

## CSS Parts

| Part | Description |
|------|-------------|
| `component` | The main component wrapper |
| `item` | Individual breadcrumb item |
| `separator` | The separator between items |

## States

### Default State
- Clickable breadcrumb items
- Color: `#333333`
- Hover color: `#C7001E`
- Triggers navigation when clicked

### Active State
- Current page breadcrumb item
- Color: `#DF0024`
- Not clickable
- Marked with `aria-current="page"`

## Accessibility

- Semantic HTML structure using `<nav>` and `<ol>`
- Proper ARIA labeling with `role="navigation"`
- Current page marked with `aria-current="page"`
- Keyboard navigation support (Enter and Space keys)
- Focus management with proper focus indicators
- Screen reader support
- High contrast mode support
- Respects reduced motion preferences

## Examples

### Basic Breadcrumbs

```typescript
const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', state: 'default', navigate: () => router.push('/') },
  { label: 'Products', state: 'default', navigate: () => router.push('/products') },
  { label: 'Electronics', state: 'default', navigate: () => router.push('/products/electronics') },
  { label: 'Smartphones', state: 'active' }
];
```

```html
<ctt-breadcrumbs .items="${breadcrumbItems}"></ctt-breadcrumbs>
```

### With Navigation Handling

```typescript
function handleNavigation(event: CustomEvent) {
  const item = event.detail.item;
  console.log('Navigating to:', item.label);
  // Handle navigation logic
}
```

```html
<ctt-breadcrumbs 
  .items="${breadcrumbItems}"
  @navigate="${handleNavigation}">
</ctt-breadcrumbs>
```

### Simple Two-Level Breadcrumbs

```typescript
const simpleBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', state: 'default', navigate: () => router.push('/') },
  { label: 'Current Page', state: 'active' }
];
```

### Single Item (Current Page Only)

```typescript
const singleItem: BreadcrumbItem[] = [
  { label: 'Current Page', state: 'active' }
];
```

## Color Specifications

The component uses specific colors as defined in the requirements:

- **Default Color**: `#333333` - Used for clickable breadcrumb items
- **Active Color**: `#DF0024` - Used for the current page (active state)
- **Hover Color**: `#C7001E` - Used when hovering over clickable items

## Spacing

- **Gap**: `4px` (using `var(--ctt-core-dimension-25)`) - Space between breadcrumb items and separators, following `base/space/selectable/inside/xs` specification

## Integration with Routing

The component is designed to work with any routing system:

```typescript
// With React Router
const breadcrumbItems: BreadcrumbItem[] = [
  { 
    label: 'Home', 
    state: 'default', 
    navigate: () => navigate('/') 
  },
  { 
    label: 'Products', 
    state: 'default', 
    navigate: () => navigate('/products') 
  },
  { label: 'Current Product', state: 'active' }
];

// With custom routing
const breadcrumbItems: BreadcrumbItem[] = [
  { 
    label: 'Dashboard', 
    state: 'default', 
    navigate: () => window.location.href = '/dashboard' 
  },
  { label: 'Current Page', state: 'active' }
];
```
