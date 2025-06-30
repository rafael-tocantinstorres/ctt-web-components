import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render with default props', () => {
    const result = Checkbox({});
    expect(result).toBeDefined();
  });

  it('should render with custom children', () => {
    const result = Checkbox({ children: 'Test Content' });
    expect(result.strings[0]).toContain('Test Content');
  });

  it('should apply size classes correctly', () => {
    const smallResult = Checkbox({ size: 'small' });
    expect(smallResult.strings[0]).toContain('ctt-checkbox--small');

    const largeResult = Checkbox({ size: 'large' });
    expect(largeResult.strings[0]).toContain('ctt-checkbox--large');
  });

  it('should apply variant classes correctly', () => {
    const primaryResult = Checkbox({ variant: 'primary' });
    expect(primaryResult.strings[0]).toContain('ctt-checkbox--primary');

    const secondaryResult = Checkbox({ variant: 'secondary' });
    expect(secondaryResult.strings[0]).toContain('ctt-checkbox--secondary');
  });

  it('should handle disabled state', () => {
    const result = Checkbox({ disabled: true });
    expect(result.strings[0]).toContain('ctt-checkbox--disabled');
  });

  it('should apply custom className', () => {
    const result = Checkbox({ className: 'custom-class' });
    expect(result.strings[0]).toContain('custom-class');
  });
});
