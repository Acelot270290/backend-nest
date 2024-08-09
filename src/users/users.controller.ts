import { Controller, Post, Get, Query, Body, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    async register(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string) {
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        return this.usersService.create(username, email, password);
    }

    @Get('checkemail')
    async checkUserExists(@Query('email') email: string) {
        const user = await this.usersService.findByEmail(email);
        if (user) {
            return { message: 'User already exists' };
        } else {
            return { message: 'User does not exist' };
        }
    }
}
