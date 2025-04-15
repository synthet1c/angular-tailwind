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
  options: FormArray<FormGroup<ChatOptionFormGroup>>; // Nested options array
  conditions: FormArray<FormGroup<ChatOptionFormGroup>>; // Nested conditions array
}

export interface ChatOptionFormGroup {
  key: FormControl<string>; // Key of the option or rule
  name: FormControl<string>; // Name or description of the option/rule
  type: FormControl<string>; // Type of the option/rule
  value: FormControl<string>; // Value to be provided (if applicable)
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
    return this.fb.array(
      features.map((feature: ChatFeature): FormGroup<ChatFeatureFormGroup> =>
        this.fb.group<ChatFeatureFormGroup>({
          key: this.fb.control(feature.key, Validators.required),
          name: this.fb.control(feature.name, Validators.required),
          enabled: this.fb.control(true, Validators.required),
          options: this.createFormOptions(feature.options || []), // Create empty array if no options
          conditions: this.createFormOptions(feature.conditions || []), // Create empty array if no conditions
        })
      )
    );
  }

  createFormOptions(rules: ChatRule[]): FormArray<FormGroup<ChatOptionFormGroup>> {
    return this.fb.array(
      rules.map((rule: ChatRule): FormGroup<ChatOptionFormGroup> =>
        this.fb.group<ChatOptionFormGroup>({
          key: this.fb.control(rule.key, Validators.required),
          name: this.fb.control(rule.name, Validators.required),
          type: this.fb.control(rule.type, Validators.required),
          value: this.fb.control('', Validators.required), // Default value required for inputs
        })
      )
    );
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
