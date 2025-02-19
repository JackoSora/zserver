import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
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

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getLoggedInUser(@Req() req: RequestWithUser): Promise<Partial<User>> {
    return req.user.toJSON();
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
    const user = await this.usersService.register(
      createUserDto.username,
      createUserDto.password,
    );
    return user.toJSON();
  }

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
    const user = await this.usersService.login(
      createUserDto.username,
      createUserDto.password,
    );
    return user.toJSON();
  }
}
