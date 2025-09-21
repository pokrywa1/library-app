import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorNotFoundException } from './exceptions/author-not-found';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  async findOne(id: number) {
    const author = await this.prisma.author.findUnique({
      where: { id: id },
      include: { books: true },
    });
    if (!author) {
      throw new AuthorNotFoundException();
    }
    return author;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const existing = await this.prisma.author.findUnique({ where: { id } });
    if (!existing) {
      throw new AuthorNotFoundException();
    }

    return this.prisma.author.update({
      data: updateAuthorDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.author.findUnique({ where: { id } });
    if (!existing) {
      throw new AuthorNotFoundException();
    }

    return this.prisma.author.delete({
      where: { id: id },
    });
  }
}
