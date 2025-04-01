import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {InputComponent} from "#components/input/input.component";

@Component({
  selector: 'app-basic-info',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent
  ],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BasicInfoComponent implements OnInit {
  @Input() formGroupName: string;
  basicInfoForm: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.basicInfoForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
