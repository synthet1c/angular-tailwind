import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddressComponent} from '#shared/pages/client/user-registration/address/address.component';
import {BasicInfoComponent} from '#shared/pages/client/user-registration/basic-info/basic-info.component';
import {ChatRulesComponent} from '#shared/pages/client/chat-rules/chat-rules.component';

@Component({
  standalone: true,
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    AddressComponent,
    BasicInfoComponent,
    ChatRulesComponent
  ]
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  userForm: FormGroup = this.fb.group({
    basicInfo: this.fb.group({
      firstName: ['Andrew', Validators.required],
      lastName: ['Fountain', Validators.required],
    }),
    address: this.fb.group({
      street: ['Aphrasia'],
      streetNumber: ['10/2'],
      postcode: ['3220', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ]],
    }),
    chatRules: this.fb.group({
      selectedRule: ['', Validators.required],
      rules: this.fb.array([])
    }),
  });
  private ageValueChanges: Subscription;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ageValueChanges?.unsubscribe()
  }

  onSubmit() {
    console.log('UserRegistrationComponent:submit', this.userForm.value);
  }
}
