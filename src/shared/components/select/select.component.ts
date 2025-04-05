import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Option {
  key: string;
  name: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = `select-${Math.random().toString(36).substr(2, 9)}`;
  @Input() options: Option[] = [];
  @Input() value?: any = '';

  @Output() change = new EventEmitter<any>();

  disabled: boolean = false;
  touched: boolean = false;
  onTouched = () => {}
  onChange = (x: string) => {}

  constructor(@Optional() @Self() public control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    // Custom initialization if needed
    if (this.value) {
      this.onChange(this.value);
    }
  }

  onSelectChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
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

}
