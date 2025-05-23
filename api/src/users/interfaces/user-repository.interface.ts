import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export interface UserRepository {
  create(dto: CreateUserDto): Promise<User>;
  findByUsername(username: string): Promise<User | undefined>;
  deleteByUsername(username: string): Promise<void>;
  findAll(): Promise<User[]>;
}