import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { InvalidAuthorIdException } from './exceptions/author-not-found';
import { BookNotFoundException } from './exceptions/book-not-found';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    const author = await this.prisma.author.findUnique({
      where: { id: createBookDto.authorId },
    });
    if (!author) {
      throw new InvalidAuthorIdException();
    }

    return this.prisma.book.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.book.findMany({
      include: { author: true },
    });
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({
      where: { id: id },
      include: { author: true },
    });
    if (!book) {
      throw new BookNotFoundException();
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const existing = await this.prisma.book.findUnique({ where: { id } });
    if (!existing) {
      throw new BookNotFoundException();
    }

    if (
      updateBookDto.authorId !== undefined &&
      updateBookDto.authorId !== null
    ) {
      const author = await this.prisma.author.findUnique({
        where: { id: updateBookDto.authorId },
      });
      if (!author) {
        throw new InvalidAuthorIdException();
      }
    }

    return this.prisma.book.update({
      data: updateBookDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.book.findUnique({ where: { id } });
    if (!existing) {
      throw new BookNotFoundException();
    }

    return this.prisma.book.delete({
      where: { id: id },
    });
  }
}
