import { describe, it, expect } from 'vitest';
import { ToggleSwitch } from './ToggleSwitch';

describe('ToggleSwitch', () => {
  it('should render with default props', () => {
    const result = ToggleSwitch({});
    expect(result).toBeDefined();
  });

  it('should render with label', () => {
    const result = ToggleSwitch({ label: 'Test Label' });
    expect(result.strings.join('')).toContain('Test Label');
  });

  it('should apply correct base classes', () => {
    const result = ToggleSwitch({});
    expect(result.strings.join('')).toContain('ctt-toggle-switch');
  });

  it('should handle checked state', () => {
    const result = ToggleSwitch({ checked: true });
    expect(result.strings.join('')).toContain('checked');
  });

  it('should handle disabled state', () => {
    const result = ToggleSwitch({ disabled: true });
    expect(result.strings.join('')).toContain('ctt-toggle-switch--disabled');
    expect(result.strings.join('')).toContain('data-disabled');
  });

  it('should apply custom className', () => {
    const result = ToggleSwitch({ className: 'custom-class' });
    expect(result.strings.join('')).toContain('custom-class');
  });

  it('should handle custom id', () => {
    const result = ToggleSwitch({ id: 'custom-id' });
    expect(result.strings.join('')).toContain('id="custom-id"');
  });

  it('should show label when showLabel is true', () => {
    const result = ToggleSwitch({ label: 'Test Label', showLabel: true });
    expect(result.strings.join('')).toContain('Test Label');
  });

  it('should hide label when showLabel is false', () => {
    const result = ToggleSwitch({ label: 'Test Label', showLabel: false });
    expect(result.strings.join('')).not.toContain('ctt-toggle-switch__label');
  });

  it('should contain checkbox input', () => {
    const result = ToggleSwitch({});
    expect(result.strings.join('')).toContain('type="checkbox"');
  });

  it('should contain thumb element', () => {
    const result = ToggleSwitch({});
    expect(result.strings.join('')).toContain('ctt-toggle-switch__thumb');
  });

  it('should handle both checked and disabled states', () => {
    const result = ToggleSwitch({ checked: true, disabled: true });
    expect(result.strings.join('')).toContain('checked');
    expect(result.strings.join('')).toContain('disabled');
  });

  it('should generate unique id when no id provided', () => {
    const result1 = ToggleSwitch({});
    const result2 = ToggleSwitch({});
    
    // Both should have different IDs
    expect(result1.strings.join('')).not.toEqual(result2.strings.join(''));
  });
});
