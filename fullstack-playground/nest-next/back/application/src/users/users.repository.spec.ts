import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './users.repository';
import { PrismaService } from '../shared/prisma/prisma.service';

describe('UsersRepository', () => {
  let provider: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersRepository,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    provider = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
