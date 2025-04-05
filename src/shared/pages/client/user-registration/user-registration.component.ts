import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddressComponent} from '#shared/pages/client/user-registration/address/address.component';
import {BasicInfoComponent} from '#shared/pages/client/user-registration/basic-info/basic-info.component';
import {ChatRulesConfiguratorComponent} from '#components/chat-rules-configurator/chat-rules-configurator.component';
import {
  ChatFeaturesConfiguratorComponent
} from '#components/chat-features-configurator/chat-features-configurator.component';
import {CHAT_FEATURES} from '#components/chat-rules/chat-rules';

@Component({
  standalone: true,
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    AddressComponent,
    BasicInfoComponent,
    ChatRulesConfiguratorComponent,
    ChatFeaturesConfiguratorComponent
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
      rules: this.fb.array([
        this.fb.group({
          key: ['price', Validators.required],
          comparisonOperator: ['equals', Validators.required],
          value: ['4', Validators.required],
        })
      ])
    }),
    chatFeatures: this.fb.group({
      // types: this.fb.array([
      //   CHAT_FEATURES.map((feature) =>
      //     this.fb.group({
      //       key: feature.key,
      //       name: feature.name,
      //       enabled: [true, Validators.required],
      //       ...(feature.options && {
      //         options: this.fb.array(
      //           feature.options.map((option) =>
      //             this.fb.group({
      //               key: option.key,
      //               name: option.name,
      //               type: option.type,
      //               value: ['', Validators.required],
      //             })
      //           )
      //         )
      //       }),
      //       ...(feature.conditions && {
      //         conditions: this.fb.array(
      //           feature.conditions.map((condition) =>
      //             this.fb.group({
      //               key: condition.key,
      //               name: condition.name,
      //               type: condition.type,
      //               value: ['', Validators.required],
      //             })
      //           )
      //         )
      //       })
      //   })),
      // ])
    })
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
