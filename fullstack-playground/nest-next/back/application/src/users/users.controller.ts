import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  findUsers() {
    return this.usersService.findUsers();
  }

  @Post('/')
  createUser(@Body() createUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }
}
