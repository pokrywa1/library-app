import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { InvalidAuthorIdException } from './exceptions/author-not-found';
import { BookNotFoundException } from './exceptions/book-not-found';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Book } from './entities/book.entity';
import { PaginatedService } from 'src/common/services/paginated.service';

@Injectable()
export class BooksService extends PaginatedService<Book> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

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

  findAll(paginationDto?: PaginationDto) {
    return this.paginate(
      paginationDto,
      (skip, take) =>
        this.prisma.book.findMany({
          skip,
          take,
          include: { author: true },
        }),
      () => this.prisma.book.count(),
    );
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
