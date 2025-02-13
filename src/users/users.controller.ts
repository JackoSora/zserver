import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity'; // Import the User entity
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('default')
  async getDefaultUser(): Promise<any> {
    return this.usersService.getDefaultUser();
  }

  @UseGuards(AuthGuard('jwt')) // Use JWT auth guard
  @Get('me')
  async getLoggedInUser(@Req() req: RequestWithUser): Promise<User> {
    // Returns the logged-in user'
    return req.user; // Access user data from the request object
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    // Creates a new user account.
    return this.usersService.create(createUserDto);
  }
}
