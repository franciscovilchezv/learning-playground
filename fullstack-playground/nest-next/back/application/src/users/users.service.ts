import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findUsers() {
    return this.usersRepository.findUsers();
  }

  createUser(createUserDTO) {
    return this.usersRepository.createUser(createUserDTO);
  }
}
