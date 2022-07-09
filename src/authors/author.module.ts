import { Module } from '@nestjs/common';
import { AuthorService } from './services/author.service';
import { AuthorController } from './controllers/author.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, PrismaService],
})
export class AuthorModule {}
