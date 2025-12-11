import { type User, type InsertUser, type ContactRequest, type InsertContactRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const request: ContactRequest = {
      id,
      name: insertRequest.name,
      phone: insertRequest.phone,
      email: insertRequest.email ?? null,
      service: insertRequest.service,
      message: insertRequest.message ?? null,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
