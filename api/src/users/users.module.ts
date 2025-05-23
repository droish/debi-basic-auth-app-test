import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService, USER_REPOSITORY } from './users.service';
import { InMemoryUserRepository } from './repositories/in-memory-user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY,
      useClass: InMemoryUserRepository, // swap this with a TypeORM/Mongoose repo later
    },
  ],
})
export class UsersModule {}
