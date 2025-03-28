import { Injectable } from "@angular/core";
import { Repository } from "typeorm";
import {ChatEntity} from '../../entities/chat.entity';
import {AppDataSource} from '../../db';

@Injectable({
  providedIn: "root", // Global service
})
export class ChatRepositoryService {
  private repository: Repository<ChatEntity>;

  constructor() {
    if (AppDataSource.isInitialized) {
      this.repository = AppDataSource.getRepository(ChatEntity);
    } else {
      throw new Error("AppDataSource is not initialized.");
    }
  }

  // Example: Get all chats
  async getAllChats() {
    return await this.repository.find();
  }

  // Example: Add a new chat
  async addChat(chat: Partial<ChatEntity>) {
    const newChat = this.repository.create(chat);
    return await this.repository.save(newChat);
  }

  // Add additional methods as needed
}
