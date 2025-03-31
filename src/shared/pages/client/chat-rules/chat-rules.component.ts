import {ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import { CHAT_RULES } from './chat-rules';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-chat-rules',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './chat-rules.component.html',
  styleUrl: './chat-rules.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChatRulesComponent implements OnInit, OnDestroy {

  formGroupName = "chatRules";
  @Input() label = "Chat Rules";

  chatRules = CHAT_RULES;

  rootFormGroup = inject(FormGroupDirective);

  get form() {
    return this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  ngOnInit(): void {
    console.log('parentFormGroup', {
      rules: this.chatRules,
      form: this.form,
      rootFormGroup: this.rootFormGroup,
    });
  }

  ngOnDestroy() {
  }
}
