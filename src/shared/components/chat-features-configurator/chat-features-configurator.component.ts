import {ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {CHAT_FEATURES, CHAT_RULES, ChatFeature, ChatRule} from '../chat-rules/chat-rules';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {Option, SelectComponent} from '#components/select/select.component';
import { CommonModule, JsonPipe } from '@angular/common';
import {InputComponent} from '#components/input/input.component';

export interface ChatFeatureForm {
  types: FormArray<FormGroup<ChatFeatureFormGroup>>; // Array of ChatFeature FormGroups
}

export interface ChatFeatureFormGroup {
  key: FormControl<string>; // Unique key for the feature
  name: FormControl<string>; // Display name for the feature
  enabled: FormControl<boolean>; // Whether the feature is enabled
  options?: FormArray<FormGroup<ChatOptionFormGroup>>; // Nested options array (optional)
  conditions?: FormArray<FormGroup<ChatOptionFormGroup>>; // Nested conditions array (optional)
}

export interface ChatOptionFormGroup {
  key: FormControl<string>; // Value of the option
  name: FormControl<string>; // Value of the option
  type: FormControl<string>; // Value of the option
  value: FormControl<string>; // Value of the option
}

@Component({
  selector: 'app-chat-features-configurator',
  imports: [
    ReactiveFormsModule,
    SelectComponent,
    CommonModule,
    InputComponent,
  ],
  templateUrl: './chat-features-configurator.component.html',
  styleUrl: './chat-features-configurator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChatFeaturesConfiguratorComponent implements OnInit, OnDestroy {

  @Input() formGroupName = "chatFeatures";
  @Input() label = "Chat Features";
  formGroup: FormGroup;

  chatRules = CHAT_RULES.slice(0);
  chatFeatures = CHAT_FEATURES.slice(0);

  rootFormGroup = inject(FormGroupDirective);
  private fb = inject(FormBuilder);
  comparisonOperators: Option[] = [
    {
      key: 'equals',
      name: 'Equals',
    },
    {
      key: 'not',
      name: 'Not',
    },
    {
      key: 'gt',
      name: 'Greater Than',
    },
    {
      key: 'gte',
      name: 'Greater Than or Equal',
    },
    {
      key: 'lt',
      name: 'Less Than',
    },
    {
      key: 'lte',
      name: 'Less Than or Equal',
    },
    {
      key: 'contains',
      name: 'Contains',
    },
  ];

  get form() {
    return this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  get typesFormArray() {
    return this.formGroup.controls['types'] as FormArray<FormGroup<ChatFeatureFormGroup>>;
  }

  // get options() {
  //   return this.formGroup.get('options')
  // }

  get selectedRule() {
    return this.formGroup.get('selectedRule') as FormControl
  }

  ngOnInit(): void {
    this.formGroup = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    // Ensure the 'chatFeatures' FormArray exists
    if (!this.formGroup.get('types')) {
      this.formGroup.addControl('types', this.initFormGroup(CHAT_FEATURES));
    }

    console.log('parentFormGroup', {
      rules: this.chatRules,
      form: this.form,
      rootFormGroup: this.rootFormGroup,
    });
  }

  initFormGroup(features: ChatFeature[]): FormArray<FormGroup<ChatFeatureFormGroup>> {
    return new FormArray<ChatFeatureFormGroup>(
      features.map((feature): ChatFeatureFormGroup =>
        this.fb.group<ChatFeatureFormGroup>({
          key: feature.key,
          name: feature.name,
          enabled: this.fb.control(true, Validators.required),
          ...(feature.options && { options: this.createFormOptions(feature.options) }),
          ...(feature.conditions && { conditions: this.createFormOptions(feature.conditions) })
        }) as FormGroup<ChatFeatureFormGroup>
      ),
    ) as FormArray<FormGroup<ChatFeatureFormGroup>>
  }

  createFormOptions(options: ChatRule[]): FormArray<FormGroup<ChatFeatureFormGroup>> {
    return this.fb.array<FormGroup<ChatFeatureFormGroup>>(
      options.map((option: ChatRule): ChatOptionFormGroup =>
        this.fb.group<ChatOptionFormGroup>({
          key: this.fb.control(option.key),
          name: this.fb.control(option.name),
          type: this.fb.control(option.type),
          value: this.fb.control(this.fb.control('', Validators.required)),
        })
      )
    )
  }

  /**
   * Add a new rule to the rules FormArray
   */
  addRule(): void {
    const newRule = this.createRuleControl();
    this.typesFormArray.push(newRule);
  }

  /**
   * Remove a rule at a specific index
   */
  removeRule(index: number): void {
    this.typesFormArray.removeAt(index);
  }

  /**
   * Creates a new FormGroup for a rule
   */
  private createRuleControl(): FormGroup {
    return this.fb.group({
      key: new FormControl('', [Validators.required]),
      comparisonOperator: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }


  ngOnDestroy() {
  }

  onRuleChange($event: any) {
    console.log('onRuleChange', $event);
  }
}
