# CTT Web Components Information

## Summary
A web components library for CTT built using Lit and TypeScript. The library provides reusable UI components following the CTT design system, with Storybook integration for component documentation and testing.

## Structure
- **src/**: Main source code directory containing component implementations
  - **stories/**: Individual component directories with implementation, styles, tests, and stories
  - **styles/**: Design system tokens and global styles
- **scripts/**: Utility scripts including component scaffolding
- **.storybook/**: Storybook configuration
- **public/**: Static assets for the project

## Language & Runtime
**Language**: TypeScript
**Version**: TypeScript ~5.8.3
**Build System**: Vite 7.0.0
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- lit: ^3.3.0 (Web Components framework)

**Development Dependencies**:
- storybook: ^9.0.14 (Component documentation and testing)
- vitest: ^3.2.4 (Testing framework)
- vite: ^7.0.0 (Build tool)
- playwright: ^1.53.1 (Browser testing)
- typescript: ~5.8.3 (Type checking)

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Component Development
**Component Creation**:
```bash
# Create a new component
npm run create-component ComponentName
```

This generates:
- Component TypeScript implementation
- CSS file with design tokens
- Storybook stories
- Unit tests

## Testing
**Framework**: Vitest with Playwright for browser testing
**Test Location**: `src/stories/[ComponentName]/[ComponentName].test.ts`
**Naming Convention**: `*.test.ts`
**Run Command**:
```bash
# Run tests (via Storybook addon)
npm run storybook
```

## Storybook
**Configuration**: `.storybook/main.ts`
**Run Command**:
```bash
# Start Storybook development server
npm run storybook

# Build static Storybook site
npm run build-storybook
```

## Components
The library includes several UI components:
- Button
- Checkbox
- DropdownInput
- InputField
- RadioButton
- TextareaInput
- ToggleSwitch

Each component follows a consistent structure with:
- TypeScript implementation using Lit
- CSS styles using design tokens
- Storybook stories for documentation
- Unit tests for validation