import { Injectable } from "@angular/core";
import { Repository } from "typeorm";
import {Chat} from '../../entities/chat.entity';
import {AppDataSource} from '../../db';

@Injectable({
  providedIn: "root", // Global service
})
export class ChatRepositoryService {
  private repository: Repository<Chat>;

  constructor() {
    if (AppDataSource.isInitialized) {
      this.repository = AppDataSource.getRepository(Chat);
    } else {
      throw new Error("AppDataSource is not initialized.");
    }
  }

  // Example: Get all chats
  async getAllChats() {
    return await this.repository.find();
  }

  // Example: Add a new chat
  async addChat(chat: Partial<Chat>) {
    const newChat = this.repository.create(chat);
    return await this.repository.save(newChat);
  }

  // Add additional methods as needed
}
