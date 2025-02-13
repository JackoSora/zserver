import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto): import("./entities/user.entity").User | PromiseLike<import("./entities/user.entity").User> {
    throw new Error('Method not implemented.');
  }
  getDefaultUser(): any {
    throw new Error('Method not implemented.');
  }
}
