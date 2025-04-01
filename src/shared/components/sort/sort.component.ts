import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {path, prop, sortBy, descend} from 'rambda';
import {Chat} from '#models';
import {ChatService} from '#services/chat/chat.service';

@Component({
  selector: 'app-select',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements OnInit {

  chatService = inject(ChatService);

  public sortingOptions = [
    Chat.Sort.RECOMMENDED,
    Chat.Sort.OLDEST,
    Chat.Sort.NEWEST,
    Chat.Sort.MOST_EXPENSIVE,
    Chat.Sort.LEAST_EXPENSIVE,
  ]

  ngOnInit() {
    console.log('SortComponent:onInit');
  }

  sort(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    console.log('SortComponent:sort', event);
    this.chatService.sort(selectElement.value as Chat.Sort);
  }
}
