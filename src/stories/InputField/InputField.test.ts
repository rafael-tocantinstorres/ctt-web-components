import { describe, it, expect } from 'vitest';
import { InputField } from './InputField';

describe('InputField', () => {
  it('should render with default props', () => {
    const result = InputField({});
    expect(result).toBeDefined();
  });

  it('should render with custom label', () => {
    const result = InputField({ label: 'Test Label' });
    expect(result.strings[0]).toContain('Test Label');
  });

  it('should apply size classes correctly', () => {
    const smallResult = InputField({ size: 'small' });
    expect(smallResult.strings[0]).toContain('ctt-input-field--small');

    const largeResult = InputField({ size: 'large' });
    expect(largeResult.strings[0]).toContain('ctt-input-field--large');
  });

  it('should handle error state', () => {
    const result = InputField({ error: 'Error message' });
    expect(result.strings[0]).toContain('ctt-input-field--error');
    expect(result.strings[0]).toContain('Error message');
  });

  it('should handle disabled state', () => {
    const result = InputField({ disabled: true });
    expect(result.strings[0]).toContain('ctt-input-field--disabled');
  });

  it('should handle required state', () => {
    const result = InputField({ required: true, label: 'Required Field' });
    expect(result.strings[0]).toContain('*');
  });
});
