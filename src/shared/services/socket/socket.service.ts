import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { io, Socket } from 'socket.io-client';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private readonly socket!: Socket;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize the socket if running on the browser
      // this.socket = io('http://localhost:8080/chats');
    }
  }

  emit(event: string, data: any): void {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  get<T = unknown>(event: string, data: any): Observable<T> {
    if (!this.socket) {
      return of(null);
    }
    return new Observable((subscriber) => {
      this.socket.emit(event, data, (result: T) => {
        subscriber.next(result);
        subscriber.complete();
      });
    });
  }

  post(event: string, data: any): void {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  onMessage(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }
}
