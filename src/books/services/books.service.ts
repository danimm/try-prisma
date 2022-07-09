import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

// import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}
  create(createBookDto: Prisma.BookCreateInput) {
    return this.prismaService.book.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prismaService.book.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prismaService.book.update({
      where,
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
