import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Import styles to use them in stories
import '../../styles/spacing.css';
import '../../styles/typography.css';
import '../../styles/colors.css';
import '../../styles/tokens.css';

const meta: Meta = {
  title: 'Design System/Utils',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Utility Classes

The CTT Design System provides a comprehensive set of utility classes for common styling needs including spacing, layout, and visual helpers.

## Spacing Utilities

Spacing utilities follow these patterns:
- **Padding**: \`ctt-p-{size}\`, \`ctt-px-{size}\`, \`ctt-py-{size}\`, \`ctt-pt-{size}\`, etc.
- **Margin**: \`ctt-m-{size}\`, \`ctt-mx-{size}\`, \`ctt-my-{size}\`, \`ctt-mt-{size}\`, etc.

### Size Scale:
- \`0\` = 0px
- \`1\` = 4px
- \`2\` = 8px
- \`3\` = 12px
- \`4\` = 16px
- \`6\` = 24px
- \`8\` = 32px
- \`10\` = 40px
- \`12\` = 48px
- \`14\` = 56px
- \`16\` = 64px
- \`18\` = 72px
- \`20\` = 80px

### Examples:
\`\`\`html
<div class="ctt-p-4">Padding 16px on all sides</div>
<div class="ctt-mx-auto">Centered with auto margins</div>
<div class="ctt-mt-8 ctt-mb-4">Top margin 32px, bottom margin 16px</div>
\`\`\`

## Spacing Tokens

All spacing utilities use CSS custom properties based on the design system's dimension tokens:
- \`var(--ctt-core-dimension-{value})\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to create spacing demonstration boxes
const SpacingBox = (content: string, bgColor = '#e3f2fd', textColor = '#1976d2') => html`
  <div style="background-color: ${bgColor}; color: ${textColor}; padding: 8px; border-radius: 4px; font-size: 12px; text-align: center; font-weight: 500;">
    ${content}
  </div>
`;

export const PaddingUtilities: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Padding Utilities</h2>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: #333;">All Sides Padding (ctt-p-{size})</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-0" style="background: #f5f5f5;">
              ${SpacingBox('p-0<br>0px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-1" style="background: #f5f5f5;">
              ${SpacingBox('p-1<br>4px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-2" style="background: #f5f5f5;">
              ${SpacingBox('p-2<br>8px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-3" style="background: #f5f5f5;">
              ${SpacingBox('p-3<br>12px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-4" style="background: #f5f5f5;">
              ${SpacingBox('p-4<br>16px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-6" style="background: #f5f5f5;">
              ${SpacingBox('p-6<br>24px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-8" style="background: #f5f5f5;">
              ${SpacingBox('p-8<br>32px')}
            </div>
          </div>
          <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
            <div class="ctt-p-12" style="background: #f5f5f5;">
              ${SpacingBox('p-12<br>48px')}
            </div>
          </div>
        </div>
      </section>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: #333;">Horizontal & Vertical Padding</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;">
          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px;">Horizontal (ctt-px-{size})</h4>
            <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center; min-height: 80px;">
              <div class="ctt-px-6" style="background: #e8f5e8;">
                ${SpacingBox('px-6<br>Left & Right: 24px', '#e8f5e8', '#2e7d32')}
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px;">Vertical (ctt-py-{size})</h4>
            <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center; min-height: 80px;">
              <div class="ctt-py-6" style="background: #fff3e0;">
                ${SpacingBox('py-6<br>Top & Bottom: 24px', '#fff3e0', '#f57c00')}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 style="margin-bottom: 16px; color: #333;">Individual Side Padding</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
          <div>
            <h4 style="margin-bottom: 8px; font-size: 12px;">Top (pt-4)</h4>
            <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center; min-height: 60px;">
              <div class="ctt-pt-4" style="background: #f3e5f5;">
                ${SpacingBox('pt-4', '#f3e5f5', '#7b1fa2')}
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 8px; font-size: 12px;">Right (pr-4)</h4>
            <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center; min-height: 60px;">
              <div class="ctt-pr-4" style="background: #fce4ec;">
                ${SpacingBox('pr-4', '#fce4ec', '#c2185b')}
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 8px; font-size: 12px;">Bottom (pb-4)</h4>
            <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center; min-height: 60px;">
              <div class="ctt-pb-4" style="background: #e0f2f1;">
                ${SpacingBox('pb-4', '#e0f2f1', '#00695c')}
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 8px; font-size: 12px;">Left (pl-4)</h4>
            <div style="border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center; min-height: 60px;">
              <div class="ctt-pl-4" style="background: #e8eaf6;">
                ${SpacingBox('pl-4', '#e8eaf6', '#303f9f')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};

export const MarginUtilities: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Margin Utilities</h2>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: #333;">All Sides Margin (ctt-m-{size})</h3>
        <div style="background: #f8f9fa; padding: 16px; border-radius: 8px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 8px;">
            <div class="ctt-m-0" style="background: #dee2e6; text-align: center; padding: 8px; font-size: 12px;">m-0</div>
            <div class="ctt-m-1" style="background: #dee2e6; text-align: center; padding: 8px; font-size: 12px;">m-1</div>
            <div class="ctt-m-2" style="background: #dee2e6; text-align: center; padding: 8px; font-size: 12px;">m-2</div>
            <div class="ctt-m-3" style="background: #dee2e6; text-align: center; padding: 8px; font-size: 12px;">m-3</div>
            <div class="ctt-m-4" style="background: #dee2e6; text-align: center; padding: 8px; font-size: 12px;">m-4</div>
            <div class="ctt-m-6" style="background: #dee2e6; text-align: center; padding: 8px; font-size: 12px;">m-6</div>
          </div>
        </div>
        <p style="margin-top: 12px; font-size: 14px; color: #666;">
          Notice how each box has different spacing around it within the gray container.
        </p>
      </section>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: #333;">Auto Margin (ctt-m-auto, ctt-mx-auto)</h3>
        <div style="background: #f8f9fa; padding: 16px; border-radius: 8px;">
          <div class="ctt-mx-auto" style="background: #198754; color: white; padding: 16px; border-radius: 4px; width: fit-content;">
            Centered with mx-auto
          </div>
          <div class="ctt-m-auto ctt-mt-4" style="background: #0d6efd; color: white; padding: 16px; border-radius: 4px; width: fit-content;">
            Centered with m-auto
          </div>
        </div>
      </section>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px; color: #333;">Horizontal & Vertical Margins</h3>
        <div style="background: #f8f9fa; padding: 16px; border-radius: 8px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div class="ctt-mx-8" style="background: #fd7e14; color: white; padding: 12px; border-radius: 4px;">mx-8 (horizontal margin)</div>
            <div class="ctt-my-6" style="background: #6f42c1; color: white; padding: 12px; border-radius: 4px;">my-6 (vertical margin)</div>
            <div class="ctt-mx-4 ctt-my-2" style="background: #20c997; color: white; padding: 12px; border-radius: 4px;">mx-4 + my-2</div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 style="margin-bottom: 16px; color: #333;">Individual Side Margins</h3>
        <div style="background: #f8f9fa; padding: 24px; border-radius: 8px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px;">
            <div class="ctt-mt-8" style="background: #e74c3c; color: white; padding: 12px; border-radius: 4px; text-align: center;">mt-8</div>
            <div class="ctt-mr-8" style="background: #3498db; color: white; padding: 12px; border-radius: 4px; text-align: center;">mr-8</div>
            <div class="ctt-mb-8" style="background: #2ecc71; color: white; padding: 12px; border-radius: 4px; text-align: center;">mb-8</div>
            <div class="ctt-ml-8" style="background: #f39c12; color: white; padding: 12px; border-radius: 4px; text-align: center;">ml-8</div>
          </div>
        </div>
      </section>
    </div>
  `,
};

export const SpacingScale: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Spacing Scale Reference</h2>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="margin-bottom: 12px; font-size: 16px;">Design Tokens & Pixel Values</h3>
          <div style="font-family: monospace; font-size: 14px; line-height: 1.6;">
            <div style="display: grid; grid-template-columns: auto auto auto auto; gap: 8px 24px; align-items: center;">
              <div style="font-weight: bold;">Class</div>
              <div style="font-weight: bold;">Size</div>
              <div style="font-weight: bold;">Pixels</div>
              <div style="font-weight: bold;">Token</div>
              
              <div>ctt-{p|m}-0</div>
              <div>0</div>
              <div>0px</div>
              <div>--ctt-core-dimension-0</div>
              
              <div>ctt-{p|m}-1</div>
              <div>1</div>
              <div>4px</div>
              <div>--ctt-core-dimension-25</div>
              
              <div>ctt-{p|m}-2</div>
              <div>2</div>
              <div>8px</div>
              <div>--ctt-core-dimension-50</div>
              
              <div>ctt-{p|m}-3</div>
              <div>3</div>
              <div>12px</div>
              <div>--ctt-core-dimension-75</div>
              
              <div>ctt-{p|m}-4</div>
              <div>4</div>
              <div>16px</div>
              <div>--ctt-core-dimension-100</div>
              
              <div>ctt-{p|m}-6</div>
              <div>6</div>
              <div>24px</div>
              <div>--ctt-core-dimension-150</div>
              
              <div>ctt-{p|m}-8</div>
              <div>8</div>
              <div>32px</div>
              <div>--ctt-core-dimension-200</div>
              
              <div>ctt-{p|m}-10</div>
              <div>10</div>
              <div>40px</div>
              <div>--ctt-core-dimension-250</div>
              
              <div>ctt-{p|m}-12</div>
              <div>12</div>
              <div>48px</div>
              <div>--ctt-core-dimension-300</div>
              
              <div>ctt-{p|m}-14</div>
              <div>14</div>
              <div>56px</div>
              <div>--ctt-core-dimension-350</div>
              
              <div>ctt-{p|m}-16</div>
              <div>16</div>
              <div>64px</div>
              <div>--ctt-core-dimension-400</div>
              
              <div>ctt-{p|m}-18</div>
              <div>18</div>
              <div>72px</div>
              <div>--ctt-core-dimension-450</div>
              
              <div>ctt-{p|m}-20</div>
              <div>20</div>
              <div>80px</div>
              <div>--ctt-core-dimension-500</div>
            </div>
          </div>
        </div>
        
        <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="margin-bottom: 12px; font-size: 16px;">Visual Scale Comparison</h3>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">0px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 0px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">4px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 4px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">8px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 8px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">12px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 12px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">16px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 16px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">24px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 24px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">32px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 32px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">48px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 48px; border: 1px solid #2196f3;"></div>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 60px; font-size: 12px;">64px:</div>
              <div style="height: 16px; background: #e3f2fd; width: 64px; border: 1px solid #2196f3;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const SpacingPatterns: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Common Spacing Patterns</h2>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px;">Card Layout with Consistent Spacing</h3>
        <div class="ctt-bg-white ctt-border-neutral-300 ctt-p-6" style="border: 1px solid; border-radius: 8px; max-width: 400px;">
          <h4 class="ctt-title-m ctt-mb-3">Card Title</h4>
          <p class="ctt-body-m ctt-text-muted ctt-mb-4">
            This card uses consistent spacing: padding of 24px (ctt-p-6), and margin-bottom utilities for vertical rhythm.
          </p>
          <div class="ctt-mt-4" style="display: flex; gap: 12px;">
            <button class="ctt-bg-primary ctt-text-white ctt-px-4 ctt-py-2" style="border: none; border-radius: 4px; cursor: pointer;">
              Primary
            </button>
            <button class="ctt-bg-neutral-200 ctt-text-neutral-700 ctt-px-4 ctt-py-2" style="border: none; border-radius: 4px; cursor: pointer;">
              Secondary
            </button>
          </div>
        </div>
      </section>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px;">Form Layout</h3>
        <div class="ctt-bg-neutral-100 ctt-p-6" style="border-radius: 8px; max-width: 400px;">
          <h4 class="ctt-title-s ctt-mb-4">Sign In</h4>
          <div class="ctt-mb-4">
            <label class="ctt-label-m ctt-text-neutral-700 ctt-mb-2" style="display: block;">Email</label>
            <input class="ctt-p-3 ctt-bg-white ctt-border-neutral-300" style="width: 100%; border: 1px solid; border-radius: 4px;" placeholder="Enter your email" />
          </div>
          <div class="ctt-mb-6">
            <label class="ctt-label-m ctt-text-neutral-700 ctt-mb-2" style="display: block;">Password</label>
            <input type="password" class="ctt-p-3 ctt-bg-white ctt-border-neutral-300" style="width: 100%; border: 1px solid; border-radius: 4px;" placeholder="Enter your password" />
          </div>
          <button class="ctt-bg-primary ctt-text-white ctt-p-3" style="width: 100%; border: none; border-radius: 4px; cursor: pointer;">
            Sign In
          </button>
        </div>
      </section>
      
      <section style="margin-bottom: 32px;">
        <h3 style="margin-bottom: 16px;">Navigation List</h3>
        <div class="ctt-bg-white ctt-border-neutral-300" style="border: 1px solid; border-radius: 8px; max-width: 300px;">
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li>
              <a href="#" class="ctt-px-4 ctt-py-3 ctt-text-neutral-700" style="display: block; border-bottom: 1px solid #e0e0e0; text-decoration: none; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='transparent'">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="ctt-px-4 ctt-py-3 ctt-text-neutral-700" style="display: block; border-bottom: 1px solid #e0e0e0; text-decoration: none; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='transparent'">
                Projects
              </a>
            </li>
            <li>
              <a href="#" class="ctt-px-4 ctt-py-3 ctt-text-neutral-700" style="display: block; border-bottom: 1px solid #e0e0e0; text-decoration: none; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='transparent'">
                Team
              </a>
            </li>
            <li>
              <a href="#" class="ctt-px-4 ctt-py-3 ctt-text-neutral-700" style="display: block; text-decoration: none; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='transparent'">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 style="margin-bottom: 16px;">Grid Layout with Gaps</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
          <div class="ctt-bg-brand-teal-100 ctt-text-brand-teal-600 ctt-p-4" style="border-radius: 8px; text-align: center;">
            <div class="ctt-title-s ctt-mb-2">Card 1</div>
            <div class="ctt-body-s">Content with consistent padding</div>
          </div>
          <div class="ctt-bg-brand-green-100 ctt-text-brand-green-600 ctt-p-4" style="border-radius: 8px; text-align: center;">
            <div class="ctt-title-s ctt-mb-2">Card 2</div>
            <div class="ctt-body-s">Content with consistent padding</div>
          </div>
          <div class="ctt-bg-brand-yellow-100 ctt-text-brand-yellow-600 ctt-p-4" style="border-radius: 8px; text-align: center;">
            <div class="ctt-title-s ctt-mb-2">Card 3</div>
            <div class="ctt-body-s">Content with consistent padding</div>
          </div>
          <div class="ctt-bg-brand-purple-100 ctt-text-brand-purple-600 ctt-p-4" style="border-radius: 8px; text-align: center;">
            <div class="ctt-title-s ctt-mb-2">Card 4</div>
            <div class="ctt-body-s">Content with consistent padding</div>
          </div>
        </div>
      </section>
    </div>
  `,
};

export const CombinedUtilities: Story = {
  render: () => html`
    <div style="max-width: 1000px; padding: 24px;">
      <h2 style="margin-bottom: 24px; color: #333;">Combined Utility Examples</h2>
      <p style="margin-bottom: 32px; color: #666;">
        Real-world examples showing how spacing, typography, and color utilities work together.
      </p>
      
      <section style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px;">Article Layout</h3>
        <article class="ctt-bg-white ctt-p-8 ctt-border-neutral-200" style="border: 1px solid; border-radius: 8px; max-width: 600px;">
          <header class="ctt-mb-6">
            <h1 class="ctt-title-xl ctt-text-primary ctt-mb-2">The Future of Design Systems</h1>
            <div class="ctt-text-muted ctt-body-s">
              Published on March 15, 2024 • 5 min read
            </div>
          </header>
          
          <div class="ctt-mb-6">
            <p class="ctt-body-m ctt-text-body ctt-mb-4">
              Design systems have become the backbone of modern digital product development. 
              They provide a unified language and consistent experience across teams and products.
            </p>
            <p class="ctt-body-m ctt-text-body ctt-mb-4">
              By leveraging utility classes like those in the CTT Design System, developers can 
              rapidly prototype and build interfaces while maintaining design consistency.
            </p>
            <blockquote class="ctt-bg-neutral-100 ctt-border-primary ctt-p-4 ctt-my-6" style="border-left: 4px solid; border-radius: 0 4px 4px 0; margin-left: 0;">
              <p class="ctt-body-m ctt-text-muted" style="margin: 0; font-style: italic;">
                "The best design systems are those that enable teams to move fast without breaking things."
              </p>
            </blockquote>
            <p class="ctt-body-m ctt-text-body">
              This approach reduces the cognitive load on developers and ensures that the final 
              product aligns with the intended design vision.
            </p>
          </div>
          
          <footer class="ctt-pt-6 ctt-border-neutral-200" style="border-top: 1px solid;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div class="ctt-bg-brand-primary-500 ctt-text-white ctt-p-3" style="width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                JD
              </div>
              <div>
                <div class="ctt-label-m ctt-text-body">John Doe</div>
                <div class="ctt-label-s ctt-text-muted">Senior Design Engineer</div>
              </div>
            </div>
          </footer>
        </article>
      </section>
      
      <section style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px;">Dashboard Stats</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
          <div class="ctt-bg-white ctt-p-6 ctt-border-neutral-200" style="border: 1px solid; border-radius: 8px;">
            <div class="ctt-display-s ctt-text-brand-primary-500 ctt-mb-2">2,547</div>
            <div class="ctt-label-m ctt-text-muted ctt-mb-1">Total Users</div>
            <div class="ctt-label-s ctt-text-success">+12% from last month</div>
          </div>
          
          <div class="ctt-bg-white ctt-p-6 ctt-border-neutral-200" style="border: 1px solid; border-radius: 8px;">
            <div class="ctt-display-s ctt-text-brand-teal-500 ctt-mb-2">$42,590</div>
            <div class="ctt-label-m ctt-text-muted ctt-mb-1">Revenue</div>
            <div class="ctt-label-s ctt-text-success">+8% from last month</div>
          </div>
          
          <div class="ctt-bg-white ctt-p-6 ctt-border-neutral-200" style="border: 1px solid; border-radius: 8px;">
            <div class="ctt-display-s ctt-text-brand-green-500 ctt-mb-2">89.2%</div>
            <div class="ctt-label-m ctt-text-muted ctt-mb-1">Satisfaction</div>
            <div class="ctt-label-s ctt-text-warning">-2% from last month</div>
          </div>
          
          <div class="ctt-bg-white ctt-p-6 ctt-border-neutral-200" style="border: 1px solid; border-radius: 8px;">
            <div class="ctt-display-s ctt-text-brand-purple-500 ctt-mb-2">1,832</div>
            <div class="ctt-label-m ctt-text-muted ctt-mb-1">Active Sessions</div>
            <div class="ctt-label-s ctt-text-success">+25% from last month</div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 style="margin-bottom: 16px;">Feature Comparison Table</h3>
        <div class="ctt-bg-white ctt-border-neutral-200" style="border: 1px solid; border-radius: 8px; overflow: hidden;">
          <div class="ctt-bg-neutral-100 ctt-px-6 ctt-py-4">
            <h4 class="ctt-title-s ctt-text-neutral-800">Pricing Plans</h4>
          </div>
          <div class="ctt-p-6">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px;">
              <div class="ctt-text-center">
                <div class="ctt-title-m ctt-text-neutral-700 ctt-mb-2">Basic</div>
                <div class="ctt-display-s ctt-text-primary ctt-mb-4">$9</div>
                <div class="ctt-body-s ctt-text-muted">Perfect for individuals</div>
              </div>
              <div class="ctt-text-center ctt-bg-primary ctt-text-white ctt-p-4" style="border-radius: 8px; position: relative;">
                <div class="ctt-label-s ctt-bg-white ctt-text-primary ctt-px-2 ctt-py-1 ctt-mx-auto" style="width: fit-content; border-radius: 12px; position: absolute; top: -8px; left: 50%; transform: translateX(-50%);">Most Popular</div>
                <div class="ctt-title-m ctt-mb-2">Pro</div>
                <div class="ctt-display-s ctt-mb-4">$29</div>
                <div class="ctt-body-s" style="opacity: 0.9;">Great for teams</div>
              </div>
              <div class="ctt-text-center">
                <div class="ctt-title-m ctt-text-neutral-700 ctt-mb-2">Enterprise</div>
                <div class="ctt-display-s ctt-text-primary ctt-mb-4">$99</div>
                <div class="ctt-body-s ctt-text-muted">For large organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};