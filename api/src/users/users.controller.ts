import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async signup(@Body() dto: CreateUserDto) {
    try {
      const user = await this.usersService.signup(dto);
      console.log('User created:', user);
      return { id: user.id, username: user.username };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':username')
  @HttpCode(204)
  async remove(@Param('username') username: string) {
    try {
      await this.usersService.remove(username);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get()
  async getAll() {
    try {
      return this.usersService.findAll();
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }
}
