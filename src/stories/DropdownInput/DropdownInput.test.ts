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
    expect(result).toBeInstanceOf(HTMLElement);
  });

  it('should render with label', () => {
    const result = DropdownInput({ label: 'Test Label' });
    expect(result.textContent).toContain('Test Label');
  });

  it('should render with options', () => {
    const result = DropdownInput({ options: sampleOptions });
    expect(result.innerHTML).toContain('Apple');
    expect(result.innerHTML).toContain('Banana');
    expect(result.innerHTML).toContain('Cherry');
  });

  it('should apply correct base classes', () => {
    const result = DropdownInput({});
    expect(result.className).toContain('ctt-dropdown');
  });

  it('should apply size classes correctly', () => {
    const smallResult = DropdownInput({ size: 'small' });
    expect(smallResult.className).toContain('ctt-dropdown--small');

    const largeResult = DropdownInput({ size: 'large' });
    expect(largeResult.className).toContain('ctt-dropdown--large');
  });

  it('should handle disabled state', () => {
    const result = DropdownInput({ disabled: true });
    expect(result.className).toContain('ctt-dropdown--disabled');
    const trigger = result.querySelector('.ctt-dropdown__trigger') as HTMLButtonElement;
    expect(trigger.disabled).toBe(true);
  });

  it('should handle error state', () => {
    const result = DropdownInput({ error: 'Error message' });
    expect(result.className).toContain('ctt-dropdown--error');
    expect(result.textContent).toContain('Error message');
  });

  it('should handle required state', () => {
    const result = DropdownInput({ label: 'Test', required: true });
    expect(result.textContent).toContain('*');
    const requiredSpan = result.querySelector('.ctt-dropdown__required');
    expect(requiredSpan?.getAttribute('aria-label')).toBe('required');
  });

  it('should display placeholder text', () => {
    const result = DropdownInput({ placeholder: 'Select option...' });
    const triggerText = result.querySelector('.ctt-dropdown__trigger-text');
    expect(triggerText?.textContent).toBe('Select option...');
  });

  it('should display selected value', () => {
    const result = DropdownInput({ 
      options: sampleOptions, 
      value: 'banana' 
    });
    const triggerText = result.querySelector('.ctt-dropdown__trigger-text');
    expect(triggerText?.textContent).toBe('Banana');
  });

  it('should handle multiple selection', () => {
    const result = DropdownInput({ 
      options: sampleOptions, 
      multiple: true,
      value: ['apple', 'cherry']
    });
    const list = result.querySelector('.ctt-dropdown__list');
    expect(list?.getAttribute('aria-multiselectable')).toBe('true');
  });

  it('should contain trigger button', () => {
    const result = DropdownInput({ options: sampleOptions });
    const trigger = result.querySelector('.ctt-dropdown__trigger');
    expect(trigger).toBeDefined();
    expect(trigger?.getAttribute('type')).toBe('button');
  });

  it('should contain dropdown list', () => {
    const result = DropdownInput({ options: sampleOptions });
    const list = result.querySelector('.ctt-dropdown__list');
    expect(list).toBeDefined();
    expect(list?.getAttribute('role')).toBe('listbox');
  });

  it('should generate unique id when no id provided', () => {
    const result1 = DropdownInput({ label: 'Test 1' });
    const result2 = DropdownInput({ label: 'Test 2' });
    
    const trigger1 = result1.querySelector('.ctt-dropdown__trigger');
    const trigger2 = result2.querySelector('.ctt-dropdown__trigger');
    
    // Both should have different IDs
    expect(trigger1?.id).not.toEqual(trigger2?.id);
  });

  it('should handle custom id', () => {
    const result = DropdownInput({ id: 'custom-id', label: 'Test' });
    const trigger = result.querySelector('.ctt-dropdown__trigger');
    const label = result.querySelector('label');
    expect(trigger?.id).toBe('custom-id');
    expect(label?.getAttribute('for')).toBe('custom-id');
  });

  it('should include hidden input for form integration', () => {
    const result = DropdownInput({ 
      name: 'test-field',
      value: 'apple'
    });
    const hiddenInput = result.querySelector('input[type="hidden"]') as HTMLInputElement;
    expect(hiddenInput).toBeDefined();
    expect(hiddenInput.name).toBe('test-field');
  });

  it('should handle onChange callback', () => {
    let capturedValue: any = null;
    const result = DropdownInput({ 
      options: sampleOptions,
      onChange: (value) => {
        capturedValue = value;
      }
    });
    
    // Simulate clicking the first option
    const firstOption = result.querySelector('.ctt-dropdown__option');
    if (firstOption) {
      (firstOption as HTMLElement).click();
      expect(capturedValue).toBe('apple');
    }
  });

  it('should display multiple selected values correctly', () => {
    const result = DropdownInput({ 
      options: sampleOptions, 
      multiple: true,
      value: ['apple', 'cherry']
    });
    const triggerText = result.querySelector('.ctt-dropdown__trigger-text');
    expect(triggerText?.textContent).toBe('Apple, Cherry');
  });

  it('should show count for many selected values', () => {
    const manyOptions = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
    ];
    
    const result = DropdownInput({ 
      options: manyOptions, 
      multiple: true,
      value: ['1', '2', '3', '4', '5']
    });
    const triggerText = result.querySelector('.ctt-dropdown__trigger-text');
    expect(triggerText?.textContent).toBe('5 selected');
  });
});
