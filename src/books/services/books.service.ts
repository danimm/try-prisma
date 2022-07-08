import { Injectable } from '@nestjs/common';

import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(id: number) {
    return this.prismaService.book.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
