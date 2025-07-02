import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import styles to use them in stories
import '../../styles/colors.css';
import '../../styles/tokens.css';

const meta: Meta = {
  title: 'Design System/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Color System

The CTT Design System provides a comprehensive color palette with utility classes for backgrounds, text, and borders.

## Usage

Color utility classes follow these patterns:
- **Background**: \`ctt-bg-{color}\`
- **Text**: \`ctt-text-{color}\`
- **Border**: \`ctt-border-{color}\`

### Examples:
\`\`\`html
<div class="ctt-bg-primary ctt-text-white">Primary background with white text</div>
<p class="ctt-text-secondary">Secondary text color</p>
<div class="ctt-border-neutral-300">Element with neutral border</div>
\`\`\`

## Color Tokens

All colors use CSS custom properties (design tokens) organized in layers:
- **Brand colors**: Raw color values (primitives)
- **Core colors**: Semantic color assignments
- **Base colors**: Application-specific colors
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper component for color swatch
const ColorSwatch = (name: string, className: string, token: string, description?: string) => html`
  <div style="display: flex; align-items: center; gap: 12px; padding: 8px; border: 1px solid #e0e0e0; border-radius: 6px;">
    <div class="${className}" style="width: 48px; height: 48px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.1); flex-shrink: 0;"></div>
    <div>
      <div style="font-weight: 600; font-size: 14px; margin-bottom: 2px;">${name}</div>
      <div style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 2px;">${className}</div>
      <div style="font-family: monospace; font-size: 11px; color: #888;">${token}</div>
      ${description ? html`<div style="font-size: 12px; color: #666; margin-top: 4px;">${description}</div>` : ''}
    </div>
  </div>
`;

export const PrimaryColors: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Primary Colors</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
        ${ColorSwatch('Primary', 'ctt-bg-primary', 'var(--ctt-core-color-primary-main)', 'Main primary color for key UI elements')}
        ${ColorSwatch('Primary Light', 'ctt-bg-primary-light', 'var(--ctt-core-color-primary-light)', 'Lighter shade for hover states')}
        ${ColorSwatch('Primary Dark', 'ctt-bg-primary-dark', 'var(--ctt-core-color-primary-dark)', 'Darker shade for pressed states')}
      </div>
    </div>
  `,
};

export const SecondaryColors: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Secondary Colors</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
        ${ColorSwatch('Secondary', 'ctt-bg-secondary', 'var(--ctt-core-color-secondary-main)', 'Secondary brand color')}
        ${ColorSwatch('Secondary Light', 'ctt-bg-secondary-light', 'var(--ctt-core-color-secondary-light)', 'Lighter secondary shade')}
        ${ColorSwatch('Secondary Dark', 'ctt-bg-secondary-dark', 'var(--ctt-core-color-secondary-dark)', 'Darker secondary shade')}
      </div>
    </div>
  `,
};

export const NeutralColors: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Neutral Colors</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
        ${ColorSwatch('White / Neutral 100', 'ctt-bg-white', 'var(--ctt-core-color-neutral-100)', 'Pure white, lightest neutral')}
        ${ColorSwatch('Neutral 200', 'ctt-bg-neutral-200', 'var(--ctt-core-color-neutral-200)', 'Very light gray')}
        ${ColorSwatch('Neutral 300', 'ctt-bg-neutral-300', 'var(--ctt-core-color-neutral-300)', 'Light gray for borders')}
        ${ColorSwatch('Neutral 400', 'ctt-bg-neutral-400', 'var(--ctt-core-color-neutral-400)', 'Medium light gray')}
        ${ColorSwatch('Neutral 500', 'ctt-bg-neutral-500', 'var(--ctt-core-color-neutral-500)', 'Medium gray')}
        ${ColorSwatch('Neutral 600', 'ctt-bg-neutral-600', 'var(--ctt-core-color-neutral-600)', 'Medium dark gray')}
        ${ColorSwatch('Neutral 700', 'ctt-bg-neutral-700', 'var(--ctt-core-color-neutral-700)', 'Dark gray')}
        ${ColorSwatch('Neutral 800', 'ctt-bg-neutral-800', 'var(--ctt-core-color-neutral-800)', 'Very dark gray')}
        ${ColorSwatch('Black / Neutral 900', 'ctt-bg-black', 'var(--ctt-core-color-neutral-900)', 'Pure black, darkest neutral')}
      </div>
    </div>
  `,
};

export const BrandPrimary: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Brand Primary Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        ${ColorSwatch('Primary 100', 'ctt-bg-brand-primary-100', 'var(--ctt-brand-primary-100)', 'Lightest primary shade')}
        ${ColorSwatch('Primary 200', 'ctt-bg-brand-primary-200', 'var(--ctt-brand-primary-200)', 'Light primary shade')}
        ${ColorSwatch('Primary 300', 'ctt-bg-brand-primary-300', 'var(--ctt-brand-primary-300)', 'Medium light primary')}
        ${ColorSwatch('Primary 400', 'ctt-bg-brand-primary-400', 'var(--ctt-brand-primary-400)', 'Medium primary')}
        ${ColorSwatch('Primary 500', 'ctt-bg-brand-primary-500', 'var(--ctt-brand-primary-500)', 'Main primary color')}
        ${ColorSwatch('Primary 600', 'ctt-bg-brand-primary-600', 'var(--ctt-brand-primary-600)', 'Dark primary')}
        ${ColorSwatch('Primary 700', 'ctt-bg-brand-primary-700', 'var(--ctt-brand-primary-700)', 'Darkest primary shade')}
      </div>
    </div>
  `,
};

export const BrandSecondary: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Brand Secondary Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        ${ColorSwatch('Secondary 100', 'ctt-bg-brand-secondary-100', 'var(--ctt-brand-secondary-100)', 'Lightest secondary')}
        ${ColorSwatch('Secondary 200', 'ctt-bg-brand-secondary-200', 'var(--ctt-brand-secondary-200)', 'Light secondary')}
        ${ColorSwatch('Secondary 300', 'ctt-bg-brand-secondary-300', 'var(--ctt-brand-secondary-300)', 'Medium light secondary')}
        ${ColorSwatch('Secondary 400', 'ctt-bg-brand-secondary-400', 'var(--ctt-brand-secondary-400)', 'Medium secondary')}
        ${ColorSwatch('Secondary 500', 'ctt-bg-brand-secondary-500', 'var(--ctt-brand-secondary-500)', 'Main secondary color')}
      </div>
    </div>
  `,
};

export const BrandColors: Story = {
  render: () => html`
    <div style="max-width: 1200px; padding: 24px;">
      <h2 style="margin-bottom: 32px; color: #333;">Brand Color Scales</h2>
      
      <section style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px; color: #333;">Teal Scale</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;">
          ${ColorSwatch('Teal 100', 'ctt-bg-brand-teal-100', 'var(--ctt-brand-teal-100)')}
          ${ColorSwatch('Teal 200', 'ctt-bg-brand-teal-200', 'var(--ctt-brand-teal-200)')}
          ${ColorSwatch('Teal 300', 'ctt-bg-brand-teal-300', 'var(--ctt-brand-teal-300)')}
          ${ColorSwatch('Teal 400', 'ctt-bg-brand-teal-400', 'var(--ctt-brand-teal-400)')}
          ${ColorSwatch('Teal 500', 'ctt-bg-brand-teal-500', 'var(--ctt-brand-teal-500)')}
          ${ColorSwatch('Teal 600', 'ctt-bg-brand-teal-600', 'var(--ctt-brand-teal-600)')}
        </div>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px; color: #333;">Green Scale</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;">
          ${ColorSwatch('Green 100', 'ctt-bg-brand-green-100', 'var(--ctt-brand-green-100)')}
          ${ColorSwatch('Green 200', 'ctt-bg-brand-green-200', 'var(--ctt-brand-green-200)')}
          ${ColorSwatch('Green 300', 'ctt-bg-brand-green-300', 'var(--ctt-brand-green-300)')}
          ${ColorSwatch('Green 400', 'ctt-bg-brand-green-400', 'var(--ctt-brand-green-400)')}
          ${ColorSwatch('Green 500', 'ctt-bg-brand-green-500', 'var(--ctt-brand-green-500)')}
          ${ColorSwatch('Green 600', 'ctt-bg-brand-green-600', 'var(--ctt-brand-green-600)')}
        </div>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px; color: #333;">Yellow Scale</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;">
          ${ColorSwatch('Yellow 100', 'ctt-bg-brand-yellow-100', 'var(--ctt-brand-yellow-100)')}
          ${ColorSwatch('Yellow 200', 'ctt-bg-brand-yellow-200', 'var(--ctt-brand-yellow-200)')}
          ${ColorSwatch('Yellow 300', 'ctt-bg-brand-yellow-300', 'var(--ctt-brand-yellow-300)')}
          ${ColorSwatch('Yellow 400', 'ctt-bg-brand-yellow-400', 'var(--ctt-brand-yellow-400)')}
          ${ColorSwatch('Yellow 500', 'ctt-bg-brand-yellow-500', 'var(--ctt-brand-yellow-500)')}
          ${ColorSwatch('Yellow 600', 'ctt-bg-brand-yellow-600', 'var(--ctt-brand-yellow-600)')}
        </div>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px; color: #333;">Purple Scale</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;">
          ${ColorSwatch('Purple 100', 'ctt-bg-brand-purple-100', 'var(--ctt-brand-purple-100)')}
          ${ColorSwatch('Purple 200', 'ctt-bg-brand-purple-200', 'var(--ctt-brand-purple-200)')}
          ${ColorSwatch('Purple 300', 'ctt-bg-brand-purple-300', 'var(--ctt-brand-purple-300)')}
          ${ColorSwatch('Purple 400', 'ctt-bg-brand-purple-400', 'var(--ctt-brand-purple-400)')}
          ${ColorSwatch('Purple 500', 'ctt-bg-brand-purple-500', 'var(--ctt-brand-purple-500)')}
          ${ColorSwatch('Purple 600', 'ctt-bg-brand-purple-600', 'var(--ctt-brand-purple-600)')}
        </div>
      </section>
    </div>
  `,
};

export const StatusColors: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Status Colors</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        ${ColorSwatch('Success', 'ctt-bg-success', 'var(--ctt-core-color-success-main)', 'For positive feedback and success states')}
        ${ColorSwatch('Success Light', 'ctt-bg-success-light', 'var(--ctt-core-color-success-light)', 'Light success background')}
        ${ColorSwatch('Warning', 'ctt-bg-warning', 'var(--ctt-core-color-warning-main)', 'For caution and warning states')}
        ${ColorSwatch('Warning Light', 'ctt-bg-warning-light', 'var(--ctt-core-color-warning-light)', 'Light warning background')}
        ${ColorSwatch('Error', 'ctt-bg-error', 'var(--ctt-core-color-negative-main)', 'For errors and destructive actions')}
        ${ColorSwatch('Error Light', 'ctt-bg-error-light', 'var(--ctt-core-color-negative-light)', 'Light error background')}
        ${ColorSwatch('Info', 'ctt-bg-info', 'var(--ctt-core-color-informative-main)', 'For information and neutral feedback')}
        ${ColorSwatch('Info Light', 'ctt-bg-info-light', 'var(--ctt-core-color-informative-light)', 'Light info background')}
        ${ColorSwatch('New', 'ctt-bg-new', 'var(--ctt-core-color-new-main)', 'For highlighting new features')}
        ${ColorSwatch('New Light', 'ctt-bg-new-light', 'var(--ctt-core-color-new-light)', 'Light new feature background')}
      </div>
    </div>
  `,
};

export const TextColors: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Text Color Utilities</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="margin-bottom: 12px;">Primary Text Colors</h3>
          <div class="ctt-text-primary" style="margin-bottom: 8px;">ctt-text-primary - Primary text color</div>
          <div class="ctt-text-primary-light" style="margin-bottom: 8px;">ctt-text-primary-light - Light primary text</div>
          <div class="ctt-text-primary-dark" style="margin-bottom: 8px;">ctt-text-primary-dark - Dark primary text</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="margin-bottom: 12px;">Semantic Text Colors</h3>
          <div class="ctt-text-body" style="margin-bottom: 8px;">ctt-text-body - Standard body text color</div>
          <div class="ctt-text-muted" style="margin-bottom: 8px;">ctt-text-muted - Muted secondary text</div>
          <div class="ctt-text-subtle" style="margin-bottom: 8px;">ctt-text-subtle - Subtle tertiary text</div>
          <div class="ctt-text-brand" style="margin-bottom: 8px;">ctt-text-brand - Brand accent text</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="margin-bottom: 12px;">Status Text Colors</h3>
          <div class="ctt-text-success" style="margin-bottom: 8px;">ctt-text-success - Success message text</div>
          <div class="ctt-text-warning" style="margin-bottom: 8px;">ctt-text-warning - Warning message text</div>
          <div class="ctt-text-error" style="margin-bottom: 8px;">ctt-text-error - Error message text</div>
          <div class="ctt-text-info" style="margin-bottom: 8px;">ctt-text-info - Information message text</div>
          <div class="ctt-text-new" style="margin-bottom: 8px;">ctt-text-new - New feature text</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="margin-bottom: 12px;">Neutral Text Colors</h3>
          <div class="ctt-text-white" style="margin-bottom: 8px; background: #333; padding: 8px; border-radius: 4px;">ctt-text-white - White text (shown on dark background)</div>
          <div class="ctt-text-neutral-700" style="margin-bottom: 8px;">ctt-text-neutral-700 - Dark neutral text</div>
          <div class="ctt-text-neutral-500" style="margin-bottom: 8px;">ctt-text-neutral-500 - Medium neutral text</div>
          <div class="ctt-text-neutral-300" style="margin-bottom: 8px;">ctt-text-neutral-300 - Light neutral text</div>
        </div>
      </div>
    </div>
  `,
};

export const BorderColors: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Border Color Utilities</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
        <div style="padding: 16px; border: 2px solid transparent;" class="ctt-border-primary">
          <strong>ctt-border-primary</strong><br>
          Primary border color
        </div>
        <div style="padding: 16px; border: 2px solid transparent;" class="ctt-border-secondary">
          <strong>ctt-border-secondary</strong><br>
          Secondary border color
        </div>
        <div style="padding: 16px; border: 2px solid transparent;" class="ctt-border-neutral-300">
          <strong>ctt-border-neutral-300</strong><br>
          Light neutral border
        </div>
        <div style="padding: 16px; border: 2px solid transparent;" class="ctt-border-neutral-500">
          <strong>ctt-border-neutral-500</strong><br>
          Medium neutral border
        </div>
        <div style="padding: 16px; border: 2px solid transparent;" class="ctt-border-neutral-700">
          <strong>ctt-border-neutral-700</strong><br>
          Dark neutral border
        </div>
        <div style="padding: 16px; border: 2px solid transparent;" class="ctt-border-brand-primary-500">
          <strong>ctt-border-brand-primary-500</strong><br>
          Brand primary border
        </div>
      </div>
    </div>
  `,
};

export const PageBackgrounds: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Page Background Colors</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 16px;">
        <div class="ctt-bg-page" style="padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; min-height: 120px;">
          <strong>ctt-bg-page</strong><br>
          <span style="font-family: monospace; font-size: 12px; color: #666;">var(--ctt-base-color-page-bg-default)</span><br>
          Default page background color
        </div>
        <div class="ctt-bg-page-cloudy" style="padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; min-height: 120px;">
          <strong>ctt-bg-page-cloudy</strong><br>
          <span style="font-family: monospace; font-size: 12px; color: #666;">var(--ctt-base-color-page-bg-cloudy)</span><br>
          Cloudy page background for alternate sections
        </div>
      </div>
    </div>
  `,
};

export const ColorUsageExamples: Story = {
  render: () => html`
    <div style="max-width: 900px; padding: 24px;">
      <h2 style="margin-bottom: 32px; color: #333;">Color Usage Examples</h2>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px;">Cards with Different Color Schemes</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
          <div class="ctt-bg-primary ctt-text-white" style="padding: 20px; border-radius: 8px;">
            <h4 style="margin: 0 0 8px 0;">Primary Card</h4>
            <p style="margin: 0; opacity: 0.9;">Important content with primary background and white text.</p>
          </div>
          
          <div class="ctt-bg-success-light ctt-text-success" style="padding: 20px; border-radius: 8px;">
            <h4 style="margin: 0 0 8px 0;">Success Card</h4>
            <p style="margin: 0;">Success message with light background and success text color.</p>
          </div>
          
          <div class="ctt-bg-warning-light ctt-text-warning" style="padding: 20px; border-radius: 8px;">
            <h4 style="margin: 0 0 8px 0;">Warning Card</h4>
            <p style="margin: 0;">Warning message with appropriate color scheme.</p>
          </div>
          
          <div class="ctt-bg-neutral-100 ctt-text-neutral-800 ctt-border-neutral-300" style="padding: 20px; border-radius: 8px; border: 1px solid;">
            <h4 style="margin: 0 0 8px 0;">Neutral Card</h4>
            <p style="margin: 0;">Neutral content with subtle styling.</p>
          </div>
        </div>
      </section>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px;">Status Messages</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="ctt-bg-success-light ctt-text-success ctt-border-brand-green-400" style="padding: 12px 16px; border-radius: 6px; border-left: 4px solid;">
            ✅ <strong>Success:</strong> Your changes have been saved successfully.
          </div>
          
          <div class="ctt-bg-warning-light ctt-text-warning ctt-border-brand-yellow-500" style="padding: 12px 16px; border-radius: 6px; border-left: 4px solid;">
            ⚠️ <strong>Warning:</strong> Please review your input before proceeding.
          </div>
          
          <div class="ctt-bg-error-light ctt-text-error ctt-border-brand-primary-500" style="padding: 12px 16px; border-radius: 6px; border-left: 4px solid;">
            ❌ <strong>Error:</strong> Unable to process your request. Please try again.
          </div>
          
          <div class="ctt-bg-info-light ctt-text-info ctt-border-brand-teal-400" style="padding: 12px 16px; border-radius: 6px; border-left: 4px solid;">
            ℹ️ <strong>Info:</strong> Here's some helpful information for you.
          </div>
        </div>
      </section>
      
      <section>
        <h3 style="margin-bottom: 16px;">Text Hierarchy</h3>
        <div class="ctt-bg-white" style="padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h1 class="ctt-text-primary" style="margin: 0 0 16px 0;">Primary Heading</h1>
          <p class="ctt-text-body" style="margin: 0 0 12px 0;">
            This is the main body text using the standard text color for optimal readability.
          </p>
          <p class="ctt-text-muted" style="margin: 0 0 12px 0;">
            This is secondary text with a muted color for less important information.
          </p>
          <p class="ctt-text-subtle" style="margin: 0 0 16px 0;">
            This is subtle text for tertiary information like timestamps or metadata.
          </p>
          <a href="#" class="ctt-text-brand ctt-underline">Brand colored link</a>
        </div>
      </section>
    </div>
  `,
};