import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {InputComponent} from '#components/input/input.component';
// import {InputComponent} from '#components/input/input.component';

@Component({
  selector: 'app-address',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    // InputComponent
  ],
  standalone: true,
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit {
  @Input() formGroupName: string;
  addressForm: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.addressForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  protected readonly FormGroup = FormGroup;
}

