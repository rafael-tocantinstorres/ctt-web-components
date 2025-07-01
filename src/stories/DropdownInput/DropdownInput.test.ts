import { describe, it, expect } from 'vitest';
import { DropdownInput } from './DropdownInput';

const sampleOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

describe('DropdownInput', () => {
  it('should render with default props', () => {
    const result = DropdownInput({});
    expect(result).toBeDefined();
  });

  it('should render with label', () => {
    const result = DropdownInput({ label: 'Test Label' });
    expect(result.strings.join('')).toContain('Test Label');
  });

  it('should render with options', () => {
    const result = DropdownInput({ options: sampleOptions });
    expect(result.strings.join('')).toContain('Apple');
    expect(result.strings.join('')).toContain('Banana');
    expect(result.strings.join('')).toContain('Cherry');
  });

  it('should apply correct base classes', () => {
    const result = DropdownInput({});
    expect(result.strings.join('')).toContain('ctt-dropdown');
  });

  it('should apply size classes correctly', () => {
    const smallResult = DropdownInput({ size: 'small' });
    expect(smallResult.strings.join('')).toContain('ctt-dropdown--small');

    const largeResult = DropdownInput({ size: 'large' });
    expect(largeResult.strings.join('')).toContain('ctt-dropdown--large');
  });

  it('should handle disabled state', () => {
    const result = DropdownInput({ disabled: true });
    expect(result.strings.join('')).toContain('ctt-dropdown--disabled');
    expect(result.strings.join('')).toContain('disabled');
  });

  it('should handle error state', () => {
    const result = DropdownInput({ error: 'Error message' });
    expect(result.strings.join('')).toContain('ctt-dropdown--error');
    expect(result.strings.join('')).toContain('Error message');
  });

  it('should handle required state', () => {
    const result = DropdownInput({ label: 'Test', required: true });
    expect(result.strings.join('')).toContain('*');
    expect(result.strings.join('')).toContain('aria-label="required"');
  });

  it('should display placeholder text', () => {
    const result = DropdownInput({ placeholder: 'Select option...' });
    expect(result.strings.join('')).toContain('Select option...');
  });

  it('should display selected value', () => {
    const result = DropdownInput({ 
      options: sampleOptions, 
      value: 'banana' 
    });
    expect(result.strings.join('')).toContain('Banana');
  });

  it('should handle multiple selection', () => {
    const result = DropdownInput({ 
      options: sampleOptions, 
      multiple: true,
      value: ['apple', 'cherry']
    });
    expect(result.strings.join('')).toContain('aria-multiselectable="true"');
  });

  it('should contain trigger button', () => {
    const result = DropdownInput({ options: sampleOptions });
    expect(result.strings.join('')).toContain('ctt-dropdown__trigger');
    expect(result.strings.join('')).toContain('type="button"');
  });

  it('should contain dropdown list', () => {
    const result = DropdownInput({ options: sampleOptions });
    expect(result.strings.join('')).toContain('ctt-dropdown__list');
    expect(result.strings.join('')).toContain('role="listbox"');
  });

  it('should handle open state', () => {
    const result = DropdownInput({ 
      options: sampleOptions, 
      isOpen: true 
    });
    expect(result.strings.join('')).toContain('ctt-dropdown--open');
    expect(result.strings.join('')).toContain('aria-expanded="true"');
  });

  it('should generate unique id when no id provided', () => {
    const result1 = DropdownInput({ label: 'Test 1' });
    const result2 = DropdownInput({ label: 'Test 2' });
    
    // Both should have different IDs
    expect(result1.strings.join('')).not.toEqual(result2.strings.join(''));
  });

  it('should handle custom id', () => {
    const result = DropdownInput({ id: 'custom-id', label: 'Test' });
    expect(result.strings.join('')).toContain('id="custom-id"');
    expect(result.strings.join('')).toContain('for="custom-id"');
  });

  it('should include hidden input for form integration', () => {
    const result = DropdownInput({ 
      name: 'test-field',
      value: 'apple'
    });
    expect(result.strings.join('')).toContain('type="hidden"');
    expect(result.strings.join('')).toContain('name="test-field"');
  });
});
