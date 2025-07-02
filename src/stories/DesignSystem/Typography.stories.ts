import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import styles to use them in stories
import '../../styles/typography.css';
import '../../styles/tokens.css';

const meta: Meta = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Typography System

The CTT Design System provides a comprehensive typography system with utility classes for different text styles, weights, and alignments.

## Usage

Typography utility classes follow the pattern \`ctt-{category}-{size}\` where:
- **category**: body, title, display, label
- **size**: s, m, l, xl (varies by category)

### Examples:
\`\`\`html
<h1 class="ctt-title-xl">Large Title</h1>
<p class="ctt-body-m">Medium body text</p>
<span class="ctt-label-s">Small label</span>
\`\`\`

## Typography Tokens

All typography styles use CSS custom properties (design tokens) for consistent theming:
- Font families: \`--ctt-base-font-family-{type}\`
- Font sizes: \`--ctt-base-font-size-{type}-{size}\`
- Font weights: \`--ctt-base-font-weight-{type}\`
- Line heights: \`--ctt-core-line-height-{size}\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const BodyText: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Body Typography</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-s">
            <strong>ctt-body-s</strong> - Small body text. Perfect for secondary information, captions, and smaller content that still needs to be readable.
          </div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-body) | Size: var(--ctt-base-font-size-body-s) | Weight: var(--ctt-base-font-weight-body) | Line Height: var(--ctt-core-line-height-l)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m">
            <strong>ctt-body-m</strong> - Medium body text. This is the standard body text size for most content, articles, and general reading material.
          </div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-body) | Size: var(--ctt-base-font-size-body-m) | Weight: var(--ctt-base-font-weight-body) | Line Height: var(--ctt-core-line-height-l)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-l">
            <strong>ctt-body-l</strong> - Large body text. Use for important content that needs more emphasis or for better readability in specific contexts.
          </div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-body) | Size: var(--ctt-base-font-size-body-l) | Weight: var(--ctt-base-font-weight-body) | Line Height: var(--ctt-core-line-height-l)
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Titles: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Title Typography</h2>
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-title-s">ctt-title-s - Small Title</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-title) | Size: var(--ctt-base-font-size-title-s) | Weight: var(--ctt-base-font-weight-title-s-m) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-title-m">ctt-title-m - Medium Title</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-title) | Size: var(--ctt-base-font-size-title-m) | Weight: var(--ctt-base-font-weight-title-s-m) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-title-l">ctt-title-l - Large Title</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-title) | Size: var(--ctt-base-font-size-title-l) | Weight: var(--ctt-base-font-weight-title-l-xl) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-title-xl">ctt-title-xl - Extra Large Title</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-title) | Size: var(--ctt-base-font-size-title-xl) | Weight: var(--ctt-base-font-weight-title-l-xl) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Display: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Display Typography</h2>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-display-s">ctt-display-s - Small Display</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-display) | Size: var(--ctt-base-font-size-display-s) | Weight: var(--ctt-base-font-weight-display) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-display-m">ctt-display-m - Medium Display</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-display) | Size: var(--ctt-base-font-size-display-m) | Weight: var(--ctt-base-font-weight-display) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-display-l">ctt-display-l - Large Display</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-display) | Size: var(--ctt-base-font-size-display-l) | Weight: var(--ctt-base-font-weight-display) | Line Height: var(--ctt-core-line-height-s)
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Labels: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Label Typography</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-label-s">ctt-label-s - Small Label</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-label) | Size: var(--ctt-base-font-size-label-s) | Weight: var(--ctt-base-font-weight-label) | Line Height: var(--ctt-core-line-height-xs)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-label-m">ctt-label-m - Medium Label</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-label) | Size: var(--ctt-base-font-size-label-m) | Weight: var(--ctt-base-font-weight-label) | Line Height: var(--ctt-core-line-height-xs)
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-label-l">ctt-label-l - Large Label</div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Font: var(--ctt-base-font-family-label) | Size: var(--ctt-base-font-size-label-l) | Weight: var(--ctt-base-font-weight-label) | Line Height: var(--ctt-core-line-height-xs)
          </div>
        </div>
      </div>
    </div>
  `,
};

export const FontWeights: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Font Weight Utilities</h2>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-font-thin">ctt-font-thin - The quick brown fox jumps over the lazy dog</div>
          <div style="margin-top: 4px; font-size: 12px; color: #666;">Weight: var(--ctt-core-font-weight-250)</div>
        </div>
        
        <div style="padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-font-light">ctt-font-light - The quick brown fox jumps over the lazy dog</div>
          <div style="margin-top: 4px; font-size: 12px; color: #666;">Weight: var(--ctt-core-font-weight-300)</div>
        </div>
        
        <div style="padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-font-normal">ctt-font-normal - The quick brown fox jumps over the lazy dog</div>
          <div style="margin-top: 4px; font-size: 12px; color: #666;">Weight: var(--ctt-core-font-weight-400)</div>
        </div>
        
        <div style="padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-font-medium">ctt-font-medium - The quick brown fox jumps over the lazy dog</div>
          <div style="margin-top: 4px; font-size: 12px; color: #666;">Weight: var(--ctt-core-font-weight-500)</div>
        </div>
        
        <div style="padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-font-bold">ctt-font-bold - The quick brown fox jumps over the lazy dog</div>
          <div style="margin-top: 4px; font-size: 12px; color: #666;">Weight: var(--ctt-core-font-weight-700)</div>
        </div>
        
        <div style="padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-font-black">ctt-font-black - The quick brown fox jumps over the lazy dog</div>
          <div style="margin-top: 4px; font-size: 12px; color: #666;">Weight: var(--ctt-core-font-weight-900)</div>
        </div>
      </div>
    </div>
  `,
};

export const TextAlignment: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Text Alignment Utilities</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-text-left">ctt-text-left - This text is aligned to the left. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-text-center">ctt-text-center - This text is centered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-text-right">ctt-text-right - This text is aligned to the right. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-text-justify">ctt-text-justify - This text is justified. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
        </div>
      </div>
    </div>
  `,
};

export const TextDecoration: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Text Decoration Utilities</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-underline">ctt-underline - This text has an underline decoration</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-no-underline">ctt-no-underline - This text has no underline decoration</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-line-through">ctt-line-through - This text has a line-through decoration</div>
        </div>
      </div>
    </div>
  `,
};

export const TextTransform: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Text Transform Utilities</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-uppercase">ctt-uppercase - this text is transformed to uppercase</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-lowercase">ctt-lowercase - THIS TEXT IS TRANSFORMED TO LOWERCASE</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-capitalize">ctt-capitalize - this text is capitalized</div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-body-m ctt-normal-case">ctt-normal-case - This Text Has Normal Case</div>
        </div>
      </div>
    </div>
  `,
};

export const ResponsiveTypography: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Responsive Typography</h2>
      <p style="margin-bottom: 24px; color: #666;">
        Resize your browser window to see how these responsive typography classes adapt to different screen sizes.
      </p>
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-title-desktop-xl ctt-title-tablet-l ctt-title-mobile-m">
            Responsive Title - Changes size based on screen width
          </div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Desktop (1024px+): ctt-title-desktop-xl | Tablet (768-1023px): ctt-title-tablet-l | Mobile (≤767px): ctt-title-mobile-m
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div class="ctt-display-desktop-l ctt-display-tablet-m ctt-display-mobile-s">
            Responsive Display - Adapts to viewport size
          </div>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Desktop (1024px+): ctt-display-desktop-l | Tablet (768-1023px): ctt-display-tablet-m | Mobile (≤767px): ctt-display-mobile-s
          </div>
        </div>
      </div>
    </div>
  `,
};

export const AllTypographyShowcase: Story = {
  render: () => html`
    <div style="max-width: 900px; padding: 24px;">
      <h1 class="ctt-display-l" style="margin-bottom: 32px; color: #333;">Typography Showcase</h1>
      
      <section style="margin-bottom: 40px;">
        <h2 class="ctt-title-l" style="margin-bottom: 20px; color: #333;">Display Typography</h2>
        <div class="ctt-display-l" style="margin-bottom: 12px;">Large Display Text</div>
        <div class="ctt-display-m" style="margin-bottom: 12px;">Medium Display Text</div>
        <div class="ctt-display-s" style="margin-bottom: 12px;">Small Display Text</div>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h2 class="ctt-title-l" style="margin-bottom: 20px; color: #333;">Title Typography</h2>
        <div class="ctt-title-xl" style="margin-bottom: 12px;">Extra Large Title</div>
        <div class="ctt-title-l" style="margin-bottom: 12px;">Large Title</div>
        <div class="ctt-title-m" style="margin-bottom: 12px;">Medium Title</div>
        <div class="ctt-title-s" style="margin-bottom: 12px;">Small Title</div>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h2 class="ctt-title-l" style="margin-bottom: 20px; color: #333;">Body Typography</h2>
        <div class="ctt-body-l" style="margin-bottom: 12px;">
          Large body text - Perfect for important content that needs emphasis or enhanced readability in specific contexts.
        </div>
        <div class="ctt-body-m" style="margin-bottom: 12px;">
          Medium body text - This is the standard body text size for most content, articles, and general reading material.
        </div>
        <div class="ctt-body-s" style="margin-bottom: 12px;">
          Small body text - Ideal for secondary information, captions, and smaller content that still needs to be readable.
        </div>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h2 class="ctt-title-l" style="margin-bottom: 20px; color: #333;">Label Typography</h2>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <span class="ctt-label-l">Large Label</span>
          <span class="ctt-label-m">Medium Label</span>
          <span class="ctt-label-s">Small Label</span>
        </div>
      </section>
    </div>
  `,
};