import {ChangeDetectionStrategy, Component, computed, input, Signal} from '@angular/core';
import {Chat} from '../../entities';
import {compute} from '../../utils';
import {path, prop} from 'rambda';

const getMessage = compute<string, Chat>(prop('message'));
const getName = compute<string, Chat>(path(['chatter', 'nickname']));

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MessageComponent {

  chat = input.required<Chat>();

  name = getName(this.chat);
  message = getMessage(this.chat);

}
