// app-input.component.ts
import {ChangeDetectionStrategy, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = `input-${Math.random().toString(36).substr(2, 9)}`;

  value: any = '';
  disabled: boolean = false;
  touched: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(@Optional() @Self() public control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    // Custom initialization if needed
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.touched = true;
    this.onTouched();
  }

  showError(): boolean {
    return this.control?.invalid && (this.control?.touched || this.touched);
  }
}
