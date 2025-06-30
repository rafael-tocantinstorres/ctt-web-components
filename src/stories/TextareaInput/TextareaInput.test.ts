import { describe, it, expect } from 'vitest';
import { TextareaInput } from './TextareaInput';

describe('TextareaInput', () => {
  it('should render with default props', () => {
    const result = TextareaInput({});
    expect(result).toBeDefined();
  });

  it('should render with label', () => {
    const result = TextareaInput({ label: 'Test Label' });
    expect(result.strings.join('')).toContain('Test Label');
  });

  it('should render with value', () => {
    const result = TextareaInput({ value: 'Test Value' });
    expect(result.strings.join('')).toContain('Test Value');
  });

  it('should apply correct base classes', () => {
    const result = TextareaInput({});
    expect(result.strings.join('')).toContain('ctt-textarea-field');
    expect(result.strings.join('')).toContain('ctt-textarea-field__textarea');
  });

  it('should handle disabled state', () => {
    const result = TextareaInput({ disabled: true });
    expect(result.strings.join('')).toContain('ctt-textarea-field--disabled');
  });

  it('should handle error state', () => {
    const result = TextareaInput({ errorText: 'Error message' });
    expect(result.strings.join('')).toContain('ctt-textarea-field--error');
    expect(result.strings.join('')).toContain('Error message');
  });

  it('should handle required state', () => {
    const result = TextareaInput({ label: 'Test', required: true });
    expect(result.strings.join('')).toContain('*');
    expect(result.strings.join('')).toContain('aria-label="required"');
  });

  it('should apply custom rows and cols', () => {
    const result = TextareaInput({ rows: 8, cols: 50 });
    expect(result.strings.join('')).toContain('rows="8"');
    expect(result.strings.join('')).toContain('cols="50"');
  });

  it('should handle placeholder', () => {
    const result = TextareaInput({ placeholder: 'Enter text...' });
    expect(result.strings.join('')).toContain('placeholder="Enter text..."');
  });

  it('should handle custom resize option', () => {
    const result = TextareaInput({ resize: 'horizontal' });
    expect(result.strings.join('')).toContain('resize: horizontal');
  });

  it('should generate unique ids', () => {
    const result1 = TextareaInput({ label: 'Test 1' });
    const result2 = TextareaInput({ label: 'Test 2' });
    
    // Both should have different IDs
    expect(result1.strings.join('')).not.toEqual(result2.strings.join(''));
  });

  it('should handle custom id', () => {
    const result = TextareaInput({ id: 'custom-id', label: 'Test' });
    expect(result.strings.join('')).toContain('id="custom-id"');
    expect(result.strings.join('')).toContain('for="custom-id"');
  });
});
