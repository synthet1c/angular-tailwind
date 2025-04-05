import {ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import { CHAT_RULES } from '../chat-rules/chat-rules';
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

@Component({
  selector: 'app-chat-rules-configurator',
  imports: [
    ReactiveFormsModule,
    SelectComponent,
    CommonModule,
    InputComponent,
  ],
  templateUrl: './chat-rules-configurator.component.html',
  styleUrl: './chat-rules-configurator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChatRulesConfiguratorComponent implements OnInit, OnDestroy {

  @Input() formGroupName = "chatRules";
  @Input() label = "Chat Rules";
  chatRulesForm: FormGroup;

  chatRules = CHAT_RULES.slice(0);

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

  get rulesFormArray() {
    return this.chatRulesForm.get('rules') as FormArray;
  }

  get selectedRule() {
    return this.chatRulesForm.get('selectedRule') as FormControl
  }

  ngOnInit(): void {
    this.chatRulesForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    // Ensure the 'rules' FormArray exists
    if (!this.chatRulesForm.get('rules')) {
      this.chatRulesForm.addControl('rules', this.fb.array([]));
    }

    console.log('parentFormGroup', {
      rules: this.chatRules,
      form: this.form,
      rootFormGroup: this.rootFormGroup,
    });
  }

  /**
   * Add a new rule to the rules FormArray
   */
  addRule(): void {
    const newRule = this.createRuleControl();
    this.rulesFormArray.push(newRule);
  }

  /**
   * Remove a rule at a specific index
   */
  removeRule(index: number): void {
    this.rulesFormArray.removeAt(index);
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
