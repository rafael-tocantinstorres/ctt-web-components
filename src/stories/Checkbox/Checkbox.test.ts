import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render with default props', () => {
    const result = Checkbox({});
    expect(result).toBeDefined();
  });

  it('should render with custom label', () => {
    const result = Checkbox({ label: 'Test Label' });
    expect(result.strings[0]).toContain('Test Label');
  });

  it('should handle checked state', () => {
    const result = Checkbox({ checked: true });
    expect(result.strings[0]).toContain('checked');
  });

  it('should handle error state', () => {
    const result = Checkbox({ errorText: 'Error message' });
    expect(result.strings[0]).toContain('ctt-checkbox--error');
    expect(result.strings[0]).toContain('Error message');
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
