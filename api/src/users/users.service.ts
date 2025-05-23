import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './interfaces/user-repository.interface';

export const USER_REPOSITORY = 'USER_REPOSITORY';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly repo: UserRepository,
  ) {}

  async signup(dto: CreateUserDto): Promise<User> {
    // in future you can hash password here
    return this.repo.create(dto);
  }

  async remove(username: string): Promise<void> {
    return this.repo.deleteByUsername(username);
  }

  async findAll(): Promise<User[]> {
    return this.repo.findAll();
  }
}
