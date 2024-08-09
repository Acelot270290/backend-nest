// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    const user = await this.authService.validateUser(email, password);
    if (user) {
      return this.authService.login(user);
    }
    return { message: 'Invalid credentials' };
  }

  @Post('register')
  async register(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string) {
    return this.authService.register(username, email, password);
  }
}
