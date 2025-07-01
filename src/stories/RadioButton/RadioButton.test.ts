import { describe, it, expect } from 'vitest';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('should render with default props', () => {
    const result = RadioButton({});
    expect(result).toBeDefined();
  });

  it('should render with custom label', () => {
    const result = RadioButton({ label: 'Test Label' });
    expect(result.strings[0]).toContain('Test Label');
  });

  it('should handle checked state', () => {
    const result = RadioButton({ checked: true });
    expect(result.strings[0]).toContain('checked');
  });

  it('should handle error state', () => {
    const result = RadioButton({ errorText: 'Error message' });
    expect(result.strings[0]).toContain('ctt-radio-button--error');
    expect(result.strings[0]).toContain('Error message');
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
