import { describe, it, expect } from 'vitest';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('should render with default props', () => {
    const result = RadioButton({});
    expect(result).toBeDefined();
  });

  it('should render with custom children', () => {
    const result = RadioButton({ children: 'Test Content' });
    expect(result.strings[0]).toContain('Test Content');
  });

  it('should apply size classes correctly', () => {
    const smallResult = RadioButton({ size: 'small' });
    expect(smallResult.strings[0]).toContain('ctt-radio-button--small');

    const largeResult = RadioButton({ size: 'large' });
    expect(largeResult.strings[0]).toContain('ctt-radio-button--large');
  });

  it('should apply variant classes correctly', () => {
    const primaryResult = RadioButton({ variant: 'primary' });
    expect(primaryResult.strings[0]).toContain('ctt-radio-button--primary');

    const secondaryResult = RadioButton({ variant: 'secondary' });
    expect(secondaryResult.strings[0]).toContain('ctt-radio-button--secondary');
  });

  it('should handle disabled state', () => {
    const result = RadioButton({ disabled: true });
    expect(result.strings[0]).toContain('ctt-radio-button--disabled');
  });

  it('should apply custom className', () => {
    const result = RadioButton({ className: 'custom-class' });
    expect(result.strings[0]).toContain('custom-class');
  });
});
