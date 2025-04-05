import {ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import { CHAT_RULES } from './chat-rules';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import {SelectComponent} from '#components/select/select.component';
import { CommonModule, JsonPipe } from '@angular/common';
import {InputComponent} from '#components/input/input.component';

@Component({
  selector: 'app-chat-rules',
  imports: [
    ReactiveFormsModule,
    SelectComponent,
    CommonModule,
    InputComponent,
  ],
  templateUrl: './chat-rules.component.html',
  styleUrl: './chat-rules.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChatRulesComponent implements OnInit, OnDestroy {

  @Input() formGroupName = "chatRules";
  @Input() label = "Chat Rules";
  chatRulesForm: FormGroup;

  chatRules = CHAT_RULES.slice(0);

  rootFormGroup = inject(FormGroupDirective);
  private fb = inject(FormBuilder);

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
    const rule = this.chatRulesForm.get('selectedRule') as FormControl;
    const newRule = this.createRuleControl({
      key: rule.value,
      value: '',
    });
    const currentRule = this.chatRules.find((_rule) => _rule.key === rule.value);
    currentRule.disabled = true;
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
  private createRuleControl({ key, value }: { key: string, value: string | number }): FormGroup {
    const currentRule = this.chatRules.find((_rule) => _rule.key === key);
    return this.fb.group({
      name: currentRule.name,
      placeholder: currentRule.description,
      key: new FormControl(key),
      value: new FormControl(value),
    });
  }


  ngOnDestroy() {
  }
}
