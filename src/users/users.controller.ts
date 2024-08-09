// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string) {
    return this.usersService.create(username, email, password);
  }
}
