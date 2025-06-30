import { describe, it, expect } from 'vitest';
import { InputField } from './InputField';

describe('InputField', () => {
  it('should render with default props', () => {
    const result = InputField({});
    expect(result).toBeDefined();
  });

  it('should render with custom children', () => {
    const result = InputField({ children: 'Test Content' });
    expect(result.strings[0]).toContain('Test Content');
  });

  it('should apply size classes correctly', () => {
    const smallResult = InputField({ size: 'small' });
    expect(smallResult.strings[0]).toContain('ctt-input-field--small');

    const largeResult = InputField({ size: 'large' });
    expect(largeResult.strings[0]).toContain('ctt-input-field--large');
  });

  it('should apply variant classes correctly', () => {
    const primaryResult = InputField({ variant: 'primary' });
    expect(primaryResult.strings[0]).toContain('ctt-input-field--primary');

    const secondaryResult = InputField({ variant: 'secondary' });
    expect(secondaryResult.strings[0]).toContain('ctt-input-field--secondary');
  });

  it('should handle disabled state', () => {
    const result = InputField({ disabled: true });
    expect(result.strings[0]).toContain('ctt-input-field--disabled');
  });

  it('should apply custom className', () => {
    const result = InputField({ className: 'custom-class' });
    expect(result.strings[0]).toContain('custom-class');
  });
});
