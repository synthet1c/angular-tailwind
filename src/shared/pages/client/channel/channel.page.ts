import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ChatConfig} from '#models';
import {ChatRulesComponent} from '#shared/pages/client/chat-rules/chat-rules.component';

@Component({
  selector: 'app-channel-page',
  imports: [
    ReactiveFormsModule,
    // ChatRulesComponent
  ],
  templateUrl: './channel.page.html',
  styleUrl: './channel.page.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelPage {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  private createForm() {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      channel: new FormControl(null, [Validators.required]),
      ruleName: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      subscriberOnly: new FormControl(false),
      appliesToVideo: new FormControl(false),
      chatRules: new FormGroup({
        selectedRule: new FormControl(''),
      })
    });

  }

  onSubmit(): void {
    const formValue: any = this.form.value;
    if (this.form.valid) {
      console.log('Form Submitted:', formValue);
    } else {
      console.error('Form is invalid', formValue);
    }
  }
}
