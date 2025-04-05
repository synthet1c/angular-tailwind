import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() type: 'checkbox' | 'radio' = 'checkbox'; // Type can be checkbox or radio
  @Input() label: string = ''; // Label for the component
  @Input() disable: boolean = false; // Whether the checkbox/radio is disabled
  @Input() value: any; // Value linked with the component (useful for radio)
  @Input() checked: boolean = false; // Whether the checkbox is checked

  @Output() change = new EventEmitter<any>(); // Emits value changes

  // Internal state for ControlValueAccessor
  private innerValue: any;

  // Callbacks
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.innerValue = value;
    this.checked = value === this.value || value === true; // Synchronize the checked state
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onInputChange(event: Event): void {
    if (this.type === 'radio') {
      this.innerValue = this.value; // Use the component's `value` for radio buttons
    } else {
      this.checked = (event.target as HTMLInputElement).checked;
      this.innerValue = this.checked; // Use the checked state for checkboxes
    }

    this.onChange(this.innerValue); // Notify the form's control group (ControlValueAccessor)
    this.change.emit(this.innerValue); // Emit the updated value to the parent
    this.onTouched(); // Mark as touched
  }
}
