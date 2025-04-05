import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface MultiCheckboxOption {
  key: string; // Option key (value of the checkbox)
  label: string; // Display label for the checkbox
}

@Component({
  selector: 'app-multi-checkbox',
  imports: [
    CommonModule,
  ],
  standalone: true,
  templateUrl: './multi-checkbox.component.html',
  styleUrl: './multi-checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiCheckboxComponent {
  @Input() options: MultiCheckboxOption[] = []; // List of checkbox options
  @Input() value: string[] = []; // Selected values
  @Input() disabled: boolean = false; // Whether the checkboxes are disabled
  @Input() label: string = ''; // Optional label for the entire checkbox group

  @Output() change: EventEmitter<string[]> = new EventEmitter<string[]>(); // Emits when the value changes

  onCheckboxChange(optionKey: string, checked: boolean): void {
    if (!checked) {
      // Remove unselected item
      this.value = this.value.filter((val) => val !== optionKey);
    } else {
      // Add newly selected item
      this.value = [...this.value, optionKey];
    }
    this.change.emit(this.value); // Emit the updated value
  }

  isChecked(optionKey: string): boolean {
    return this.value.includes(optionKey);
  }
}
