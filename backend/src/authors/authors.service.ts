import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorNotFoundException } from './exceptions/author-not-found';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaginatedService } from 'src/common/services/paginated.service';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService extends PaginatedService<Author> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll(paginationDto?: PaginationDto) {
    return this.paginate(
      paginationDto,
      (skip, take) =>
        this.prisma.author.findMany({
          skip,
          take,
        }),
      () => this.prisma.author.count(),
    );
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
