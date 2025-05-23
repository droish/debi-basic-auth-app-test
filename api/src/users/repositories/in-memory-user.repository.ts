import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from '../interfaces/user-repository.interface';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  async create(dto: CreateUserDto): Promise<User> {
    if (await this.findByUsername(dto.username)) {
      throw new Error('Username already exists');
    }
    const user = new User(uuid(), dto.username, dto.password);
    this.users.set(user.id, user);
    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async deleteByUsername(username: string): Promise<void> {
    for (const [id, user] of this.users) {
      if (user.username === username) {
        this.users.delete(id);
        return;
      }
    }
    throw new Error('User not found');
  }

    async findAll(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}
