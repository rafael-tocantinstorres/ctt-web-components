import './dropdown-input.css';

export interface DropdownOption {
  label: string;
  value: any;
  description?: string;
  disabled?: boolean;
}

export interface DropdownInputProps<T = DropdownOption> {
  /**
   * The label text for the dropdown field
   */
  label?: string;
  /**
   * The name attribute for form integration
   */
  name?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Array of options to display
   */
  options?: T[];
  /**
   * The current selected value(s)
   */
  value?: any;
  /**
   * Whether multiple selections are allowed
   */
  multiple?: boolean;
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * Whether the dropdown is required
   */
  required?: boolean;
  /**
   * Error message to display
   */
  error?: string | null;
  /**
   * Size variant
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The id attribute for the dropdown
   */
  id?: string | null;
  /**
   * Whether to show descriptions for options that have them
   */
  hasDescription?: boolean;
  /**
   * Property name to use for the option label (for custom option objects)
   */
  labelKey?: keyof T;
  /**
   * Property name to use for the option value (for custom option objects)
   */
  valueKey?: keyof T;
  /**
   * Property name to use for the option description (for custom option objects)
   */
  descriptionKey?: keyof T;
  /**
   * Property name to use for the option disabled state (for custom option objects)
   */
  disabledKey?: keyof T;
  /**
   * Change event handler
   */
  onChange?: (value: any) => void;
  /**
   * Focus event handler
   */
  onFocus?: (event: Event) => void;
  /**
   * Blur event handler
   */
  onBlur?: (event: Event) => void;
}

/**
 * DropdownInput component for the CTT Design System
 */
export const DropdownInput = <T = DropdownOption>(props: DropdownInputProps<T>): HTMLElement => {
  const {
    label = '',
    name = '',
    placeholder = 'Select an option...',
    options = [],
    value = null,
    multiple = false,
    disabled = false,
    required = false,
    error = null,
    size = 'medium',
    id = null,
    hasDescription = false,
    labelKey,
    valueKey,  
    descriptionKey,
    disabledKey,
    onChange,
    onFocus,
    onBlur
  } = props;

  // Generate unique IDs
  const dropdownId = id || `ctt-dropdown-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = `${dropdownId}-label`;
  const errorId = `${dropdownId}-error`;
  
  // Internal state
  let isOpen = false;
  let currentValue = value !== null && value !== undefined ? value : (multiple ? [] : null);
  let isOptionClicking = false; // Flag to prevent outside click during option selection
  
  // Helper functions for property extraction
  const getOptionLabel = (option: T): string => {
    if (labelKey && option) {
      return String(option[labelKey]);
    }
    return (option as any)?.label || '';
  };

  const getOptionValue = (option: T): any => {
    if (valueKey && option) {
      return option[valueKey];
    }
    return (option as any)?.value;
  };

  const getOptionDescription = (option: T): string | undefined => {
    if (descriptionKey && option) {
      return String(option[descriptionKey]);
    }
    return (option as any)?.description;
  };

  const getOptionDisabled = (option: T): boolean => {
    if (disabledKey && option) {
      return Boolean(option[disabledKey]);
    }
    return Boolean((option as any)?.disabled);
  };

  const getDisplayText = () => {
    if (!currentValue) return placeholder;
    
    if (multiple && Array.isArray(currentValue)) {
      if (currentValue.length === 0) return placeholder;
      if (currentValue.length === 1) {
        const option = options.find(opt => getOptionValue(opt) === currentValue[0]);
        return option ? getOptionLabel(option) : placeholder;
      }
      if (currentValue.length <= 3) {
        const selectedLabels = currentValue
          .map(val => {
            const option = options.find(opt => getOptionValue(opt) === val);
            return option ? getOptionLabel(option) : val;
          })
          .join(', ');
        return selectedLabels;
      }
      return `${currentValue.length} selected`;
    }
    
    const option = options.find(opt => getOptionValue(opt) === currentValue);
    return option ? getOptionLabel(option) : placeholder;
  };

  const isOptionSelected = (option: T) => {
    const optionValue = getOptionValue(option);
    if (multiple && Array.isArray(currentValue)) {
      return currentValue.includes(optionValue);
    }
    return currentValue === optionValue;
  };

  // Create the main container
  const container = document.createElement('div');
  container.className = `ctt-dropdown ctt-dropdown--${size}`;
  if (disabled) container.classList.add('ctt-dropdown--disabled');
  if (error) container.classList.add('ctt-dropdown--error');

  // Create label if provided
  if (label) {
    const labelEl = document.createElement('label');
    labelEl.id = labelId;
    labelEl.setAttribute('for', dropdownId);
    labelEl.className = 'ctt-dropdown__label';
    labelEl.textContent = label;
    if (required) {
      const requiredSpan = document.createElement('span');
      requiredSpan.className = 'ctt-dropdown__required';
      requiredSpan.setAttribute('aria-label', 'required');
      requiredSpan.textContent = '*';
      labelEl.appendChild(requiredSpan);
    }
    container.appendChild(labelEl);
  }

  // Create hidden input for form integration
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = name;
  container.appendChild(hiddenInput);

  // Create dropdown container
  const dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'ctt-dropdown__container';

  // Create trigger button
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.id = dropdownId;
  trigger.className = 'ctt-dropdown__trigger';
  trigger.disabled = disabled;
  if (required) trigger.setAttribute('required', 'true');
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  if (error) trigger.setAttribute('aria-invalid', 'true');
  if (error) trigger.setAttribute('aria-describedby', errorId);
  if (label) trigger.setAttribute('aria-labelledby', labelId);

  // Create trigger content
  const triggerText = document.createElement('span');
  triggerText.className = 'ctt-dropdown__trigger-text';
  
  const chevron = document.createElement('span');
  chevron.className = 'ctt-dropdown__chevron';
  chevron.setAttribute('aria-hidden', 'true');
  chevron.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  `;

  trigger.appendChild(triggerText);
  trigger.appendChild(chevron);

  // Create dropdown list
  const list = document.createElement('div');
  list.className = 'ctt-dropdown__list';
  list.setAttribute('role', 'listbox');
  list.setAttribute('aria-multiselectable', multiple ? 'true' : 'false');
  list.style.display = 'none';

  dropdownContainer.appendChild(trigger);
  dropdownContainer.appendChild(list);
  container.appendChild(dropdownContainer);

  // Create error message if provided
  if (error) {
    const errorEl = document.createElement('div');
    errorEl.id = errorId;
    errorEl.className = 'ctt-dropdown__error';
    errorEl.setAttribute('role', 'alert');
    errorEl.setAttribute('aria-live', 'polite');
    errorEl.innerHTML = `
      <svg class="ctt-dropdown__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
      </svg>
      <span class="ctt-dropdown__error-text">${error}</span>
    `;
    container.appendChild(errorEl);
  }

  // Function to update the display
  const updateDisplay = () => {
    triggerText.textContent = getDisplayText();
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    list.style.display = isOpen ? 'block' : 'none';
    
    if (isOpen) {
      container.classList.add('ctt-dropdown--open');
    } else {
      container.classList.remove('ctt-dropdown--open');
    }

    // Update hidden input value
    if (multiple && Array.isArray(currentValue)) {
      hiddenInput.value = currentValue.join(',');
    } else {
      hiddenInput.value = currentValue || '';
    }
  };

  // Function to render options
  const renderOptions = () => {
    list.innerHTML = '';
    
    options.forEach(option => {
      const isSelected = isOptionSelected(option);
      const isDisabledOption = getOptionDisabled(option);
      
      const optionEl = document.createElement('div');
      optionEl.className = 'ctt-dropdown__option';
      optionEl.setAttribute('role', 'option');
      optionEl.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      optionEl.setAttribute('tabindex', isDisabledOption ? '-1' : '0');
      
      if (isSelected) optionEl.classList.add('ctt-dropdown__option--selected');
      if (isDisabledOption) optionEl.classList.add('ctt-dropdown__option--disabled');
      if (multiple) optionEl.classList.add('ctt-dropdown__option--checkbox');

      if (multiple) {
        // Multiple selection with checkbox - use same structure as Checkbox component
        const checkboxRoot = document.createElement('label');
        checkboxRoot.className = 'ctt-checkbox__root';
        
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'ctt-checkbox__container';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isSelected;
        checkbox.disabled = isDisabledOption;
        checkbox.className = 'ctt-checkbox__control';
        
        // Prevent checkbox from interfering with option click
        checkbox.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        
        // Create checkmark SVG
        const checkmark = document.createElement('div');
        checkmark.innerHTML = `
          <svg 
            class="ctt-checkbox__checkmark" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M2.5 6L4.5 8L9.5 3" 
              stroke="currentColor" 
              stroke-width="1.5" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        `;
        
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkmark.firstElementChild!);
        
        const labelText = document.createElement('span');
        labelText.className = 'ctt-checkbox__label';
        labelText.textContent = getOptionLabel(option);
        
        checkboxRoot.appendChild(checkboxContainer);
        checkboxRoot.appendChild(labelText);
        
        optionEl.appendChild(checkboxRoot);
        
        if (hasDescription && getOptionDescription(option)) {
          const desc = document.createElement('div');
          desc.className = 'ctt-dropdown__option-description';
          desc.textContent = getOptionDescription(option)!;
          optionEl.appendChild(desc);
        }
      } else {
        // Single selection
        const content = document.createElement('div');
        content.className = 'ctt-dropdown__option-content';
        
        const labelEl = document.createElement('div');
        labelEl.className = 'ctt-dropdown__option-label';
        labelEl.textContent = getOptionLabel(option);
        content.appendChild(labelEl);
        
        if (hasDescription && getOptionDescription(option)) {
          const desc = document.createElement('div');
          desc.className = 'ctt-dropdown__option-description';
          desc.textContent = getOptionDescription(option)!;
          content.appendChild(desc);
        }
        
        optionEl.appendChild(content);
      }

      // Option click handler
      optionEl.addEventListener('click', (e) => {
        if (isDisabledOption || disabled) return;
        
        isOptionClicking = true; // Set flag to prevent outside click
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        const optionValue = getOptionValue(option);
        let newValue;
        
        console.log('Option clicked, multiple:', multiple, 'isOpen before:', isOpen);
        
        if (multiple) {
          const currentArray = Array.isArray(currentValue) ? currentValue : [];
          if (currentArray.includes(optionValue)) {
            newValue = currentArray.filter(v => v !== optionValue);
          } else {
            newValue = [...currentArray, optionValue];
          }
          // Keep dropdown open for multiple selection
          console.log('Multiple selection, keeping dropdown open');
        } else {
          newValue = optionValue;
          // Close dropdown for single selection
          isOpen = false;
          console.log('Single selection, closing dropdown');
        }
        
        currentValue = newValue;
        if (onChange) onChange(newValue);
        renderOptions();
        updateDisplay();
        
        console.log('isOpen after update:', isOpen);
        
        // Reset flag after a short delay
        setTimeout(() => {
          isOptionClicking = false;
        }, 100);
      });

      // Option keyboard handler
      optionEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          optionEl.click();
        }
      });

      list.appendChild(optionEl);
    });
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    if (disabled) return;
    isOpen = !isOpen;
    updateDisplay();
  };

  // Close dropdown when clicking outside
  const handleOutsideClick = (e: Event) => {
    // Don't close if we're currently clicking an option
    if (isOptionClicking) {
      console.log('Option click in progress, ignoring outside click');
      return;
    }
    
    if (!container.contains(e.target as Node)) {
      console.log('Outside click detected, closing dropdown');
      isOpen = false;
      updateDisplay();
    }
  };

  // Event listeners
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdown();
    if (isOpen && onFocus) onFocus(e);
    if (!isOpen && onBlur) onBlur(e);
  });

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
      if (isOpen && onFocus) onFocus(e);
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      isOpen = false;
      updateDisplay();
      if (onBlur) onBlur(e);
    }
  });

  // Listen for outside clicks
  document.addEventListener('click', handleOutsideClick);

  // Cleanup function
  const cleanup = () => {
    document.removeEventListener('click', handleOutsideClick);
  };

  // Store cleanup function on the element
  (container as any).__cleanup = cleanup;

  // Initial render
  renderOptions();
  updateDisplay();

  return container;
};