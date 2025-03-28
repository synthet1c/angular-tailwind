import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {
  DndDraggableDirective,
  DndDropEvent,
  DndDropzoneDirective,
  DndHandleDirective,
  DndPlaceholderRefDirective,
  DropEffect,
  EffectAllowed
} from 'ngx-drag-drop';
import {BehaviorSubject, Observable} from 'rxjs';
import {ChatService} from '../../services/chat/chat.service';
import {AsyncPipe} from '@angular/common';
import {Chat} from '../../shared/models';

export interface DraggableItem {
  id: number;
  chatter: {
    nickname: string;
  }
  message: string;
}

@Component({
  selector: 'app-chat-list',
  imports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    AsyncPipe,
  ],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChatListComponent implements OnInit {
  public items$ = new BehaviorSubject<DraggableItem[]>([]);

  private chatService = inject(ChatService);
  public currentDraggedItem: DraggableItem | null = null;

  ngOnInit() {
    console.log('ChatListComponent:ngOnInit');
    this.chatService.getChats()
      .subscribe((items: Chat[]) => {
        this.items$.next(items);
      });
    this.items$.subscribe((items) => {
      console.log('ChatListComponent:items$', items);
    });
  }

  onDrop(event: DndDropEvent): void {
    if (!event.data) {
      return;
    }

    // Access the current list of items
    const items = this.items$.getValue();

    // Get the dragged item and its original index
    const draggedChat: DraggableItem = event.data;
    const previousIndex = items.findIndex(item => item.id === draggedChat.id);

    // Calculate the new index (where the item is dropped)
    const targetIndex = event.index !== undefined ? event.index : items.length - 1;

    console.log('ChatListComponent:onDrop', { previousIndex, targetIndex, chat: draggedChat });

    if (previousIndex !== -1) {
      // Remove the dragged item from its previous position
      items.splice(previousIndex, 1);

      // Insert the dragged item at the new position
      items.splice(targetIndex, 0, draggedChat);

      // Emit the updated list
      this.items$.next(items);
    }
  }

  onDragEnd(chat: DraggableItem, event: DragEvent) {
    console.log('ChatListComponent:onDragEnd', event);
  }

  onStart(chat: DraggableItem, event: DragEvent) {
    this.currentDraggedItem = chat;
    console.log('ChatListComponent:onStart', chat, event);
  }

  onDrag(chat: DraggableItem, event: DragEvent) {
    // console.log('ChatListComponent:onDrag', event);
  }

  onDragMoved(chat: DraggableItem, event: any) {
    // console.log('ChatListComponent:onDragMoved', event);
  }
}
