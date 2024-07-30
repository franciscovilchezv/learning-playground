import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUsers() {
    return this.prismaService.user.findMany();
  }

  createUser(createUserDTO) {
    return this.prismaService.user.create({
      data: createUserDTO,
    });
  }
}
